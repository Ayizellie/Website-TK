import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white mt-20">
      <div className="px-6 md:px-20 py-10 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo dan Motto */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/images/logo2.png" alt="Logo Sekolah" className="w-20 mb-4" />
          <h3 className="font-bold text-lg">TK NEGERI 1 SANGATTA UTARA</h3>
          <p className="italic text-sm">“Terbaik, Mandiri, Berprestasi”</p>
        </div>

        {/* Info Kontak */}
        <div className="text-sm text-white space-y-3">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> JL. A.W. SYAHRANI RT 39, SANGATTA UTARA
          </p>
          <p className="flex items-center gap-2">
            <FaPhone /> 08123456789
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> tkn1@gmail.com
          </p>
        </div>

        {/* Sosial Media */}
        <div className="flex md:justify-end justify-center items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="text-white bg-blue-600 p-2 rounded-full w-8 h-8" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-white bg-pink-500 p-2 rounded-full w-8 h-8" />
          </a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
            <FaWhatsapp className="text-white bg-green-500 p-2 rounded-full w-8 h-8" />
          </a>
        </div>
      </div>

      <div className="text-center text-sm py-4 bg-blue-800">
        © 2025, TK NEGERI 1 SANGATTA UTARA
      </div>
    </footer>
  );
};

export default Footer;
