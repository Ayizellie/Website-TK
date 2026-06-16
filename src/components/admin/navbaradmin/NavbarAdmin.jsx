import React, { useState, useEffect } from "react";
import { HiOutlineLogout, HiOutlineUser } from "react-icons/hi";

const NavbarAdmin = ({ toggleSidebar }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const handleProfile = () => {
    window.location.href = "/admin/profile";
  };

  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 shadow-md relative">
      {/* Tombol sidebar */}
      <button
        onClick={toggleSidebar}
        className="text-gray-700 text-2xl focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
            {user ? user.name.charAt(0).toUpperCase() : "?"}
          </div>
          <span className="text-gray-700 font-medium">
            {user ? user.name : "Admin"}
          </span>
        </button>

        {openMenu && (
          <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-10">
            <button
              onClick={handleProfile}
              className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <HiOutlineUser className="mr-2" /> Kelola Akun
            </button>
            <hr className="my-1" />
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              <HiOutlineLogout className="mr-2" /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarAdmin;
