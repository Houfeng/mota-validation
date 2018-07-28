import { ReactElement } from 'react'
import { IRule } from "./IRule";
import { TestItem } from "./TestItem";
import { builtIn } from './builtIn';
import { ITestItemMap } from './ItestItemMap';
import { IValidationPorps } from './IValidationPorps';
import { Alert, IAlertPorps } from './Alert';
import { Field, IFieldPorps } from './Field';
import { State, IStateProps } from './State';
import { Component } from "react";
import { states } from './states'

export { IValidationPorps, Alert };

const { getByPath, isFunction, isString, each } = require('ntils');
const EventEmitter = require('eify');

export class Validation extends EventEmitter {

  private __component: Component;
  private __model: any;
  private __items: ITestItemMap = {};
  private __watchers: Array<any> = [];
  private __aliases: any = {};
  private __testCount = 0;

  private __alert: (props: IAlertPorps) => any;
  private __field: (props: IFieldPorps) => any;
  private __state: (props: IStateProps) => any;

  constructor(component: any) {
    super();
    this.__component = component;
    this.__model = component.model;
  }

  private updateComponent = (validation?: ITestItemMap) => {
    if (!this.component) return;
    validation = validation || this.items;
    this.component.setState({ validation });
  }

  public get Alert() {
    const validation = this;
    if (!this.__alert) {
      this.__alert = (props: IAlertPorps) => Alert({ ...props, validation });
    }
    return this.__alert;
  } 

  public get Field() {
    const validation = this;
    if (!this.__field) {
      this.__field = (props: IFieldPorps) => Field({ ...props, validation });
    }
    return this.__field;
  }

  public get State() {
    const validation = this;
    if (!this.__state) {
      this.__state = (props: IStateProps) => State({ ...props, validation });
    }
    return this.__state;
  }

  public get tests() {
    return builtIn;
  }

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

  public get items() {
    return this.__items;
  }

  public get testCount() {
    return this.__testCount;
  }

  public item(bind: string) {
    return this.items[bind];
  }

  public setRule = (bind: string, rules: IRule | Array<IRule>,
    alias?: string) => {
    if (!this.items[bind]) this.items[bind] = new TestItem(bind);
    if (rules) this.items[bind].rules = Array.isArray(rules) ? rules : [rules];
    if (alias) this.aliases[alias] = bind;
  }

  public setState = (bind: string, state: states,
    message: ReactElement<any> | string = '', update: boolean = true) => {
    this.items[bind].state = state;
    this.items[bind].message = message;
    if (update) this.updateComponent();
  }

  private async testOne(bind: string) {
    bind = this.aliases[bind] || bind;
    if (!this.model) return;
    const item = this.item(bind);
    if (!item || !item.rules || item.rules.length < 1) return;
    const value = getByPath(this.model, bind);
    this.setState(bind, states.testing);
    let state: Boolean = true, message: ReactElement<any> | string = '';
    for (const rule of item.rules) {
      const test: Function = isFunction(rule.test) ?
        <Function>rule.test : builtIn[<string>rule.test];
      state = await test(value);
      message = rule.message;
      if (!state) break;
    }
    this.setState(bind, state ? states.succeed : states.failed, message);
  }

  private async testAll() {
    if (!this.model) return [];
    const keys = Object.keys(this.items);
    await Promise.all(keys.map(bind => this.testOne(bind)));
  }

  public test = async (bind?: string) => {
    this.__testCount++;
    if (bind && isString(bind)) {
      await this.testOne(bind);
    } else {
      await this.testAll();
    }
    this.emit('test', this);
    return this.state(bind);
  }

  public state = (bind?: string) => {
    bind = this.aliases[bind] || bind;
    if (bind && isString(bind)) {
      const item = this.items[bind];
      return item ? item.state : states.unknown;
    }
    const binds = Object.keys(this.items);
    if (binds.length < 1) return states.unknown;
    if (binds.some(bind => this.state(bind) === states.failed))
      return states.failed;
    if (binds.some(bind => this.state(bind) === states.testing))
      return states.testing;
    if (binds.some(bind => this.state(bind) === states.untested))
      return states.untested;
    return states.succeed;
  }

  public startWatch = () => {
    each(this.items, (bind: string, rule: IRule) => {
      const watcher = this.model._observer_
        .watch(() => getByPath(this.model, bind), () => this.test(bind));
      watcher.calc(false);
      this.__watchers.push(watcher);
    });
  }

  public stopWatch = () => {
    this.__watchers.forEach(watcher => this.model._observer_.unWatch(watcher));
  }

  public distory = () => {
    this.off('test', this.updateComponent);
  }

}