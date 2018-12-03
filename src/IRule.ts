import { ReactElement } from "react";

export interface IRule {
  message?: string | ReactElement<any>;
  test: ((value: any) => boolean) | string | Function;
}
