---
group: guide
name: api
title: 常用 API
index: 2
---

# 常用 API

## Validation 类

Validation 类是 Mota Validation 的核心，推荐开发人员直接用的 API 几乎都是基于 Validation 实例提供的各种能力，
可参考如下代码创建 `Validation` 类实例：

```ts
// Validation 构造函数签名如下
// Validation(model: any, options: IValidationOptions);

// 省略 options
const validation1 = new Validation({});

// 创建实例，并通过 initial 声明启用首次初始校验
const validation2 = new Validation({}, { initial: true });
```

通过必须参数 `model` 和可选参数 `IValidationOptions` 可构造一个 Validation 实例。


## 在项目中使用

在几乎所有项目中，都不需要手动去创建 `Validation` 实例，
而是分别通过 `@validation` 装饰器和 `useValidation` Hook API 来自动完成。

### @validation

省略 `IValidationOptions` 时，参考如下代码：

```js
@model({})
@validation
class MyComponent extends React.Component{
  ...
}
```

需要指定 `IValidationOptions` 时，参考如下代码：

```js
@model({})
@validation({ initial: true })
class MyComponent extends React.Component{
  ...
}
```

### useValidation

省略 `IValidationOptions` 时，参考如下代码：

```js
function MyComponent{
  const model = useModel({});
  const validation = useValidation(model)
}
```

需要指定 `IValidationOptions` 时，参考如下代码：

```js
function MyComponent{
  const model = useModel({});
  const validation = useValidation(model, { initial: true })
}
```


## IValidationOptions 选项

```ts
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

  /**
   * 验证结果在 model 中的字段名称，默认为 results
   */
  stateKey?: string;
}
```


## 常用 API

在 `Validation` 的实例上，有一组 API 用于完成各类验证需求，这里介绍一下常用的重要 API，
这些 API 如无特殊说明，可在组件生命周期的各阶段使用，包括 `readner`。

### setRule 方法

用于显示设定验证规则，一般不用直接调用，而且「辅助组件」自动设定

```ts
/**
  * 设定验证规则
  * @param {string} bind 要验证的数据
  * @param {IRule | Array<IRule>} rules 规则
  * @param {string} alias 别名
  */
setRule: (bind: string, rules: IRule | IRule[], alias?: string) => void;
```

**IRule 定义 说明**

设定验证规则时，每个 `rule` 都须符合 `IRule` 的定义，
至少要包含 `test` 函数，每个 `test` 函数都就返回 `boolean` 或 `Promise<boolean>`,
可选的 `message` 用指定在验证失败时显示的消息。

```ts
export declare type ITestFunction = (value: any, model?: any) => boolean | Promise<boolean>;
export interface IRule {
    message?: string;
    test: ITestFunction | RegExp | string;
}
```

### tests 枚举

Mota Validation 内建了一组常用的验证函数

```ts
/**
 * 任意值
 */
any,

/**
 * 非空值（包括不能是空字符串）
 */
required,

/**
 * 非空白字符（可视字符）
 */
nonblank

/**
 * 数值
 */
number,

/**
 * 非数值
 */
nan,

/**
 * 数值区间
 */
range: (min: number, max: number),

/**
 * 字符串长度
 */
len: (min: number, max: number, trim?: boolean),

/**
 * 邮箱
 */
email,

/**
 * 中文
 */
zh,

/**
 * 英文
 */
en,

/**
 * IP v4
 */
ipv4,

/**
 * URL
 */
url,
```

### state 方法

用于获取整体或指数据项的验证结果，通常用于判断提交按钮是否禁用等场景。

```ts
/**
 * 查询验证结果的 state 值
 * @param bind 绑定表达式，bind 省略时查询整体 state
 */
state: (bind?: string) => states;
```

### states 枚举

在 Mota Validation 针对验证状态做了细致的划分，`state` 方法的返回结果便是 `states` 的可选值之一

```ts
/**
 * 验证状态
 */
export declare enum states {
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
```

### test 方法

用于主动的显示执行数据校验

```ts
/**
 * 触发验证，传入 bind 时验证指定数据项，省略参数时验证整个表单
 * @param {string} bind 要验证的数据
 * @returns {Promise<states>} 验证结果
 */
test: (bind?: string) => Promise<states>;
```

### reset 方法

```ts
/**
  * 重置验证状态
  */
reset: () => void;
```

### avoid 方法

用于临时避开验证更新模型数据，比如，在编辑表单中从服务端拉取数据赋值到 `model` 或重置表单数据时而不期望触发验证。

```ts
/**
  * 避开验证，希望暂时避开验证进行数据更改，可使用此方法
  * @param {Function} handler 处理函数
  */
avoid: (handler: Function) => Promise<unknown>;
```

参考如下示例代码：

```ts
this.validation.avoid(()=>{
  //在这里改变模型，不触发验证
  this.model.name = '';
});
```

### reulsts 属性

在 `results` 包含了整体的验证结果，以级每个数据项的验证结果，还有验证失败对应的 `message` .

```ts
/**
 * 验证结果
 */
results: IResults;
```