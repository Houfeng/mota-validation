import { ITestItem } from "./ITestItem";
import { states } from "./states";
import { IRule } from "./IRule";
import { ITestResult } from "./ITestResult";

export class TestItem implements ITestItem {
  constructor(
    public bind: string,
    public rules: IRule[] = [],
    public state: states = states.untested,
    public message: string = "",
    public pending: Promise<ITestResult> = null
  ) { }
}
