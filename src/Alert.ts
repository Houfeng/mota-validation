import { Result } from './Result';
import { IValidationPorps } from './IValidationPorps';

const NONE = "";

export function Alert(props: IValidationPorps): any {
  const {
    validation, bind, as, alias = as, children = [], rules = children
  } = props;
  if (!validation) return NONE;
  if (rules) validation.setRule(bind, rules, alias);
  const result: Result = validation.result(bind);
  if (!result || result.status) return NONE;
  return result.message || NONE;
}