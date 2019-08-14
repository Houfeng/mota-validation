---
group: guide
name: get_started
title: 快速开始
index: 1
---

# Mota Validation

## 简述

Mota 可以使用任意的表单组件（form）来完成表单应用，但 Mota 不仅提供了状态管理，还提供了双向绑定的能力（可选），使用 `@binding` 时表单组件显得不那么重要，`@binding` 能给 React 带来「双向绑定」的能力，但与此同时 Mota 本身不并会处理表单验证，在开发应用时，使用 `@binding` 带来的便利的同时，又常常不得不自助处理表单验证的问题，而 `mota-validation` 就是一个针对 Mota 应用的专用验证模块，在使用 `@binding` 的便利的同时，也能便利的完成各类数据验证的需要。


## 安装

Mota Validation 不是 mota 内建的一部分，而是以一个独立的模块，所以需要单独安装，参考如下代码：

```bash
npm install mota-validation --save 
```

## 使用

### 在类组件中使用
Mota Validation 提供了一个 `@validation` 装饰器，通过 `@model` 装饰的组件都可以同时使用 `@validation` 启用验证。

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { model, binding } from "mota";
import { validation } from "mota-validation";
import ViewModel from "./ViewModel";

@model(ViewModel)
@binding
@validation
class App extends React.Component {

  model: ViewModel;
  validation: Validation;

  render() {
    const { submit } = this.model;
    const { Alert, Field, state, states } = this.validation;
    return <div>
      <label>姓名:</label>
      <Field bind="params.name" rules={[{ test: 'required' }]}>
        <input data-bind="params.name" />
      </Field>
      <Alert bind="params.name" />
      <button disabled={state() !== states.succeed} onClick={submit}>
        立即提交
      </button>
    </div>;
  }
}

ReactDOM.render(<App />, root);
```

### 在函数组件中使用

针对函数组件 Mota 提供了 `useModel` API，而 Mota Validation 提供了 `useValidation`。
通过 Hook 风格的 API 即可在函数组件中使用 Mota 和 Mota Validation，参考如下代码：

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { useModel, binding, model } from 'mota';
import { useValidation } from "mota-validation";
import ViewModel from "./ViewModel";

function App() {

  render() {
    const model = useModel(ViewModel);
    const { submit } = ViewModel;
    const { Alert, Field, state, states } = useValidation(model);
    return binding(<div>
      <label>姓名:</label>
      <Field bind="params.name" rules={[{ test: 'required' }]}>
        <input data-bind="params.name" />
      </Field>
      <Alert bind="params.name" />
      <button disabled={state() !== states.succeed} onClick={submit}>
        立即提交
      </button>
    </div>, model);
  }
}

ReactDOM.render(<App />, root);
```

## 特别说明

在 Mota Validation 中 UI 不是其重点，本质上 Mota Validation 是针对「模型数据的」校验。
在 Mota Validation 中最重要的是一个名为 `Validation` 的类，可通过一个「模型实例」作为参数构造一个 `Validation` 实例，
而所有的验证能力都是 `Validation` 提供的。

通过上边的示例应该能注意到，在「类组件」中通过 `@validation` 装饰器为组件注入了 `Validation` 实例，
而在「函数组件」中是通过 `useValidation` Hook 函数拿到的 `Validation` 实例。

在 `Validation` 实例上，提供了一系列的 API，用于添加验证规则、执行数据校验证等功能。
当 `model` 中的「添加了校验规则的数据」发生变化时，`Validation` 会自动对数据进行校验并把校验结果放到 `model` 中，
默认为 `results`，而要校验的数据及校验结果其实本质上一样都是 `model` 中的数据。熟悉 Mota 的开发者应该了解，
当组件依赖的 `model` 数据发生变化时，Mota 将触发组件的更新，那校验结果便呈现到视图中了。

为了方便使用，在 `Validation` 的实例中还提供了「几个组件」，包括 `Field`、`State`、`Alert`，
这几个组件一定程度可认为是 `Validation` 实例方法「便捷用法」，如语法糖一般。
