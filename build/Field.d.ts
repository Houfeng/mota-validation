import { IValidationPorps } from "./IValidationPorps";
import { states } from "./states";
/**
 * Field 组件属性接口定义
 */
export interface IFieldPorps extends IValidationPorps {
    children?: any;
}
/**
 * Field 函数式组件类型定义
 */
export interface IFieldComponent {
    (props: IFieldPorps): any;
    applyToElement?: (element: HTMLElement, state: states) => any;
}
/**
 * 表单组件容器
 * @param {IFieldPorps} props 属性
 */
export declare const Field: IFieldComponent;
