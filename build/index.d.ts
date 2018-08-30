import { Component } from "react";
import { Validation } from "./Validation";
import { builtIn } from "./builtIn";
import { IRule } from "./IRule";
import { ITestItemMap } from "./ItestItemMap";
import { TestItem } from "./TestItem";
import { Alert } from "./Alert";
import { Field } from "./Field";
import { IValidationPorps } from "./IValidationPorps";
import { IValidationOptions } from "./IValidationOptions";
import { states } from "./states";
export { Validation, IValidationOptions, IValidationPorps, states, builtIn, builtIn as tests, IRule, ITestItemMap, TestItem, Alert, Field };
export declare function validation(options?: IValidationOptions | typeof Component): any;
export default validation;
