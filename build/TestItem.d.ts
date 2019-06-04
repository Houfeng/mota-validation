import { IRule } from "./IRule";
import { ITestItem } from "./ITestItem";
import { ITestResult } from "./ITestResult";
import { states } from "./states";
export declare class TestItem implements ITestItem {
    bind: string;
    rules: IRule[];
    state: states;
    message: string;
    pending: Promise<ITestResult>;
    constructor(bind: string, rules?: IRule[], state?: states, message?: string, pending?: Promise<ITestResult>);
}
