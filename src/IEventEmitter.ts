export interface IEventEmitter {
  new (): any;
  on(event: string, handler: Function): any;
  off(event: string, handler: Function): any;
  emit(event: string, handler: Function): any;
}
