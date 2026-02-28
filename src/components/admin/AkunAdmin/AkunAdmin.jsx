import React, { useState, useEffect } from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import axios from "axios";

const AkunAdmin = () => {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
  });
  const [newName, setNewName] = useState("");

  useEffect(() => {
    // Ambil data user dari localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setAdmin(userData);
      setNewName(userData.name);
    }
  }, []);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/admin/update-profile`,
        { name: newName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update localStorage
      const updatedUser = { ...admin, name: newName };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setAdmin(updatedUser);

      alert("Nama berhasil diperbarui ✅");
    } catch (error) {
      console.error("Gagal update:", error);
      alert("Terjadi kesalahan saat memperbarui data 😢");
    }
  };

  return (
    <NavbarSidebar>
      <div className="flex-1 min-h-screen px-10">
        <div className="relative overflow-x-auto rounded-lg">
          <div>
            <h1 className="text-left text-black text-xl font-semibold mb-5">
              Kelola Akun
            </h1>
          </div>

          {/* Foto profil */}
          <div className="flex flex-col items-left mb-6">
            <h3 className="mt-2 text-sm text-black font-semibold mb-3">Foto</h3>
            <img
              src="/images/profil.png"
              alt="Profile"
              className="w-40 h-40 rounded-lg object-cover shadow"
            />
          </div>

          {/* Nama admin */}
          <h2 className="text-left text-black text-sm font-semibold mb-3">
            Nama Admin
          </h2>
          <div className="mt-4">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full mb-6"
            />
          </div>

          {/* Email admin (tidak bisa diubah) */}
          <h2 className="text-left text-black text-sm font-semibold mb-3">
            Email Admin
          </h2>
          <div className="mt-4">
            <input
              type="text"
              value={admin.email}
              disabled
              className="px-3 py-2 border border-gray-300 bg-gray-100 text-gray-500 rounded-md shadow-sm block w-full mb-6"
            />
          </div>

          {/* Tombol simpan */}
          <div className="flex justify-end mt-10">
            <button
              onClick={handleSave}
              type="button"
              className="inline-flex items-center px-3 border border-gray-700 rounded-md font-semibold text-sm text-black active:bg-white focus:outline-none focus:ring-2 focus:ring-[#6FBFF2] focus:ring-offset-2 transition ease-in-out duration-150 ml-4 bg-white hover:bg-[#6FBFF2] py-3"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </NavbarSidebar>
  );
};

export default AkunAdmin;
