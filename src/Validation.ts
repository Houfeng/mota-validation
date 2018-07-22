import { IRuleMap } from "./IRuleMap";
import { IRule } from "./IRule";
import { Result } from "./Result";
import { builtIn } from './builtIn';
import { IValidationPorps } from './IValidationPorps';
import { IResultMap } from './IResultMap';
import { Alert } from './Alert';
import { Status } from './Status';

export { IValidationPorps, Alert };

const { getByPath, isFunction, isString, each } = require('ntils');
const EventEmitter = require('eify');

export class Validation extends EventEmitter {

  private __model: any;
  private __rules: IRuleMap = {};
  private __results: IResultMap = {};
  private __watchers: Array<any> = [];
  private __testCount = 0;
  private __aliases: any = {};

  private __alert: (props: IValidationPorps) => any;
  private __status: (props: IValidationPorps) => any;

  constructor(model: any) {
    super();
    this.__model = model;
  }

  public get Alert() {
    const validation = this;
    if (!this.__alert) {
      this.__alert = (props: IValidationPorps) => Alert({ ...props, validation });
    }
    return this.__alert;
  }

  public get Status() {
    const validation = this;
    if (!this.__status) {
      this.__status = (props: IValidationPorps) =>
        Status({ ...props, validation });
    }
    return this.__status;
  }

  public get tests() {
    return builtIn;
  }

  private get rules() {
    return this.__rules;
  }

  private get aliases() {
    return this.__aliases;
  }

  private get model() {
    return this.__model;
  }

  public get results() {
    return this.__results;
  }

  public get testCount() {
    return this.__testCount;
  }

  public setRule(bind: string, rule: IRule | Array<IRule>, alias?: string) {
    const rules = Array.isArray(rule) ? rule : [rule];
    if (rules) this.rules[bind] = rules;
    if (alias) this.aliases[alias] = bind;
  }

  private async testOne(bind: string) {
    bind = this.aliases[bind] || bind;
    if (!this.model) return new Result(true, bind);
    const rules = this.rules[bind];
    if (!rules || rules.length < 1) return new Result(true, bind);
    const value = getByPath(this.model, bind);
    for (const rule of rules) {
      const test: Function = isFunction(rule.test) ?
        <Function>rule.test : builtIn[<string>rule.test];
      const status = await test(value);
      if (!status) return new Result(status, bind, rule.message);
    }
    return new Result(true, bind);
  }

  private async testAll() {
    if (!this.model) return [];
    const binds = Object.keys(this.rules);
    return Promise.all(binds.map(bind => this.testOne(bind)));
  }

  test = async (bind?: string) => {
    this.__testCount++;
    const results = bind && isString(bind) ?
      [await this.testOne(bind)] : await this.testAll();
    results.forEach(result => this.results[result.bind] = result);
    this.emit('test', this.results);
    return this.status(bind);
  }

  status = (bind?: string) => {
    bind = this.aliases[bind] || bind;
    if (bind && isString(bind)) {
      const result = this.results[bind];
      return result ? result.status : true;
    }
    const binds = Object.keys(this.results);
    return !binds.some(bind => !this.results[bind].status);
  }

  result = (bind?: string) => {
    bind = this.aliases[bind] || bind;
    if (!bind) return new Result(true);
    return this.results[bind];
  }

  startWatch = () => {
    each(this.rules, (bind: string, rule: IRule) => {
      const watcher = this.model._observer_
        .watch(() => getByPath(this.model, bind), () => this.test(bind));
      watcher.calc(false);
      this.__watchers.push(watcher);
    });
  }

  stopWatch = () => {
    this.__watchers.forEach(watcher => this.model._observer_.unWatch(watcher));
  }

}