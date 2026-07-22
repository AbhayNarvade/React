import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import PublicRoutes from "./PublicRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import UsersPage from "../pages/UsersPage";
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        { path: "", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },

    {
      path: "/main",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainPage />,
          children: [
            {
              path: "users",
              element: <UsersPage />,
            },
            {
              path: "products",
              element: <ProductPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
