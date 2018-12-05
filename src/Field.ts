import * as React from "react";
import * as ReactDOM from "react-dom";
import { IValidationPorps } from "./IValidationPorps";
import { toElement } from "./utils";
import { states } from "./states";

const ATTR_KEY = "data-state";
const STYLE_ID = 'mota-validation';
const { isArray, isNull } = require("ntils");

function createStyle(global: any) {
  const { document } = global;

  if (!document || document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.innerHTML = `
  [${ATTR_KEY}]{transition-duration:.2s;transition-property:box-shadow;}
  [${ATTR_KEY}="0"]{ outline:none;box-shadow:0 0 2px 1px rgba(255,0,0,.8);}`;
  const container = document.head || document.body;
  container.appendChild(style);
}
createStyle(global as any);

function setState(ref: any, state: states) {
  const element = ReactDOM.findDOMNode(ref) as HTMLElement;
  if (!element) return;
  element.setAttribute(ATTR_KEY, String(state));
}

export interface IFieldPorps extends IValidationPorps {
  children?: any;
}

/**
 * 表单组件容器
 * @param {IFieldPorps} props 属性
 */
export function Field(props: IFieldPorps): any {
  const { validation, results, bind, rules, alias, children } = props;
  if (children && isArray(children) && children.length > 0) {
    throw Error(`The State(${bind}) can only have a sub element`);
  }
  if (!validation) return toElement(children);
  if (rules) validation.setRule(bind, rules, alias);
  const result = results.items[bind] || {};
  if (!result) return toElement(children);
  let { state } = result;
  if (isNull(state)) state = states.unknown;
  return React.cloneElement(toElement(children), {
    ref: (ref: any) => setState(ref, state)
  });
}
