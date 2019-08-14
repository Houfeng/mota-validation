---
group: guide
name: components
title: 辅助组件
index: 3
---

# 辅助组件

## 简述

虽然 Validation API 可直接使用，但无论是在「类组件」或「函数组件」中，通常需要使用内建的几个辅助组件，
来更方便的使用 Mota Validation，在「快速开始」的示例中应该看到过部分使用，这是 Mota Validation 推荐的用法。

目前共有 3 个内建的「辅助验证组件」，包括 `Field`、`Alert`、`State`.

## Field 组件

Field 组件用来包裹一个「表单组件」，同时会将验证结果附加到「表单组件」最终 DOM 的 Attrbite 上，
默认 Mota Validation 会针对「验证出错」提供一些简单的默认样式。使用示例如下：

```tsx
/* 声明 Field 的绑定字段和验证规则 */
<Field bind="params.name" rules={[
  {test: 'requried', message: '必须输入名称'}
]}>
  {/* 将输入框绑定到 params.name */}
  <input data-bind="params.name"/>
</Field>
```

当验证失败时，最终 `input` 组件渲染出来的 DOM 如下

```html
<input data-state="0">
```

在验证失败时 `input` 的边框会变红，因为此时的默认样式如下：

```css
[data-state="0"] {
  border-color: #f5222d;
}
```

请注意上边的的 `CSS`，通过 `Field` 包裹后的表单组件渲染后的 DOM 会有 `data-state` 的 Attribue，
所以，在项目中可通过定义 `[data-state="<state_value>"]` 的进行表单项在各种验证结果下的样式。
其中 `data-state` 的值为，`states` 枚举的各可选值 (请查阅《常用 API 章节》)。

## Alert 组件

通过 `Field` 的介绍，能看到通过 `rulus` 属性可为绑定的数据项声明验证规则，
而 `Alert` 组件就是用来显示验证未通过时，在 `rule` 中声明的 `message` 的。

```tsx
<Field bind="params.name" rules={[
  {test: 'requried', message: '必须输入名称'}
]}>
  <input data-bind="params.name"/>
</Field>
<div className="message">
  {/* 需为 Alert 组件声明对应绑定信息 */}
  <Alert bind="params.name" />
</div>
```

可将 `Alert` 组件放到任意位置，只要 `bind` 绑定的数据验证未通过就会将对应规则的 `message` 显示出来。

## State 组件

有时我们希望根据某项数据的验证结果决定页面上显示大段的内容，而不仅是显示「错误消息」，那么此时可使用 `State` 组件。

```tsx
<State bind="params.name" when={states.success}>
  <div>当验证通过时，我才会显示</div>
</State>

<State bind="params.name" when={states.failed}>
  <div>当验证未通过时，我才会显示</div>
</State>

<State bind="params.name" when={states.testing}>
  <div>当正在验证时，我才会显示</div>
</State>
```


## 注意事项

三个辅助组件都有 `bind` 和 `rules` 属性，但具有相同 `bind` 的辅助组件，只需要第一个有 `rules` 即可。
如果具有相同 `bind` 属性的组件，同时都有 `rules` 属性，那后出现的 `rules` 有效。