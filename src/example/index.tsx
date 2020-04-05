import * as React from "react";
import * as ReactDOM from "react-dom";
import ViewModel from "./ViewModel";
import { useValidation } from "../";
import { useModel, binding } from "mota";

import "./index.less";

const root = document.getElementById("root");

function App() {
  const model = useModel(ViewModel);
  (window as any).model = model;
  const { Field, Alert } = useValidation(model);
  return binding(
    <div>
      <Alert bind="params.name">
        {[
          { test: "required", message: "不能为空" },
          { test: "nan", message: "不能为数字" }
        ]}
      </Alert>
      <Field bind="params.name">
        <input data-bind="params.name" />
      </Field>
    </div>,
    model
  );
}

ReactDOM.render(<App />, root);
