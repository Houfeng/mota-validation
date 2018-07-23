import { ReactElement } from 'react';
import { IResult } from './IResult';
export declare class Result implements IResult {
    status: boolean;
    bind?: string;
    message?: string | ReactElement<any>;
    constructor(status: boolean, bind?: string, message?: string | ReactElement<any>);
}
