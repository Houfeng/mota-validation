import { Alert, IAlertPorps } from "./Alert";
import { EventEmitter } from "./EventEmitter";
import { IFieldPorps } from "./Field";
import { IResults } from "./IResults";
import { IRule } from "./IRule";
import { IStateProps } from "./State";
import { ITestItem } from "./ITestItem";
import { ITestItemMap } from "./ItestItemMap";
import { IValidationOptions } from "./IValidationOptions";
import { IValidationPorps } from "./IValidationPorps";
import { states } from "./states";
export { IValidationPorps, Alert };
export declare class Validation extends EventEmitter {
    private __options;
    private __model;
    private __items;
    private __watchers;
    private __aliases;
    private __time;
    private __watchPaused;
    private __alert;
    private __field;
    private __state;
    constructor(model: any, options: IValidationOptions);
    private initResults;
    /**
     * 验证结果
     */
    /**
    * 验证结果
    */
    results: IResults;
    /**
     * 查询验证结果的 state 值
     * @param bind 绑定表达式，bind 省略时查询整体 state
     */
    state: (bind?: string) => states.unknown | states;
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
    /**
     * 别名表
     */
    private readonly aliases;
    /**
     * 当前模型
     */
    readonly model: any;
    /**
     * 所有验证项
     */
    readonly items: ITestItemMap;
    /**
     * 验证次数（将要废弃，请使用 time 属性替代）
     * @deprecated
     */
    readonly testCount: number;
    /**
     * 验证次数
     */
    readonly time: number;
    /**
     * 获取验证项
     * @param bind 指定的数据
     * @returns {ITestItem}
     */
    getItem(bind: string): ITestItem;
    /**
     * 所有防抖 timers
     */
    private watchTimers;
    private clearWatchTimer;
    /**
     * 监听一个数据（表达式）
     */
    private watch;
    /**
     * 移除一个监听表达式
     * @param bind 表达式
     */
    private unWatch;
    /**
     * 设定验证规则
     * @param {string} bind 要验证的数据
     * @param {IRule | Array<IRule>} rules 规则，当 rules===null 时相当于 removeRule
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
    setState: (bind: string, state: states, message?: string) => void;
    private getTestFuncForString;
    private getTestFunc;
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
    private getState;
    /**
     * 暂停验证监听
     */
    pauseWatch: () => void;
    /**
     * 恢复验证监听
     */
    resumeWatch: () => void;
    /**
     * 启动所有验证监听
     */
    sartWatch: () => void;
    /**
     * 停止所有验证监听
     */
    stopWatch: () => void;
    /**
     * 重置验证状态
     */
    reset: () => void;
    /**
     * 避开验证，希望暂时避开验证进行数据更改，可使用此方法
     * @param {Function} handler 处理函数
     */
    avoid: (handler: Function) => Promise<unknown>;
    /**
     * 销毁验证对象
     */
    distory: () => void;
}
