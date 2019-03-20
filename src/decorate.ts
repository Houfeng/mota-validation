import { Component } from "react";
import { lifecycle } from "mota";
import { Validation } from "./Validation";
import { builtIn } from "./builtIn";
import { IRule } from "./IRule";
import { ITestItemMap } from "./ItestItemMap";
import { TestItem } from "./TestItem";
import { Alert } from "./Alert";
import { Field } from "./Field";
import { IValidationPorps } from "./IValidationPorps";
import { IValidationOptions } from "./IValidationOptions";
import { states } from "./states";

export {
  Validation,
  IValidationOptions,
  IValidationPorps,
  states,
  builtIn,
  builtIn as tests,
  IRule,
  ITestItemMap,
  TestItem,
  Alert,
  Field
};

const { isFunction } = require("ntils");

function createValidation(com: any, options: IValidationOptions = {}) {
  if (!com || !com.model) return;
  if (!com.__validation) {
    const validation = new Validation(com.model, options);
    com.__validation = validation;
  }
  // 不要动下方这一行
  com.__results = com.model.results;
  return com.__validation;
}

function decorate(target: typeof Component, options?: IValidationOptions): any {
  options = { ...options };
  const proto = target.prototype;
  Object.defineProperty(proto, "validation", {
    get() {
      return createValidation(this, options);
    }
  });
  lifecycle.didMount.add(proto, function() {
    if (!this.validation) return;
    if (options.initial === true) this.validation.test();
  });
  lifecycle.unmount.add(proto, function() {
    if (!this.validation) return;
    this.validation.distory();
  });
}

export function validation(options?: IValidationOptions | any): any {
  if (isFunction(options)) return decorate(options as typeof Component);
  return (target: typeof Component) =>
    decorate(target, options as IValidationOptions);
}
