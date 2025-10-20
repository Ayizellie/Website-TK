import React, { useState } from "react";
import { HiArrowLeft, HiPencil, HiLogout } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { EyeOff, EyeIcon } from "lucide-react";

const HalamanProfile = () => {
  const [showPassword, setShowPassword] = useState(false); // state untuk toggle password

  return (
    <div className="w-full min-h-screen bg-white p-6">
      {/* Tombol kembali */}
      <a
        href="/"
        className="flex items-center text-blue-800 font-semibold mt-24 mb-5"
      >
        <HiArrowLeft className="mr-2 text-3xl" />
      </a>

      {/* Header */}
      <div className="bg-[#6FBFF2] text-white text-center text-xl md:text-2xl font-bold py-3 rounded-lg mb-8">
        PROFIL SAYA
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-center">
        {/* Sidebar Pengaturan */}
        <div className="bg-[#6FBFF2] rounded-2xl p-6 w-full md:w-64 text-white flex flex-col items-center">
          <button className="bg-white text-[#064A8C] font-semibold px-4 py-1 rounded-md mb-8">
            Pengaturan
          </button>

          <div className="flex flex-col gap-6 w-full">
            <button className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-full shadow">
              <HiPencil className="text-lg" />
              <span>Edit Profil</span>
            </button>

            <button className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-full shadow">
              <FaLock className="text-lg" />
              <span>Ubah Password</span>
            </button>

            <button className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-full shadow">
              <HiLogout className="text-lg" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Konten Profil */}
        <div className="flex-1 max-w-xl">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-blue-900 flex items-center justify-center text-white text-xl font-bold">
              ZE
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-black font-medium mb-1">Username</label>
              <input
                type="text"
                defaultValue="Zellie Lie"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-1">Email</label>
              <input
                type="email"
                defaultValue="ZellieLie@gmail.com"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // toggle password
                  defaultValue="zellie"
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <span
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <EyeIcon />}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HalamanProfile;