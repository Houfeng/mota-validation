export interface IRule {
  message?: string;
  test: ((value: any) => boolean) | string | Function;
}
