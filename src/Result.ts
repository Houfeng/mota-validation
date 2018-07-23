import { ReactElement } from 'react'
import { IResult } from './IResult'

export class Result implements IResult {
  constructor(public status: boolean,
    public bind?: string, public message?: string | ReactElement<any>) { }
}