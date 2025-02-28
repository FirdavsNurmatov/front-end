import { Home } from "../pages/home";
import { Products } from "../pages/products";

export const routes = [
  {
    comp: Home,
  },
  {
    comp: Products,
    path: "/products",
  },
];
