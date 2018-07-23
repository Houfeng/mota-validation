import { IValidationPorps } from './IValidationPorps';
import { IRule } from './IRule';
export interface IStatusPorps extends IValidationPorps {
    children?: Array<IRule>;
}
export declare function Alert(props: IStatusPorps): any;
