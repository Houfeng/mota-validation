import { ReactElement } from 'react';
import { ITestItem } from './ITestItem';
import { states } from './states';
import { IRule } from './IRule';
export declare class TestItem implements ITestItem {
    bind: string;
    rules: Array<IRule>;
    state: states;
    message: string | ReactElement<any>;
    pending: Promise<{
        state: boolean;
        message: string | ReactElement<any>;
    }>;
    constructor(bind: string, rules?: Array<IRule>, state?: states, message?: string | ReactElement<any>, pending?: Promise<{
        state: boolean;
        message: string | ReactElement<any>;
    }>);
}
