# Mota Validation

## 简述

Mota 可以使用任意的表单组件（form）来完成表单应用，但 Mota 不仅提供了状态管理，还提供了双向绑定的能力（可选），使用 `@binding` 时表单组件显得不那么重要，`@binding` 能给 React 带来「双向绑定」的能力，但与此同时 Mota 本身不并会处理表单验证，在开发应用时，使用 `@binding` 带来的便利的同时，又常常不得不自助处理表单验证的问题，而 `mota-validation` 就是一个针对 Mota 应用的专用验证模块，在使用 `@binding` 的便利的同时，也能便利的完成各类数据验证的需要。


## 安装

Mota Validation 不是 mota 内建的一部分，而是以一个独立的模块，所以需要单独安装。参考如下命令：

```bash
npm install mota-validation --save 
```

## 使用

### 在类组件中使用
Mota Validation 提供了一个 `@validation` 装饰器，通过 `@model` 装饰的组件都可以同时使用 `@validation` 启用验证。

```js

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

