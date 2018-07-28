import { IValidationPorps } from './IValidationPorps';
export interface IFieldPorps extends IValidationPorps {
    children?: any;
}
export declare function Field(props: IFieldPorps): any;
