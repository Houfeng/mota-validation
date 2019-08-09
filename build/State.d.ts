import { IValidationPorps } from "./IValidationPorps";
import { states } from "./states";
export interface IStateProps extends IValidationPorps {
    when?: states | states[];
    children?: any;
    type?: string;
}
export declare function State(props: IStateProps): any;
