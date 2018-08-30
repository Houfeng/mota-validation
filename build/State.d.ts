import { IValidationPorps } from "./IValidationPorps";
import { states } from "./states";
export interface IStateProps extends IValidationPorps {
    when?: states | states[];
    children?: any;
}
/**
 * 状态组件（状态符合时显示）
 * @param {IStateProps} props 属性
 */
export declare function State(props: IStateProps): any;
