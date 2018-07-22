import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IValidationPorps } from './IValidationPorps';

function createStyle() {
  const style = document.createElement('style');
  style.innerHTML = `[data-validation-status]{
    transition-duration:.3s;transition-property:box-shadow;
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

export function Status(props: IValidationPorps): any {
  const { validation, bind, rules, as, alias = as, children } = props;
  if (!validation) return children;
  if (rules) validation.setRule(bind, rules, alias);
  const status = validation.status(bind);
  return React.Children.map(children, (child: any) => {
    return React.cloneElement(child, { ref: (ref) => setStatus(ref, status) });
  });
}