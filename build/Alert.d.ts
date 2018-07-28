import { IValidationPorps } from './IValidationPorps';
import { IRule } from './IRule';
export interface IAlertPorps extends IValidationPorps {
    children?: Array<IRule>;
}
export declare function Alert(props: IAlertPorps): any;
