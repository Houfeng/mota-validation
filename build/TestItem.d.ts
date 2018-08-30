import { ReactElement } from "react";
import { ITestItem } from "./ITestItem";
import { states } from "./states";
import { IRule } from "./IRule";
import { ITestResult } from "./ITestResult";
export declare class TestItem implements ITestItem {
    bind: string;
    rules: IRule[];
    state: states;
    message: string | ReactElement<any>;
    pending: Promise<ITestResult>;
    constructor(bind: string, rules?: IRule[], state?: states, message?: string | ReactElement<any>, pending?: Promise<ITestResult>);
}
