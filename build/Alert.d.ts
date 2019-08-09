import { IRule } from "./IRule";
import { IValidationPorps } from "./IValidationPorps";
export interface IAlertPorps extends IValidationPorps {
    type?: string;
    children?: IRule[];
}
export declare function Alert(props: IAlertPorps): any;
