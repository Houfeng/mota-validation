import { IValidationPorps } from './IValidationPorps';
import { states } from './states';
export interface IStateProps extends IValidationPorps {
    when?: states | Array<states>;
    children?: any;
}
export declare function State(props: IStateProps): any;
