import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#BB8D5B",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>
);
