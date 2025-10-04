import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="/images/logo1.png" alt="Logo 1" className="h-12 w-auto object-contain" />
          <img src="/images/logo2.png" alt="Logo 2" className="h-12 w-auto object-contain" />
        </div>

        {/* Menu Tengah */}
        <div className="hidden lg:flex flex-1 justify-center gap-20 text-sm font-medium text-blue-900">
          <div className="relative group">
            <button className="hover:text-blue-600">Profil</button>
            <div className="absolute left-0 mt-2 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 w-48 z-50">
              <a href="/profil-sekolah" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 rounded-t-xl">Profil Sekolah</a>
              <a href="/data-kepengurusan" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 rounded-b-xl">Data Kepengurusan</a>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-blue-600">Galeri dan Fasilitas</button>
            <div className="absolute left-0 mt-2 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 w-52 z-50">
              <a href="/galeri-kegiatan" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 rounded-t-xl">Galeri Kegiatan</a>
              <a href="/fasilitas-kegiatan" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 rounded-b-xl">Fasilitas Kegiatan</a>
            </div>
          </div>
          <a href="/berita" className="hover:text-blue-600">Berita</a>
          <a href="/kontak" className="hover:text-blue-600">Kontak</a>
          <a href="/kurikulum-pembelajaran" className="hover:text-blue-600">Pembelajaran</a>
          <a href="/ppdb" className="hover:text-blue-600">PPDB</a>
        </div>

        {/* Kanan: Masuk / Profil */}
        <div className="relative hidden lg:flex items-center">
          {!isLoggedIn ? (
            <button
              onClick={() => (window.location.href = '/login')}
              className="border border-gray-400 px-5 py-1.5 rounded-full text-sm text-gray-700 hover:bg-gray-100"
            >
              Masuk
            </button>
          ) : (
            <div className="relative">
              <button onClick={toggleDropdown}>
                <IoPersonCircleOutline size={35} className="text-blue-900 hover:text-blue-700" />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-40 bg-white shadow-md rounded-lg border border-gray-200"
                  >
                    <a
                      href="/profil"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Info Profil
                    </a>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Keluar
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Hamburger Menu Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <HiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 px-6 py-8 space-y-5"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-blue-900">Menu</h2>
              <button onClick={toggleMenu}><HiX size={28} /></button>
            </div>
            <nav className="flex flex-col gap-4 text-blue-900 text-base">
              <div className="space-y-2">
                <span className="font-semibold text-blue-900">Profil</span>
                <div className="ml-4 space-y-1">
                  <a href="/profil-sekolah" onClick={toggleMenu} className="block text-sm text-blue-800 hover:underline">Profil Sekolah</a>
                  <a href="/data-kepengurusan" onClick={toggleMenu} className="block text-sm text-blue-800 hover:underline">Data Kepengurusan</a>
                </div>
              </div>
              <div className="space-y-2">
                <span className="font-semibold text-blue-900">Galeri dan Fasilitas</span>
                <div className="ml-4 space-y-1">
                  <a href="/galeri-kegiatan" onClick={toggleMenu} className="block text-sm text-blue-800 hover:underline">Galeri Kegiatan</a>
                  <a href="/fasilitas-kegiatan" onClick={toggleMenu} className="block text-sm text-blue-800 hover:underline">Fasilitas Sekolah</a>
                </div>
              </div>
              <a href="/berita" onClick={toggleMenu}>Berita</a>
              <a href="/kontak" onClick={toggleMenu}>Kontak</a>
              <a href="/kurikulum-pembelajaran" onClick={toggleMenu}>Pembelajaran</a>
              <a href="/ppdb" onClick={toggleMenu}>PPDB</a>

              {!isLoggedIn ? (
                <button
                  onClick={() => (window.location.href = '/login')}
                  className="w-full text-left border border-gray-400 px-5 py-1.5 rounded-full text-sm text-gray-700 hover:bg-gray-100 mt-4"
                >
                  Masuk
                </button>
              ) : (
                <div className="border-t border-gray-300 pt-3 mt-3 space-y-2">
                  <a href="/profil" onClick={toggleMenu} className="block text-sm text-blue-800 hover:underline">Info Profil</a>
                  <button
                    onClick={handleLogout}
                    className="block text-left text-sm text-red-600 hover:underline"
                  >
                    Keluar
                  </button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
