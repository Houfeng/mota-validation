import * as React from "react";
import * as ReactDOM from "react-dom";
import { IValidationPorps } from "./IValidationPorps";
import { states } from "./states";
import { toElement } from "./utils";

const ATTR_KEY = "data-state";
const STYLE_ID = "mota-validation";
const { isArray, isNull } = require("ntils");

function createStyle(global: any) {
  const { document } = global;
  if (!document || document.getElementById(STYLE_ID)) return;
  const container = document.head || document.body;
  if (!container) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.innerHTML = `
  [${ATTR_KEY}]{transition-duration:.2s;transition-property:all;}
  [${ATTR_KEY}="0"]{outline:none;border-color:#f5222d;}
  [${ATTR_KEY}="0"]:focus{box-shadow:0 0 0 2px rgba(245, 34, 45, 0.2);}`;
  container.appendChild(style);
}
createStyle(global as any);

/**
 * Field 组件属性接口定义
 */
export interface IFieldPorps extends IValidationPorps {
  children?: any;
}

/**
 * Field 函数式组件类型定义
 */
export interface IFieldComponent {
  (props: IFieldPorps): any;
  applyToElement?: (element: HTMLElement, state: states) => any;
}

/**
 * 表单组件容器
 * @param {IFieldPorps} props 属性
 */
export const Field: IFieldComponent = FieldComponent;

function FieldComponent(props: IFieldPorps): any {
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

function setState(ref: any, state: states) {
  const element = ReactDOM.findDOMNode(ref) as HTMLElement;
  if (!element) return;
  if (Field.applyToElement) return Field.applyToElement(element, state);
  element.setAttribute(ATTR_KEY, String(state));
}
