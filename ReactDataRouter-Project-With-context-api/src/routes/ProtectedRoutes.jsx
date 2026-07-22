import React from "react";
import { Outlet } from "react-router";
const ProtectedRoutes = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default ProtectedRoutes;
