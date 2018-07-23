import * as React from 'react';
import { Result } from './Result';
import { IValidationPorps } from './IValidationPorps';
import { IRule } from './IRule';
import { toElement } from './utils';


export interface IStatusPorps extends IValidationPorps {
  children?: Array<IRule>;
}

export function Alert(props: IStatusPorps): any {
  const {
    validation, bind, as, alias = as, children, rules = children
  } = props;
  if (!validation) return toElement();
  if (rules) validation.setRule(bind, rules, alias);
  const result: Result = validation.result(bind);
  if (!result || result.status || !result.message) return toElement();
  return toElement(result.message);
}