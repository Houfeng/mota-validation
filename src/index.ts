import { Component } from 'react';
import { utils } from 'mota';
import { Validation } from './Validation';
import { builtIn } from './builtIn';
import { IRule } from './IRule';
import { ITestItemMap } from './ItestItemMap';
import { TestItem } from './TestItem';
import { Alert } from './Alert';
import { Field } from './Field';
import { IValidationPorps } from './IValidationPorps';
import { IValidationOptions } from './IValidationOptions';
import { states } from './states'

export {
  Validation, IValidationOptions, IValidationPorps, states,
  builtIn, builtIn as tests, IRule, ITestItemMap, TestItem, Alert, Field
};

const { isFunction } = require('ntils');
const { registerMountHandler, registerUnmountHandler } = utils;

function getValidation(com: any, options: IValidationOptions = {}) {
  if (!com.model) return;
  if (!com.__validation) {
    com.__validation = new Validation(com, options);
  }
  return com.__validation;
}

function decorate(target: typeof Component,
  options: IValidationOptions = {}): any {
  const proto = target.prototype;
  Object.defineProperty(proto, 'validation', {
    get() { return getValidation(this, options) }
  });
  registerMountHandler(proto, function () {
    if (!this.validation) return;
    if (options.initial === true) this.validation.test();
  });
  registerUnmountHandler(proto, function () {
    if (!this.validation) return;
    this.validation.distory();
  });
}

export function validation(options: IValidationOptions |
  typeof Component = {}): any {
  if (isFunction(options)) return decorate(options as typeof Component);
  return (target: typeof Component) =>
    decorate(target, options as IValidationOptions);
};

export default validation;