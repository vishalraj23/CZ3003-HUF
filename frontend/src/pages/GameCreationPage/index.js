import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, Button, InputNumber } from "antd";

const GameCreationPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div>
        <h1>
          Hi James, <br></br>
        </h1>
        <p>
          Please complete the following in order to proceed with the creation of
          your game
        </p>
      </div>

      <Form.Item
        label="Game Name"
        name="Game Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Enter name of the Game" />
      </Form.Item>

      <Form.Item
        label="Game Description"
        name="Game Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Enter Game Description" />
      </Form.Item>

      <Form.Item label="Number of Quizzes">
        <Form.Item
          name="no-quizzes"
          noStyle
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber min={1} max={5} />
        </Form.Item>
        <span className="ant-form-text"></span>
      </Form.Item>

      <Form.Item label="Number of Questions for Each Quiz: ">
        <Form.Item
          name="quiz-qn-no"
          noStyle
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber min={1} max={10} />
        </Form.Item>
        <span className="ant-form-text"></span>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};


export default GameCreationPage;
