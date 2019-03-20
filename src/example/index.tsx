import * as React from "react";
import * as ReactDOM from "react-dom";
import ViewModel from "./ViewModel";
import { useValidation } from "../";
import { useModel, binding } from "mota";

import "./index.less";

const root = document.getElementById("root");

function App() {
  const model = useModel(ViewModel);
  const { Field, Alert } = useValidation(model);
  return binding(
    <div>
      <Field
        bind="params.name"
        rules={[{ test: "required", message: "不能为空" }]}
      >
        <input data-bind="params.name" />
      </Field>
      <Alert bind="params.name" />
    </div>,
    model
  );
}

ReactDOM.render(<App />, root);
