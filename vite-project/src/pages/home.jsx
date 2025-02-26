import React from "react";
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Image,
  Input,
  Select,
  Steps,
  Typography,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const items = [
  {
    key: 1,
    label: "Product1",
  },
  {
    key: 2,
    label: "Product3",
  },
  {
    key: 3,
    label: "Product65",
  },
];

export const Home = () => {
  const onFinish = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Button
        htmlType="button"
        iconPosition="end"
        icon={<UploadOutlined />}
        type="primary"
      >
        lorem
      </Button>
      <Typography.Text>lorem</Typography.Text>
      <Typography.Title level={5}>lorem100</Typography.Title>
      <Button
        shape="circle"
        htmlType="button"
        icon={<UploadOutlined />}
        type="primary"
        size="middle"
      ></Button>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button>User</Button>
      </Dropdown>
      <Steps
        style={{ marginTop: "20px" }}
        current={3}
        items={[
          {
            title: "Finished",
            description: "This is a description.",
          },
          {
            title: "In Progress",
            description: "This is a description.",
            subTitle: "Left 00:00:08",
          },
          {
            title: "Waiting",
            description: "This is a description.",
          },
        ]}
      />
      <Image
        width={"200px"}
        src="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
      />
      <Form
        layout="vertical"
        name="basic"
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          username: "adim",
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your Region!" }]}
          label="Region"
          name={"region"}
        >
          <Select
            options={[
              { label: "Asia", value: "Asia" },
              { label: "Europe", value: "Europe" },
            ]}
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
