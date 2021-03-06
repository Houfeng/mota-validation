import * as React from "react";
import * as ReactDOM from "react-dom";
import { model, binding } from "mota";
import ViewModel from "./ViewModel";
import { validation, Validation, states } from "..";

import "./index.less";

const root = document.getElementById("root");

async function remoteTest() {
  return new Promise<boolean>(resolve => {
    setTimeout(() => resolve(true), 600);
  });
}

@model(ViewModel)
@binding
@validation
class App extends React.Component {
  model: ViewModel;
  validation: Validation;

  componentDidMount() {
    (window as any).example = this;
  }

  render() {
    const { Alert, Field, State, tests } = this.validation;
    (window as any).T = this;
    return (
      <div>
        <div className="row">
          姓名:
          <Field
            bind="params.name"
            alias="name"
            rules={[
              { test: ".required" },
              { test: "len(2,4)" },
              { test: remoteTest }
            ]}
          >
            <input data-bind="params.name" />
          </Field>
          <State bind="params.name" when={states.testing}>
            正在验证...
          </State>
        </div>
        <div className="row">
          年龄:
          <Field bind="params.age">
            <input data-bind="params.age" />
          </Field>
          <Alert bind="params.age">
            {[
              { test: "required", message: "请输入年龄" },
              { test: "number", message: "年龄必须为数值" },
              { test: tests.range(18, 60), message: "年龄需在 18 ~ 60 之间" }
            ]}
          </Alert>
          <State bind="params.age" when={[states.succeed]}>
            验证通过
          </State>
        </div>
        <div className="row">
          邮箱:
          <Field
            bind="params.email"
            rules={[{ test: "required" }, { test: "email" }]}
          >
            <input data-bind="params.email" />
          </Field>
          <Alert bind="params.email" />
        </div>
        <div className="row">
          提交:
          <button
            disabled={this.model.results.state !== states.succeed}
            onClick={this.submit}
          >
            立即提交
          </button>
          <button onClick={this.hack}>手动更新状态</button>
        </div>
      </div>
    );
  }

  hack = () => {
    this.validation.setState("params.email", states.failed, "aaa");
  };

  submit = async () => {
    const state = await this.validation.test();
    if (state !== states.succeed) return;
    this.model.submit();
  };
}

ReactDOM.render(<App />, root);
