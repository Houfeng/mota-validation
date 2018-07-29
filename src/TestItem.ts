import { ReactElement } from 'react'
import { ITestItem } from './ITestItem'
import { states } from './states'
import { IRule } from './IRule';

export class TestItem implements ITestItem {
  constructor(
    public bind: string,
    public rules: Array<IRule> = [],
    public state: states = states.untested,
    public message: string | ReactElement<any> = '',
    public pending: Promise<{
      state: boolean,
      message: string | ReactElement<any>
    }> = null
  ) { }
}