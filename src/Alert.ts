import { ITestItem } from './ITestItem';
import { IValidationPorps } from './IValidationPorps';
import { IRule } from './IRule';
import { toElement } from './utils';
import { states } from './states';


export interface IAlertPorps extends IValidationPorps {
  children?: Array<IRule>;
}

export function Alert(props: IAlertPorps): any {
  const { validation, bind, alias, children, rules = children } = props;
  if (!validation) return toElement();
  if (rules) validation.setRule(bind, rules, alias);
  const item: ITestItem = validation.item(bind);
  if (!item || item.state !== states.failed || !item.message) {
    return toElement();
  }
  return toElement(item.message);
}