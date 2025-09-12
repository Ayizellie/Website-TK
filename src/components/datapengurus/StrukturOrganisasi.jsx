import React from "react";
import { HiArrowLeft } from "react-icons/hi";

const StrukturOrganisasi = () => {
  return (
    <section className="px-6 md:px-20 py-10">
      {/* Panah balik */}
      <a
        href="/"
        className="flex items-center text-blue-800 font-semibold mb-10 mt-24"
      >
        <HiArrowLeft className="mr-2 text-3xl" />
      </a>

      {/* Judul */}
      <h2 className="text-3xl font-bold text-blue-800 mb-6">STRUKTUR ORGANISASI</h2>

      {/* Gambar */}
      <div className="bg-blue-100 p-4 md:p-6 rounded-2xl shadow-md">
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-sm">
          <img
            src="/images/organisasi.png"
            alt="Struktur Organisasi"
            className="max-w-3xl mx-auto w-full h-auto object-contain rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default StrukturOrganisasi;
