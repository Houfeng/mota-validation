import * as React from 'react';
import { ITestItem } from './ITestItem';
import { IValidationPorps } from './IValidationPorps';
import { IRule } from './IRule';
import { toElement } from './utils';
import { states } from './states';

const { isArray } = require('ntils');

export interface IStateProps extends IValidationPorps {
  when?: states | Array<states>;
  children?: any;
}

export function State(props: IStateProps) {
  const { validation, bind, when, alias, children, rules } = props;
  if (!validation) return toElement();
  if (rules) validation.setRule(bind, rules, alias);
  const item: ITestItem = validation.item(bind);
  if (!item) return toElement();
  const whenStates: Array<states> = isArray(when) ?
    <Array<states>>when : [<states>when];
  if (whenStates.indexOf(item.state) < 0) return toElement();
  return toElement(children);
}