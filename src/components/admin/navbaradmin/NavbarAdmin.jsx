import React from "react";

const NavbarAdmin = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 shadow-md">
      <button onClick={toggleSidebar} className="text-gray-700 text-2xl focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
          A
        </div>
        <span className="text-gray-700 font-medium">Admin1</span>
      </div>
    </div>
  );
};

export default NavbarAdmin;
