import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiArrowLeft, HiPencil, HiLogout } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { EyeOff, EyeIcon } from "lucide-react";

const HalamanProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setFormData({
          name: res.data.name,
          email: res.data.email,
          password: "",
          password_confirmation: "",
        });
      } catch (err) {
        console.error("Gagal ambil profil:", err);
        alert("Gagal memuat data profil");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/auth/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Profil berhasil diperbarui!");
      setFormData({
        ...formData,
        password: "",
        password_confirmation: "",
      });
    } catch (err) {
      console.error(err);
      if (err.response?.status === 422) {
        alert("Validasi gagal. Pastikan semua data benar.");
      } else {
        alert("Gagal memperbarui profil.");
      }
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        Memuat profil...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white p-6">
      {/* Tombol kembali */}
      <a
        href="/"
        className="flex items-center text-blue-800 font-semibold mb-5"
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
            <button
              onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
              className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-full shadow"
            >
              <HiPencil className="text-lg" />
              <span>Edit Profil</span>
            </button>

            <button
              onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
              className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-full shadow"
            >
              <FaLock className="text-lg" />
              <span>Ubah Password</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-full shadow"
            >
              <HiLogout className="text-lg" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="flex-1 max-w-xl">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-blue-900 flex items-center justify-center text-white text-xl font-bold">
              {formData.name ? formData.name[0].toUpperCase() : "U"}
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-black font-medium mb-1">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-1">
                Password Baru (opsional)
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Biarkan kosong jika tidak ingin mengganti"
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

            <div>
              <label className="block text-black font-medium mb-1">
                Konfirmasi Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                placeholder="Ulangi password baru"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <button
              type="submit"
              className="bg-[#6FBFF2] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#509fda] transition"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HalamanProfile;
