import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useHistory } from "react-router";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const Signin = () => {
  const history = useHistory();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [usernameState, setUsernameState] = React.useState<string>('');
  const [passwordState, setPasswordState] = React.useState<string>('');

  const handleEnterUsername = (event: any) => {
    setUsernameState(event.target.value);
  }

  const handleEnterPassword = (event: any) => {
    setPasswordState(event.target.value);
  }

  const handleSignin = () => {
    const isLogin = usernameState === 'nhom3' && passwordState === 'nhom3';

    const location = {
      pathname: '/dashboard',
      state: { fromDashboard: true }
  }

    if(isLogin) {
      history.push(location);
    } else {
      message.error('Username or Password isn\'t correct.', 3)
    }
  }

  return (
    <div className="container" style={{marginTop: '25vh'}}>
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Sign in</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input className="w-50" onChange={handleEnterUsername}/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password className="w-50" onChange={handleEnterPassword}/>
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={handleSignin}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
