import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      let res = await axiosInstance.get("users");
      console.log("users ", res.data);
      setUsers(res.data);
    } catch (e) {
      console.log("error ", e);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Users</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-5 border"
          >
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold uppercase">
                {user.name.firstname[0]}
              </div>
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-center mt-4 capitalize">
              {user.name.firstname} {user.name.lastname}
            </h3>

            {/* Username */}
            <p className="text-center text-gray-500">@{user.username}</p>

            <div className="mt-5 space-y-2 text-sm">
              <p className="flex flex-row">
                <span className="font-semibold">📧 Email:</span>
                {user.email}
              </p>

              <p className="flex flex-row">
                <span className="font-semibold">📞 Phone:</span>
                {user.phone}
              </p>

              <p className="flex flex-row">
                <span className="font-semibold">🏙 City:</span>{" "}
                <span className="capitalize">{user.address.city}</span>
              </p>

              <p className="flex flex-row">
                <span className="font-semibold">📍 Address:</span>
                {user.address.number}, {user.address.street}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
