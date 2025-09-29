import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">


        {/* Kiri: Logo */}
        <div className="flex items-center gap-4">
          <img src="/images/logo1.png" alt="Logo 1" className="h-12 w-auto object-contain" />
          <img src="/images/logo2.png" alt="Logo 2" className="h-12 w-auto object-contain" />
        </div>

        {/* Tengah: Menu Desktop */}
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
              <a href="/galeri-kegiatan" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 rounded-t-xl">
                Galeri Kegiatan
              </a>
              <a href="/fasilitas-kegiatan" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 rounded-b-xl">
                Fasilitas Kegiatan
              </a>
            </div>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/berita";
            }}
            className="hover:text-blue-600"
          >
            Berita
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/kontak";
            }}
            className="hover:text-blue-600"
          >
            Kontak
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/kurikulum-pembelajaran";
            }}
            className="hover:text-blue-600"
          >
            Pembelajaran
          </a>
          <a href="/ppdb" className="hover:text-blue-600">PPDB</a>
        </div>

        {/* Tombol Masuk Desktop */}
        <button className="hidden lg:inline-block border border-gray-400 px-5 py-1.5 rounded-full text-sm text-gray-700 hover:bg-gray-100">
          Masuk
        </button>

        {/* Hamburger Menu Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <HiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Sidebar Slide Mobile Menu */}
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
                  <a href="/galeri-kegiatan" onClick={toggleMenu} className="block text-sm text-blue-800 hover:underline">
                    Galeri Kegiatan
                  </a>
                  <a href="/fasilitas-kegiatan" onClick={toggleMenu} className="block text-sm text-blue-800 hover:underline">
                    Fasilitas Sekolah
                  </a>
                </div>
              </div>
              <a href="#informasi" onClick={toggleMenu}>Informasi</a>
              <a href="#kontak" onClick={toggleMenu}>Kontak</a>
              <a href="#pembelajaran" onClick={toggleMenu}>Pembelajaran</a>
              <a href="/ppdb" onClick={toggleMenu}>PPDB</a>
              <button className="w-full text-left border border-gray-400 px-5 py-1.5 rounded-full text-sm text-gray-700 hover:bg-gray-100 mt-4">
                Masuk
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
