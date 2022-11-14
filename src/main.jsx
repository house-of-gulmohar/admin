import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { config } from "../app.config";
import App from "./App";
import AdminLayout from "./app/layout/AdminLayout";
import "./index.css";
import "./global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={`/${config.REPOSITORY}`}>
      <AdminLayout>
        <App />
      </AdminLayout>
    </BrowserRouter>
  </React.StrictMode>
);
