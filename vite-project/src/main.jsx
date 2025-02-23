import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CrudContext } from "./context/crud-context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CrudContext>
      <App />
    </CrudContext>
  </BrowserRouter>
);
