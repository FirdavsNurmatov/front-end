import { CreateTodo } from "../pages/create-todo/create-todo";
import { EditTodo } from "../pages/edit-todo/edit-todo";
import { Home } from "../pages/home/home";

export const routes = [
  { comp: Home },
  { comp: CreateTodo, path: "/create-todo" },
  { comp: EditTodo, path: "/edit-todo" },
];
