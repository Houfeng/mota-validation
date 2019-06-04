import { IRule } from "./IRule";
import { ITestItem } from "./ITestItem";
import { ITestResult } from "./ITestResult";
import { states } from "./states";

export class TestItem implements ITestItem {
  constructor(
    public bind: string,
    public rules: IRule[] = [],
    public state: states = states.untested,
    public message = "",
    public pending: Promise<ITestResult> = null
  ) {}
}
