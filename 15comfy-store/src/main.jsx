import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ToastContainer } from "react-toastify";
import { store } from "./store";
import { Provider } from "react-redux";
// v tozi sluchay mahame strict mode-a
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" />
  </Provider>
);
