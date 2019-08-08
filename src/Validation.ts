import { abortable } from "promise-boost";
import { Alert, IAlertPorps } from "./Alert";
import { builtIn } from "./builtIn";
import { EventEmitter } from "./EventEmitter";
import { Field, IFieldPorps } from "./Field";
import { IResults } from "./IResults";
import { IRule } from "./IRule";
import { IStateProps, State } from "./State";
import { ITestFunction } from "./ITestFunction";
import { ITestItem } from "./ITestItem";
import { ITestItemMap } from "./ItestItemMap";
import { ITestResult } from "./ITestResult";
import { IValidationOptions } from "./IValidationOptions";
import { IValidationPorps } from "./IValidationPorps";
import { states } from "./states";
import { TestItem } from "./TestItem";
import { utils } from "mota";

export { IValidationPorps, Alert };

const { getByPath, isFunction, isString } = require("ntils");
const DY_TEST_FUNC_CACHE: { [name: string]: ITestFunction } = {};

export class Validation extends EventEmitter {
  private __options: IValidationOptions;
  private __model: any;
  private __items: ITestItemMap = {};
  private __watchers: { [bind: string]: any } = {};
  private __aliases: any = {};
  private __time = 0;
  private __watchPaused = false;

  private __alert: (props: IAlertPorps) => any;
  private __field: (props: IFieldPorps) => any;
  private __state: (props: IStateProps) => any;

  constructor(model: any, options: IValidationOptions) {
    super();
    options = { stateKey: "results", debounce: 300, ...options };
    this.__options = options;
    this.__model = model;
    this.__watchPaused = false;
    this.initResults();
  }

  private initResults() {
    const { stateKey } = this.options;
    const items: any = {},
      time = 0,
      state = states.unknown;
    this.__model._observer_.set(stateKey, { state, time, items });
  }

  public get results() {
    const { stateKey } = this.options;
    return this.model[stateKey] as IResults;
  }

  public set results(value) {
    const { stateKey } = this.options;
    this.model[stateKey] = value;
  }

  /**
   * 选项
   */
  public get options() {
    return this.__options;
  }

  /**
   * 错误提示组件
   */
  public get Alert() {
    if (!this.__alert) {
      this.__alert = (props: IAlertPorps) =>
        Alert({ ...props, results: this.results, validation: this });
      utils.defineGetter(this.__alert, "name", "Alert");
    }
    return this.__alert;
  }

  /**
   * 表单组件容器
   */
  public get Field() {
    if (!this.__field) {
      this.__field = (props: IFieldPorps) =>
        Field({ ...props, results: this.results, validation: this });
      utils.defineGetter(this.__field, "name", "Field");
    }
    return this.__field;
  }

  /**
   * 状态组件（状态符合时显示）
   */
  public get State() {
    if (!this.__state) {
      this.__state = (props: IStateProps) =>
        State({ ...props, results: this.results, validation: this });
      utils.defineGetter(this.__state, "name", "State");
    }
    return this.__state;
  }

  /**
   * 所有内建验证函数
   */
  public get tests() {
    return builtIn;
  }

  /**
   * 验证状态枚举
   */
  public get states() {
    return states;
  }

  private get aliases() {
    return this.__aliases;
  }

  public get model() {
    return this.__model;
  }

  /**
   * 所有验证项
   */
  public get items() {
    return this.__items;
  }

  /**
   * 验证次数（将要废弃，请使用 time 属性替代）
   * @deprecated
   */
  public get testCount() {
    return this.__time;
  }

  /**
   * 验证次数
   */
  public get time() {
    return this.__time;
  }

  /**
   * 获取验证项
   * @param bind 指定的数据
   * @returns {ITestItem}
   */
  public item(bind: string) {
    bind = this.aliases[bind] || bind;
    if (!bind) return;
    return this.items[bind];
  }

  /**
   * 设定验证规则
   * @param {string} bind 要验证的数据
   * @param {IRule | Array<IRule>} rules 规则
   * @param {string} alias 别名
   */
  public setRule = (bind: string, rules: IRule | IRule[], alias?: string) => {
    if (!bind) return;
    if (!this.items[bind]) this.items[bind] = new TestItem(bind);
    if (rules) this.items[bind].rules = Array.isArray(rules) ? rules : [rules];
    if (alias) this.aliases[alias] = bind;
    if (!this.results.items[bind]) {
      this.results.items[bind] = { state: states.untested, message: "" };
    }
    if (this.options.auto !== false) this.watch(bind);
  };

  /**
   * 移除验证规则
   * @param bind 绑定的数据
   */
  public removeRule(bind: string) {
    bind = this.aliases[bind] || bind;
    if (!bind) return;
    this.items[bind] = null;
    delete this.items[bind];
    delete this.results.items[bind];
  }

  /**
   * 清理规测
   */
  public clearRules() {
    Object.keys(this.items).forEach((bind: string) => {
      this.removeRule(bind);
    });
  }

  /**
   * 设定验证结果（一般无需主动干预结果）
   * @param {string} bind 对应的数据项
   * @param {states} state 要设定的状态
   * @param {string} message 提示信息
   * @param {boolean} update 是否立即更新组件
   */
  public setState = (bind: string, state: states, message = "") => {
    if (!bind) return;
    this.items[bind].state = state;
    this.items[bind].message = message;
    this.results.items[bind].state = state;
    this.results.items[bind].message = message;
    this.results = { ...this.results, time: this.time, state: this.state() };
  };

  private getTestFuncForString(test: string): ITestFunction {
    if (builtIn[test]) return builtIn[test] as ITestFunction;
    if (DY_TEST_FUNC_CACHE[test]) return DY_TEST_FUNC_CACHE[test];
    try {
      // tslint:disable
      const func = /^\./.test(test)
        ? new Function("$", `return $${test}`)(this.model)
        : new Function("$", `return $.${test}`)(builtIn);
      // tslint:enable
      DY_TEST_FUNC_CACHE[test] = func;
      return DY_TEST_FUNC_CACHE[test];
    } catch {
      throw new Error(`Invalid test: ${test}`);
    }
  }

  private getTestFunc(test: ITestFunction | string | RegExp): ITestFunction {
    if (isFunction(test)) return test as ITestFunction;
    if (test instanceof RegExp) return value => test.test(value);
    if (isString(test)) return this.getTestFuncForString(<string>test);
    throw new Error(`Invalid test: ${test}`);
  }

  private async createTestPending(
    item: ITestItem,
    value: any
  ): Promise<ITestResult> {
    let state = true,
      message = "";
    for (const rule of item.rules) {
      const test: ITestFunction = this.getTestFunc(rule.test);
      if (!isFunction(test)) throw new Error(`Invalid test: ${test}`);
      state = await test(value, this.model);
      message = state ? "" : rule.message;
      if (!state) break;
    }
    return { state, message };
  }

  private async testOne(bind: string) {
    bind = this.aliases[bind] || bind;
    if (!bind || !this.model) return;
    const item = this.item(bind);
    if (!item || !item.rules || item.rules.length < 1) return;
    if (item.pending) item.pending.abort();
    const value = getByPath(this.model, bind);
    this.setState(bind, states.testing, "");
    item.pending = abortable(this.createTestPending(item, value));
    const { state, message } = await item.pending;
    this.setState(bind, state ? states.succeed : states.failed, message);
  }

  private async testAll() {
    if (!this.model) return;
    const keys = Object.keys(this.items);
    await Promise.all(keys.map(bind => this.testOne(bind)));
  }

  /**
   * 触发验证，传入 bind 时验证指定数据项，省略参数时验证整个表单
   * @param {string} bind 要验证的数据
   * @returns {Promise<states>} 验证结果
   */
  public test = async (bind?: string) => {
    this.__time++;
    if (bind && isString(bind)) {
      await this.testOne(bind);
    } else {
      await this.testAll();
    }
    this.emit("test", this);
    return this.state(bind);
  };

  /**
   * 查询验证结果，传入 bind 时查询指定数据项，省略参数时查询整个表单
   * @param {string} bind 要验证的数据
   * @returns {Promise<states>} 验证结果
   */
  public state = (bind?: string) => {
    bind = this.aliases[bind] || bind;
    if (bind && isString(bind)) {
      const item = this.items[bind];
      return item ? item.state : states.unknown;
    }
    const binds = Object.keys(this.items);
    if (binds.length < 1) return states.unknown;
    if (binds.some(bind => this.state(bind) === states.failed)) {
      return states.failed;
    }
    if (binds.some(bind => this.state(bind) === states.testing)) {
      return states.testing;
    }
    if (binds.some(bind => this.state(bind) === states.untested)) {
      return states.untested;
    }
    return states.succeed;
  };

  public pauseWatch = () => {
    this.__watchPaused = true;
  };

  public resumeWatch = () => {
    this.__watchPaused = false;
  };

  private watch = (bind: string) => {
    if (this.__watchers[bind]) return;
    let watchTimer: any = null;
    const watcher = this.model._observer_.watch(
      () => getByPath(this.model, bind),
      () => {
        if (this.__watchPaused) return;
        if (watchTimer) clearTimeout(watchTimer);
        watchTimer = setTimeout(() => {
          if (!watchTimer) return;
          this.test(bind);
          watchTimer = null;
        }, this.options.debounce);
      }
    );
    watcher.calc(false);
    this.__watchers[bind] = watcher;
  };

  private unWatch(bind: string) {
    const watcher = this.__watchers[bind];
    if (!watcher) return;
    this.model._observer_.unWatch(watcher);
    this.__watchers[bind] = null;
  }

  public sartWatch = () => {
    const binds = Object.keys(this.items);
    binds.forEach(bind => this.watch(bind));
    this.resumeWatch();
  };

  public stopWatch = () => {
    this.pauseWatch();
    const binds = Object.keys(this.items);
    binds.forEach(bind => this.unWatch(bind));
  };

  public reset = () => {
    Object.keys(this.items).forEach((bind: string) => {
      this.setState(bind, states.untested, "");
    });
  };

  /**
   * 销毁
   */
  public distory = () => {
    this.stopWatch();
  };
}
