import { ReactElement } from 'react'
import { states } from './states'
import { IRule } from "./IRule";

export interface ITestItem {
  bind: string;
  rules: Array<IRule>;
  state: states;
  message: string | ReactElement<any>
}