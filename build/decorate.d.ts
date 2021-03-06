import { Alert } from "./Alert";
import { builtIn } from "./builtIn";
import { Field } from "./Field";
import { IRule } from "./IRule";
import { ITestItemMap } from "./ItestItemMap";
import { IValidationOptions } from "./IValidationOptions";
import { IValidationPorps } from "./IValidationPorps";
import { states } from "./states";
import { TestItem } from "./TestItem";
import { Validation } from "./Validation";
export { Validation, IValidationOptions, IValidationPorps, states, builtIn, builtIn as tests, IRule, ITestItemMap, TestItem, Alert, Field };
export declare function validation(options?: IValidationOptions | any): any;
