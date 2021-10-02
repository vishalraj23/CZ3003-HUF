import * as React from 'react';

import { Form, Input, Button, Checkbox, Card, Tabs } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, FacebookFilled } from '@ant-design/icons';

import './index.css';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const LandingPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="site-card-wrapper">
      <Card title="Profile" bordered={true} style={{ width: 300 }}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Sign In" key="1">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="mail"
                rules={[
                  {
                    required: true,
                    message: 'Please input your mail!',
                  },
                ]}
              >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-Mail" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Keep me signed in</Checkbox>
              </Form.Item>
              <Form.Item>
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" shape="round" htmlType="submit" className="login-form-button">
                  Sign in
                </Button>
                or
                <Button type="primary" shape="round" icon={<FacebookFilled />} htmlType="submit" className="login-form-button">
                  Sign in with Facebook
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Register" key="2">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please Enter your Name!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
              </Form.Item>

              <Form.Item
                name="mail"
                rules={[
                  {
                    required: true,
                    message: 'Please Enter your E-Mail!',
                  },
                ]}
              >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-Mail" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please Enter your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Reconfirm your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Reconfirm Password"
                />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>I accept the terms and the privacy policy</Checkbox>
              </Form.Item>
              <Form.Item>
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" shape="round" htmlType="submit" className="login-form-button">
                  Register
                </Button>
                or
                <Button type="primary" shape="round" icon={<FacebookFilled />} htmlType="submit" className="login-form-button">
                  Register with Facebook
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default LandingPage;