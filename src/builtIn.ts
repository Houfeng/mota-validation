import { ITestMap } from "./ITestMap";

/**
 * 内建验证函数集
 */
export const builtIn: ITestMap = {
  /**
   * 任意值
   */
  // tslint-disable-next-line
  any: () => true,

  /**
   * 非空值（包括不能是空字符串）
   */
  required: (value: any) => !!value || value === 0,

  /**
   * 非空白字符（可视字符）
   */
  nonblank: (value: any) => !/[\s]+/.test(value),

  /**
   * 数值
   */
  number: (value: any) => !value || !isNaN(value),

  /**
   * 非数值
   */
  nan: (value: any) => !value || isNaN(value),

  /**
   * 数值区间
   */
  range: (min: number, max: number) => (value: number) =>
    !value || (value >= min && value <= max),

  /**
   * 字符串长度
   */
  len: (min: number, max: number, trim: boolean) => (value: string) => {
    if (trim) value = value.trim();
    return value.length >= min && value.length <= max;
  },

  /**
   * 邮箱
   */
  email: (value: string) => !value || /[\S]+\@[\S]+/gi.test(value),

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
  url: (value: string) => !value || /^[\S]+\:\/\//.test(value)
};
