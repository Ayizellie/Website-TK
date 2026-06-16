import React from "react";

const SyaratPendaftaran = () => {
  return (
    <div className="px-6 md:px-20 py-12">
      {/* Motivasi Box */}
      <div className="bg-white shadow-md rounded-xl p-6 text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 bg-gray-100 text-sm md:text-base leading-relaxed">
          “Kami membuka pintu awal pendidikan terbaik untuk buah hati Anda. Yuk, persiapkan beberapa dokumen sederhana berikut agar si kecil bisa segera bergabung bersama kami di TK Negeri 1 Sangatta Utara!”
        </p>
      </div>

      {/* Judul */}
      <h2 className="text-lg md:text-xl font-bold text-blue-800 mb-2">
        Persyaratan pendaftaran
      </h2>
      <p className="text-blue-900 mb-8">
        Silakan siapkan dokumen dan informasi berikut sebelum mendaftar:
      </p>

      {/* Box Persyaratan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Usia Masuk */}
        <div className="bg-blue-100 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 text-center mb-2">Usia Masuk</h3>
          <ul className="text-blue-900 list-disc list-inside space-y-1">
            <li>Kelompok A</li>
            <li>Kelompok B</li>
            <li>Kelas Penitipan</li>
          </ul>
        </div>

        {/* Domisili */}
        <div className="bg-blue-100 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-2 text-center">Domisili</h3>
          <p className="text-blue-900">
            Calon murid berdomisili atau bertempat tinggal di Sangatta
          </p>
        </div>
      </div>

      {/* Dokumen Pelengkap */}
      <div className="bg-blue-100 rounded-xl p-6">
        <h3 className="font-bold text-blue-900 text-center mb-2">Dokumen Pelengkap</h3>
        <ul className="text-blue-900 list-disc list-inside space-y-1">
          <li>Menyiapkan Kartu Keluarga untuk pendaftaran</li>
          <li>Menyiapkan Akta Lahir calon murid untuk pendaftaran</li>
          <li>Menyiapkan Pas Foto calon murid untuk pendaftaran</li>
        </ul>
      </div>
    </div>
  );
};

export default SyaratPendaftaran;
