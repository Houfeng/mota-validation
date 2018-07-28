import * as React from 'react';
import { TestItem } from './TestItem';
import { IValidationPorps } from './IValidationPorps';
import { IRule } from './IRule';
import { toElement } from './utils';
import { states } from './states';

export interface IStateProps extends IValidationPorps {
  when: states;
  children?: any;
}

export function State(props: IStateProps) {
  const { validation, bind, when, alias, children, rules } = props;
  if (!validation) return toElement();
  if (rules) validation.setRule(bind, rules, alias);
  const item: TestItem = validation.item(bind);
  if (!item || item.state !== when) return toElement();
  return toElement(children);
}