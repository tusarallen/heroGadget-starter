import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart";
import { productsAndCartData } from "./customloader/getCart@ProductData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch("products.json"),
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: productsAndCartData,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
