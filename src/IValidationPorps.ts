import { IRule } from "./IRule";
import { Validation } from "./Validation";

export interface IValidationPorps {
  validation?: Validation;
  results?: any;
  bind: string;
  rules?: IRule[];
  alias?: string;
  className?: string;
}
