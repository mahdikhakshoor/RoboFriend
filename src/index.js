import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, connect } from "react-redux";
import "./index.css";
import "tachyons";
import App from "./containers/App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
