import { ReactElement } from "react";
import { IAbortablePromise } from "promise-boost";
import { states } from "./states";
import { IRule } from "./IRule";
import { ITestResult } from "./ITestResult";
export interface ITestItem {
    bind: string;
    rules: IRule[];
    state: states;
    message: string | ReactElement<any>;
    pending?: IAbortablePromise<ITestResult>;
}
