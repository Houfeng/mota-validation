import { ITestMap } from './ITestMap'

export const builtIn: ITestMap = {

  /**
   * 任意值
   */
  any: (value: any) => true,

  /**
   * 非空值（包括空字符串）
   */
  required: (value: any) => !!value,

  /**
   * 非空白字符（可视字符）
   */
  nonblank: (value: any) => !/[\s]+/.test(value),

  /**
   * 数值
   */
  number: (value: any) => !value || !isNaN(value),

  /**
   * 数值区间
   */
  range: (min: number, max: number) =>
    (value: number) => !value || value >= min && value <= max,

  /**
   * 字符串长度
   */
  len: (min: number, max: number) =>
    (value: string) => value.length >= min && value.length <= max,

  /**
   * 邮箱
   */
  email: (value: string) => !value || /[\S]+\@[\S]+/ig.test(value),

  /**
   * 中文
   */
  zh: (value: string) => !value || /^[\u4e00-\u9fa5\s]{0,}$/.test(value),

  /**
   * 英文
   */
  en: (value: string) => !value || /^[a-z\s]+$/.test(value),

  /**
   * IP v4
   */
  ipv4: (value: string) => !value || /\d+\.\d+\.\d+\.\d+/.test(value),

  /**
   * URL
   */
  url: (value: string) => !value || /^[\S]+\:\/\//.test(value),

};