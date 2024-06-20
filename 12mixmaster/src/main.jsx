import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import { ToastContainer } from "react-toastify";
// dobavqme toastify i pravim taka, che da se zatvarq sled 2 sekundi syobshtenieto
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer position="top-center" autoClose={2000} />
    <App />
  </React.StrictMode>
);
