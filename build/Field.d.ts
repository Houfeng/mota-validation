import { IValidationPorps } from "./IValidationPorps";
import { states } from "./states";
export interface IFieldPorps extends IValidationPorps {
    children?: any;
}
export interface IFieldComponent {
    (props: IFieldPorps): any;
    applyToElement?: (element: HTMLElement, state: states) => any;
}
export declare const Field: IFieldComponent;
