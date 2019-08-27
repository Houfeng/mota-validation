import { IRule } from "./IRule";
import { IValidationPorps } from "./IValidationPorps";
import { states } from "./states";
import { toElement } from "./utils";

export interface IAlertPorps extends IValidationPorps {
  type?: string;
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
    rules = children,
    type,
    className
  } = props;
  if (!validation) return toElement();
  validation.setRule(bind, rules, alias);
  const result = results.items[bind];
  if (!result) return toElement();
  const { state, message } = result;
  if (state !== states.failed || !message) return toElement();
  return toElement(message, { className }, type);
}
