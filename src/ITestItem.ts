import { ReactElement } from 'react';
import { IAbortablePromise } from 'promise-boost';
import { states } from './states';
import { IRule } from "./IRule";

export interface ITestItem {
  bind: string;
  rules: Array<IRule>;
  state: states;
  message: string | ReactElement<any>;
  pending?: IAbortablePromise<{ state, message }>;
}