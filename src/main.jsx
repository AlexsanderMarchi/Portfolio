import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Experiences from "./pages/experiences";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Experiences", element: <Experiences /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
