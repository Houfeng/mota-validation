import { ReactElement, Component } from "react";
import { abortable } from "promise-boost";
import { IRule } from "./IRule";
import { TestItem } from "./TestItem";
import { builtIn } from "./builtIn";
import { ITestItemMap } from "./ItestItemMap";
import { IValidationPorps } from "./IValidationPorps";
import { Alert, IAlertPorps } from "./Alert";
import { Field, IFieldPorps } from "./Field";
import { State, IStateProps } from "./State";
import { states } from "./states";
import { ITestItem } from "./ITestItem";
import { IValidationOptions } from "./IValidationOptions";
import { ITestResult } from "./ITestResult";

export { IValidationPorps, Alert };

const { getByPath, isFunction, isString } = require("ntils");
const EventEmitter = require("eify");

export class Validation extends EventEmitter {
  private __component: Component;
  private __options: IValidationOptions;
  private __model: any;
  private __items: ITestItemMap = {};
  private __watchers: { [bind: string]: any } = {};
  private __aliases: any = {};
  private __testCount = 0;

  private __alert: (props: IAlertPorps) => any;
  private __field: (props: IFieldPorps) => any;
  private __state: (props: IStateProps) => any;

  constructor(component: any, options: IValidationOptions) {
    super();
    this.__options = options;
    this.__component = component;
    this.__model = component.model;
  }

  private updateComponent = (validation?: ITestItemMap) => {
    if (!this.component) return;
    validation = validation || this.items;
    this.component.setState({ validation });
  };

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
        Alert({
          ...props,
          validation: this
        });
    }
    return this.__alert;
  }

  /**
   * 表单组件容器
   */
  public get Field() {
    if (!this.__field) {
      this.__field = (props: IFieldPorps) =>
        Field({
          ...props,
          validation: this
        });
    }
    return this.__field;
  }

  /**
   * 状态组件（状态符合时显示）
   */
  public get State() {
    if (!this.__state) {
      this.__state = (props: IStateProps) =>
        State({
          ...props,
          validation: this
        });
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

  private get model() {
    return this.__model;
  }

  private get component() {
    return this.__component;
  }

  /**
   * 所有验证项
   */
  public get items() {
    return this.__items;
  }

  /**
   * 验证次数
   */
  public get testCount() {
    return this.__testCount;
  }

  /**
   * 获取验证项
   * @param bind 指定的数据
   * @returns {ITestItem}
   */
  public item(bind: string) {
    bind = this.aliases[bind] || bind;
    return this.items[bind];
  }

  /**
   * 设定验证规则
   * @param {string} bind 要验证的数据
   * @param {IRule | Array<IRule>} rules 规则
   * @param {string} alias 别名
   */
  public setRule = (bind: string, rules: IRule | IRule[], alias?: string) => {
    if (!this.items[bind]) this.items[bind] = new TestItem(bind);
    if (rules) this.items[bind].rules = Array.isArray(rules) ? rules : [rules];
    if (alias) this.aliases[alias] = bind;
    if (this.options.auto !== false) this.startWatch(bind);
  };

  /**
   * 设定验证结果（一般无需主动干预结果）
   * @param {string} bind 对应的数据项
   * @param {states} state 要设定的状态
   * @param {string} message 提示信息
   * @param {boolean} update 是否立即更新组件
   */
  public setState = (
    bind: string,
    state: states,
    message: ReactElement<any> | string = "",
    update = true
  ) => {
    this.items[bind].state = state;
    this.items[bind].message = message;
    if (update) this.updateComponent();
  };

  private async createTestPending(
    item: ITestItem,
    value: any
  ): Promise<ITestResult> {
    let state = true,
      message: ReactElement<any> | string = "";
    for (const rule of item.rules) {
      const test: Function = isFunction(rule.test)
        ? <Function>rule.test
        : builtIn[<string>rule.test];
      if (!isFunction(test)) {
        throw new Error(`Invalid test function: ${rule.test}`);
      }
      state = await test(value);
      message = rule.message;
      if (!state) break;
    }
    return { state, message };
  }

  private async testOne(bind: string) {
    bind = this.aliases[bind] || bind;
    if (!this.model) return;
    const item = this.item(bind);
    if (!item || !item.rules || item.rules.length < 1) return;
    if (item.pending) item.pending.abort();
    const value = getByPath(this.model, bind);
    this.setState(bind, states.testing);
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
    this.__testCount++;
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

  private startWatch = (bind: string) => {
    if (this.__watchers[bind]) return;
    let watchTimer: any = null;
    const watcher = this.model._observer_.watch(
      () => getByPath(this.model, bind),
      () => {
        if (watchTimer) clearTimeout(watchTimer);
        watchTimer = setTimeout(() => {
          if (!watchTimer) return;
          this.test(bind);
          watchTimer = null;
        }, this.options.debounce || 300);
      }
    );
    watcher.calc(false);
    this.__watchers[bind] = watcher;
  };

  public reset = () => {
    Object.keys(this.items).forEach((bind: string) => {
      this.setState(bind, states.unknown, '', false);
    });
    this.updateComponent();
  }

  /**
   * 销毁
   */
  public distory = () => {
    this.off("test", this.updateComponent);
    const binds = Object.keys(this.items);
    binds.forEach(bind => {
      const watcher = this.__watchers[bind];
      this.model._observer_.unWatch(watcher);
    });
  };
}
