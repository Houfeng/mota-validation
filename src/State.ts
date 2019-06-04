import { IValidationPorps } from "./IValidationPorps";
import { states } from "./states";
import { toElement } from "./utils";

const { isArray } = require("ntils");

export interface IStateProps extends IValidationPorps {
  when?: states | states[];
  children?: any;
  type?: string;
}

/**
 * 状态组件（状态符合时显示）
 * @param {IStateProps} props 属性
 */
export function State(props: IStateProps) {
  const {
    validation,
    results,
    bind,
    when,
    alias,
    children,
    rules,
    type,
    className
  } = props;
  if (!validation) return toElement();
  if (rules) validation.setRule(bind, rules, alias);
  const result = results.items[bind];
  if (!result) return toElement();
  const { state } = result;
  const whenStates: states[] = isArray(when) ? <states[]>when : [<states>when];
  if (whenStates.indexOf(state) < 0) return toElement();
  return toElement(children, { className }, type);
}
