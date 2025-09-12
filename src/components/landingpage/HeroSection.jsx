import { useState } from "react";

export default function HeroSection() {
  return (
    <section
      className="w-screen h-[85vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero-illustration.png')" }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-white bg-opacity-40 z-0"></div>

      {/* Konten */}
      <div className="relative z-10 text-center px-6 w-full max-w-screen-md mx-auto text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-500">
          TK NEGERI 1
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mt-1">
          SANGATTA UTARA
        </h2>
        <p className="mt-3 text-sm md:text-base">
          TK Negeri 1 Sangatta Utara merupakan taman kanak-kanak negeri yang
          berdedikasi dalam menciptakan lingkungan belajar yang menyenangkan,
          aman, dan mendidik bagi anak-anak usia dini.
        </p>

        <div className="mt-6 flex justify-center">
          <a href="#ppdb">
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition">
              Daftar, yuk!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
