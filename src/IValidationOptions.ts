export interface IValidationOptions {
  /**
   * 是否自动进行一次初始校验，默认为 false
   */
  initial?: boolean;

  /**
   * 模型数发生变化时是自动定校验，默认为 true
   */
  auto?: boolean;

  /**
   * 去抖时间阈值
   */
  debounce?: number;
}
