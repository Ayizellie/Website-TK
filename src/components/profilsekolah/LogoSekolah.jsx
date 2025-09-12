import React from "react";

const LogoSekolah = () => {
  return (
    <section className="mt-10 px-6 md:px-20">
      <h3 className="text-blue-800 font-bold text-2xl mb-6">LOGO</h3>
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-6">
        <img
          src="/images/logo1.png"
          alt="Logo TK"
          className="w-28 h-28 object-contain"
        />
        <div className="bg-blue-100 px-6 py-10 rounded-xl shadow text-gray-700 text-base font-medium w-full">
          Logo TK Negeri 1 Sangatta Utara menggambarkan semangat, keceriaan, dan kesungguhan dalam mendidik anak usia dini.
        </div>
      </div>
    </section>
  );
};

export default LogoSekolah;
