import { ITestItem } from "./ITestItem";
import { IValidationPorps } from "./IValidationPorps";
import { toElement } from "./utils";
import { states } from "./states";

const { isArray } = require("ntils");

export interface IStateProps extends IValidationPorps {
  when?: states | states[];
  children?: any;
}

/**
 * 状态组件（状态符合时显示）
 * @param {IStateProps} props 属性
 */
export function State(props: IStateProps) {
  const { validation, bind, when, alias, children, rules } = props;
  if (!validation) return toElement();
  if (rules) validation.setRule(bind, rules, alias);
  const item: ITestItem = validation.item(bind);
  if (!item) return toElement();
  const whenStates: states[] = isArray(when) ? <states[]>when : [<states>when];
  if (whenStates.indexOf(item.state) < 0) return toElement();
  return toElement(children);
}
