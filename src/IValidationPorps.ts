import { IRule } from "./IRule";
import { Validation } from "./Validation";

export interface IValidationPorps {
  validation?: Validation;
  bind: string;
  rules?: IRule[];
  alias?: string;
}
