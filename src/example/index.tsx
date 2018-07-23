import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { model, binding } from 'mota';
import ViewModel from './ViewModel';
import { validation, Validation } from '../';

import './index.less';

const root = document.getElementById('root');

@model(ViewModel)
@binding
@validation
class App extends React.Component {

  model: ViewModel;
  validation: Validation;

  render() {
    const { Alert, Status, tests } = this.validation;
    return <div>
      <div className="row">
        姓名:
        <Status bind="params.name" rules={[{ test: 'required' }]}>
          <input data-bind="params.name" />
        </Status>
      </div>
      <div className="row">
        年龄:
        <Status bind="params.age"><input data-bind="params.age" /></Status>
        <Alert bind="params.age">
          {[
            { test: 'required', message: '请输入年龄' },
            { test: 'number', message: '年龄必须为数值' },
            { test: tests.range(18, 60), message: '年龄需在 18 ~ 60 之间' }
          ]}
        </Alert>
      </div>
      <div className="row">
        邮箱:
        <Status bind="params.email" rules={[
          { test: 'required' }, { test: 'email' }
        ]}>
          <input data-bind="params.email" />
        </Status>
        <Alert bind="params.email" />
      </div>
      <div className="row">
        提交:
        <button disabled={!this.validation.status()}
          onClick={this.submit}>立即提交</button>
        <button onClick={this.hack}>手动更新状态</button>
      </div>
    </div>;
  }

  hack = () => {
    this.validation.setResult('params.email',
      { status: false, message: 'aaa' });
  }

  submit = async () => {
    const status = await this.validation.test();
    if (!status) return;
    this.model.submit();
  }
}

ReactDOM.render(<App />, root);