import { ReactElement } from 'react'

export class Result {
  constructor(public status: boolean,
    public bind?: string, public message?: string | ReactElement<any>) { }
}