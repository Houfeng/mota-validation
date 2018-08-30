import { ReactElement } from "react";

export interface ITestResult {
  state: boolean;
  message: string | ReactElement<any>;
}
