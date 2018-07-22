import { ReactElement } from 'react';
export declare class Result {
    status: boolean;
    bind?: string;
    message?: string | ReactElement<any>;
    constructor(status: boolean, bind?: string, message?: string | ReactElement<any>);
}
