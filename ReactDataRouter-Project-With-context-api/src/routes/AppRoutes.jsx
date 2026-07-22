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
              index: true,
              element: (
                <div className="flex flex-col items-center justify-center h-full min-h-[60vh] animate-fade-in">
                  <h1 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">Welcome to the Dashboard</h1>
                  <p className="text-gray-500 text-lg">Please select an option from the sidebar to get started.</p>
                </div>
              ),
            },
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
