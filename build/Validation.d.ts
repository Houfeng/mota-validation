import { ReactElement } from "react";
import { IRule } from "./IRule";
import { ITestItemMap } from "./ItestItemMap";
import { IValidationPorps } from "./IValidationPorps";
import { Alert, IAlertPorps } from "./Alert";
import { IFieldPorps } from "./Field";
import { IStateProps } from "./State";
import { states } from "./states";
import { ITestItem } from "./ITestItem";
import { IValidationOptions } from "./IValidationOptions";
import { EventEmitter } from "./EventEmitter";
export { IValidationPorps, Alert };
export declare class Validation extends EventEmitter {
    private __component;
    private __options;
    private __model;
    private __items;
    private __watchers;
    private __aliases;
    private __testCount;
    private __watchPaused;
    private __alert;
    private __field;
    private __state;
    constructor(component: any, options: IValidationOptions);
    private updateComponent;
    /**
     * 选项
     */
    readonly options: IValidationOptions;
    /**
     * 错误提示组件
     */
    readonly Alert: (props: IAlertPorps) => any;
    /**
     * 表单组件容器
     */
    readonly Field: (props: IFieldPorps) => any;
    /**
     * 状态组件（状态符合时显示）
     */
    readonly State: (props: IStateProps) => any;
    /**
     * 所有内建验证函数
     */
    readonly tests: import("./ITestMap").ITestMap;
    /**
     * 验证状态枚举
     */
    readonly states: typeof states;
    private readonly aliases;
    private readonly model;
    private readonly component;
    /**
     * 所有验证项
     */
    readonly items: ITestItemMap;
    /**
     * 验证次数
     */
    readonly testCount: number;
    /**
     * 获取验证项
     * @param bind 指定的数据
     * @returns {ITestItem}
     */
    item(bind: string): ITestItem;
    /**
     * 设定验证规则
     * @param {string} bind 要验证的数据
     * @param {IRule | Array<IRule>} rules 规则
     * @param {string} alias 别名
     */
    setRule: (bind: string, rules: IRule | IRule[], alias?: string) => void;
    /**
     * 移除验证规则
     * @param bind 绑定的数据
     */
    removeRule(bind: string): void;
    /**
     * 清理规测
     */
    clearRules(): void;
    /**
     * 设定验证结果（一般无需主动干预结果）
     * @param {string} bind 对应的数据项
     * @param {states} state 要设定的状态
     * @param {string} message 提示信息
     * @param {boolean} update 是否立即更新组件
     */
    setState: (bind: string, state: states, message?: string | ReactElement<any>, update?: boolean) => void;
    private createTestPending;
    private testOne;
    private testAll;
    /**
     * 触发验证，传入 bind 时验证指定数据项，省略参数时验证整个表单
     * @param {string} bind 要验证的数据
     * @returns {Promise<states>} 验证结果
     */
    test: (bind?: string) => Promise<states>;
    /**
     * 查询验证结果，传入 bind 时查询指定数据项，省略参数时查询整个表单
     * @param {string} bind 要验证的数据
     * @returns {Promise<states>} 验证结果
     */
    state: (bind?: string) => states.unknown | states.unknown | states.untested | states.untested | states | states.succeed;
    pauseWatch: () => void;
    resumeWatch: () => void;
    private watch;
    private unWatch;
    sartWatch: () => void;
    stopWatch: () => void;
    reset: () => void;
    /**
     * 销毁
     */
    distory: () => void;
}
