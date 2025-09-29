// components/ppdb/badgemenu.js

import React from "react";

const BadgeMenu = ({ selected, setSelected }) => {
  return (
    <div className="w-full flex justify-center relative -mt-8 z-20">
      <div className="bg-white rounded-full shadow-lg px-2 py-2 flex space-x-3 w-max">
        <button
          onClick={() => setSelected("persyaratan")}
          className={`px-8 py-3 text-base font-semibold rounded-full transition-all duration-200 ${
            selected === "persyaratan"
              ? "bg-blue-500 text-white shadow-md"
              : "bg-white text-blue-500 border border-blue-500"
          }`}
        >
          Persyaratan
        </button>
        <button
          onClick={() => setSelected("pendaftaran")}
          className={`px-8 py-3 text-base font-semibold rounded-full transition-all duration-200 ${
            selected === "pendaftaran"
              ? "bg-blue-500 text-white shadow-md"
              : "bg-white text-blue-500 border border-blue-500"
          }`}
        >
          Pendaftaran
        </button>
      </div>
    </div>
  );
};

export default BadgeMenu;
