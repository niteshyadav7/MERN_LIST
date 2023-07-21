import React from "react";
import ReactDOM from "react-dom/client";
import router from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<RouterProvider router={router} />);
