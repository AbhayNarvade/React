import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { NavLink, Navigate, Outlet } from "react-router";

const MainPage = () => {
  const { loggedInData, setLoggedInData } = useContext(Auth);

  function loggedOut() {
    setLoggedInData(false);
    localStorage.removeItem("loggedInData");
    return <Navigate to={"/"} />;
  }

  if (!loggedInData) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="grid grid-cols-[2fr_10fr] h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white flex flex-col justify-between p-6">
        <div>
          <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

          <nav className="flex flex-col gap-3">
            <NavLink
              to="/main/users"
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg transition ${
                  isActive ? "bg-blue-600" : "hover:bg-gray-700"
                }`
              }
            >
              Users
            </NavLink>

            <NavLink
              to="/main/products"
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg transition ${
                  isActive ? "bg-blue-600" : "hover:bg-gray-700"
                }`
              }
            >
              Products
            </NavLink>
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={loggedOut}
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="bg-gray-100 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainPage;
