import { ReactElement } from 'react'

export interface IResult {
  status: boolean,
  bind?: string,
  message?: string | ReactElement<any>
}