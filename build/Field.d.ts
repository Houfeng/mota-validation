import { IValidationPorps } from './IValidationPorps';
export interface IFieldPorps extends IValidationPorps {
    children?: any;
}
/**
 * 表单组件容器
 * @param {IFieldPorps} props 属性
 */
export declare function Field(props: IFieldPorps): any;
