import { IValidationPorps } from './IValidationPorps';
import { IRule } from './IRule';
export interface IAlertPorps extends IValidationPorps {
    children?: Array<IRule>;
}
/**
 * 验证失败提示信息组件
 * @param {IAlertPorps} props 属性
 */
export declare function Alert(props: IAlertPorps): any;
