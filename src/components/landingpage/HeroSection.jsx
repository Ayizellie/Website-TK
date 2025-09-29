import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-screen min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Dekoratif */}
      <img
        src="/images/lp.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlay putih transparan */}
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>

      {/* Konten */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 md:px-20 w-full max-w-6xl">
        {/* Teks */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#047DD2]">
            TK NEGERI 1
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#064A8C]">
            SANGATTA UTARA
          </h2>
          <p className="text-sm md:text-base font-normal text-[#064A8C]">
            TK Negeri 1 Sangatta Utara adalah taman kanak-kanak yang berkomitmen menciptakan lingkungan belajar menyenangkan, aman, dan mendukung prestasi. 
          </p>
          <a href="/ppdb">
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition mt-8">
              Daftar, yuk!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
