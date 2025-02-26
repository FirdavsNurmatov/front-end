import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

export const items = [
  { path: "/", title: "Home", icon: UserOutlined },
  {
    path: "/users",
    title: "Users",
    icon: UploadOutlined,
    children: [
      { path: "/create-users", title: "Create user" },
      { path: "/edit-users", title: "Edit user" },
    ],
  },
];
