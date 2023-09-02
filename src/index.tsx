import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@infra/configs/firebase-config";
import { Routes } from "@main/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
