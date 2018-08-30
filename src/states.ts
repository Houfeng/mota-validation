/**
 * 验证状态
 */
export enum states {
  /**
   * 未知
   */
  unknown = -3,

  /**
   * 未验证
   */
  untested = -2,

  /**
   * 验证中
   */
  testing = -1,

  /**
   * 失败
   */
  failed = 0,

  /**
   * 成功
   */
  succeed = 1,

  /**
   * 成功
   */
  success = 1
}
