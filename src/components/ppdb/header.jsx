import React from "react";
import { ArrowLeft } from "lucide-react";

const HeaderPPDB = () => {
  return (
    <div className="relative w-full h-[400px] bg-white overflow-hidden">
      {/* Gambar latar header */}
      <img
        src="/images/test.png"
        alt="Header PPDB"
        className="w-full h-full object-cover md:object-[center_top] object-center"
      />

      {/* Tombol kembali */}
      <a
        href="/"
        className="absolute top-4 left-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700" />
      </a>
    </div>
  );
};

export default HeaderPPDB;
