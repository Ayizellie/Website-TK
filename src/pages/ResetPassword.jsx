import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiEye, HiEyeOff } from "react-icons/hi";

const ResetPassword = () => {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    if (urlToken) setToken(urlToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/forgot-password`, {
        token,
        password,
        password_confirmation: passwordConfirmation,
      });

      setMessage(res.data.message || "Password berhasil diubah");

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message || "Gagal mengubah password");
      } else {
        setMessage("Terjadi kesalahan saat mengubah password.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#064A8C] mb-6">
          Ubah Password
        </h2>

        {!token ? (
          <p className="text-center text-red-500">
            Token tidak ditemukan di URL. Silakan buka link dari email reset password Anda.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Password Baru */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Password Baru
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimal 8 karakter"
                  className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-2.5 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>
            </div>

            {/* Konfirmasi Password */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Konfirmasi Password
              </label>
              <div className="relative">
                <input
                  type={showPasswordConfirm ? "text" : "password"}
                  required
                  minLength={8}
                  placeholder="Minimal 8 karakter"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  className="absolute right-4 top-2.5 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  {showPasswordConfirm ? (
                    <HiEyeOff size={20} />
                  ) : (
                    <HiEye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6FBFF2] hover:bg-[#58aee6] text-white font-semibold py-2 rounded-full transition"
            >
              {loading ? "Menyimpan..." : "Ubah Password"}
            </button>
          </form>
        )}

        {message && (
          <p className="text-center mt-4 text-sm text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
