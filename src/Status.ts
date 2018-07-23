import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IValidationPorps } from './IValidationPorps';
import { toElement } from './utils';

const { isArray } = require('ntils');

function createStyle() {
  const style = document.createElement('style');
  style.innerHTML = `[data-validation-status]{
    transition-duration:.2s;transition-property:box-shadow;
  }
  [data-validation-status="false"]{
    outline:none;box-shadow:0 0 2px 1px rgba(255,0,0,.8);
  }`;
  const container = document.head || document.body;
  container.appendChild(style);
}
createStyle();

function setStatus(ref, status: boolean) {
  const element = ReactDOM.findDOMNode(ref) as HTMLElement;
  if (!element) return;
  element.setAttribute('data-validation-status', String(status));
}

export interface IStatusPorps extends IValidationPorps {
  children?: any;
}

export function Status(props: IStatusPorps): any {
  const { validation, bind, rules, as, alias = as, children } = props;
  if (children && isArray(children) && children.length > 0) {
    throw Error(`The Status(${bind}) can only have a sub element`);
  }
  if (!validation) return toElement(children);
  if (rules) validation.setRule(bind, rules, alias);
  const status = validation.status(bind);
  return React.cloneElement(toElement(children),
    { ref: (ref) => setStatus(ref, status) });
}