import React from "react";
import { Button, message, Table } from "antd";

export const Users = () => {
  const [users, setUser] = React.useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const deleteItem = () => {
    console.log("lorem");

    messageApi.success("success");
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "User name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      render: (data) => {
        return (
          <div>
            <Button onClick={deleteItem} type="primary" color="danger">
              Delelte
            </Button>
            <Button type="primary">Edit</Button>
          </div>
        );
      },
    },
  ];

  const dataSource = users.map((item) => ({
    key: item.id,
    name: item.name,
    username: item.username,
    email: item.email,
    id: item.id,
    address: item.address.street,
  }));

  return (
    <div>
      {contextHolder}
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};
