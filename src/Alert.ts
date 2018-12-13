import { IValidationPorps } from "./IValidationPorps";
import { IRule } from "./IRule";
import { toElement } from "./utils";
import { states } from "./states";

export interface IAlertPorps extends IValidationPorps {
  children?: IRule[];
}

/**
 * 验证失败提示信息组件
 * @param {IAlertPorps} props 属性
 */
export function Alert(props: IAlertPorps): any {
  const {
    validation,
    results,
    bind,
    alias,
    children,
    rules = children
  } = props;
  if (!validation) return toElement();
  if (rules) validation.setRule(bind, rules, alias);
  const result = results.items[bind];
  if (!result) return toElement();
  const { state, message } = result;
  if (state !== states.failed || !message) return toElement();
  return toElement(message);
}
