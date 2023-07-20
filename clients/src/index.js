import React from "react";
import ReactDOM from "react-dom/client";

// import Fetch from "./components/fetchData";

import router from "./App";
import { RouterProvider } from "react-router-dom";
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<RouterProvider router={router} />);
// root.render(<Fetch />);
