import { IRule } from "./IRule";
import { IValidationPorps } from './IValidationPorps';
import { IResultMap } from './IResultMap';
import { Alert } from './Alert';
import { IResult } from "./IResult";
export { IValidationPorps, Alert };
declare const EventEmitter: any;
export declare class Validation extends EventEmitter {
    private __component;
    private __model;
    private __rules;
    private __results;
    private __watchers;
    private __testCount;
    private __aliases;
    private __alert;
    private __status;
    constructor(component: any);
    private updateComponent;
    readonly Alert: (props: IValidationPorps) => any;
    readonly Status: (props: IValidationPorps) => any;
    readonly tests: import("../../../../../../Users/Houfeng/my/dev/mota-validation/src/ITestMap").ITestMap;
    private readonly rules;
    private readonly aliases;
    private readonly model;
    private readonly component;
    readonly results: IResultMap;
    readonly testCount: number;
    setRule: (bind: string, rule: IRule | IRule[], alias?: string) => void;
    setRules: (map: {
        [bind: string]: IRule | IRule[];
    }) => void;
    setResult: (bind: string, result: IResult, update?: boolean) => void;
    setResults: (map: {
        [bind: string]: IResult;
    }) => void;
    private testOne;
    private testAll;
    test: (bind?: string) => Promise<boolean>;
    status: (bind?: string) => boolean;
    result: (bind?: string) => IResult;
    startWatch: () => void;
    stopWatch: () => void;
    distory: () => void;
}
