import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IValidationPorps } from './IValidationPorps';
import { toElement } from './utils';
import { states } from './states'

const { isArray, isNull } = require('ntils');
const attrKey = 'data-state';

function createStyle() {
  const style = document.createElement('style');
  style.innerHTML = `[${attrKey}]{
    transition-duration:.2s;transition-property:box-shadow;
  }
  [${attrKey}="0"]{
    outline:none;box-shadow:0 0 2px 1px rgba(255,0,0,.8);
  }`;
  const container = document.head || document.body;
  container.appendChild(style);
}
createStyle();

function setState(ref, state: states) {
  const element = ReactDOM.findDOMNode(ref) as HTMLElement;
  if (!element) return;
  element.setAttribute(attrKey, String(state));
}

export interface IFieldPorps extends IValidationPorps {
  children?: any;
}

export function Field(props: IFieldPorps): any {
  const { validation, bind, rules, alias, children } = props;
  if (children && isArray(children) && children.length > 0) {
    throw Error(`The State(${bind}) can only have a sub element`);
  }
  if (!validation) return toElement(children);
  if (rules) validation.setRule(bind, rules, alias);
  let state = validation.state(bind)
  if (isNull(state)) state = states.unknown;
  return React.cloneElement(toElement(children), {
    ref: (ref) => setState(ref, state)
  });
}