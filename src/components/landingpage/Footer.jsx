import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3C80C7] text-white mt-5">
      <div className="px-6 md:px-20 py-10 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo dan Motto */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/images/logo TK.png" alt="Logo Sekolah" className="w-20 mb-4" />
          <h3 className="font-bold text-lg">TK NEGERI 1 SANGATTA UTARA</h3>
          <p className="italic text-sm">“Terbaik, Mandiri, Berprestasi”</p>
        </div>

        {/* Info Kontak */}
        <div className="text-sm text-white space-y-6">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> JL. A.W. SYAHRANI RT 39, SANGATTA UTARA
          </p>

          <p className="flex items-center gap-2">
            <FaEnvelope /> tknegeri1sgtutara@gmail.com
          </p>
        </div>

        {/* Sosial Media */}
        <div className="flex md:justify-end justify-center items-center gap-5">
          <a href="https://web.facebook.com/profile.php?id=100091968307508" target="_blank" rel="noreferrer">
            <FaFacebookF className="text-white bg-blue-600 p-2 rounded-full w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/tknegeri1sangattautara/" target="_blank" rel="noreferrer">
            <FaInstagram className="text-white bg-pink-500 p-2 rounded-full w-8 h-8" />
          </a>
        </div>
      </div>

      <div className="text-center text-sm py-4 bg-[#064A8C]">
        © 2025, TK NEGERI 1 SANGATTA UTARA
      </div>
    </footer>
  );
};

export default Footer;
