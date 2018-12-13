import { ITestFunction } from "./ITestFunction";

export interface IRule {
  message?: string;
  test: ITestFunction | RegExp | string;
}
