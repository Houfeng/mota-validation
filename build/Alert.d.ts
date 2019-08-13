import { IRule } from "./IRule";
import { IValidationPorps } from "./IValidationPorps";
export interface IAlertPorps extends IValidationPorps {
    type?: string;
    children?: IRule[];
}
/**
 * 验证失败提示信息组件
 * @param {IAlertPorps} props 属性
 */
export declare function Alert(props: IAlertPorps): any;
