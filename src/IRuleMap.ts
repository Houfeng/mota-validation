import { IRule } from "./IRule";

export interface IRuleMap {
  [bind: string]: Array<IRule>;
}