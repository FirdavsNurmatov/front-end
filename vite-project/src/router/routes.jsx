import { CreateUsers } from "../pages/create-users";
import { EditUsers } from "../pages/edit-users";
import { Home } from "../pages/home";
import { Users } from "../pages/users";

export default [
  { comp: Home },
  { path: "/users", comp: Users },
  { path: "/create-users", comp: CreateUsers },
  { path: "/edit-users", comp: EditUsers },
];
