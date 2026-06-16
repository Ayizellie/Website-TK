import React from "react";

const PendaftaranPPDB = () => {
  return (
    <div className="px-4 md:px-16 py-10 text-center space-y-10">

      {/* Kalimat Pembuka */}
      <div className="bg-white shadow-md rounded-xl py-6 px-4 md:px-12 text-sm md:text-base text-gray-700">
        <p>
          “Kami membuka pintu awal pendidikan terbaik untuk buah hati Anda. Yuk,
          persiapkan beberapa dokumen sederhana berikut agar si kecil bisa segera
          bergabung bersama kami di TK Negeri 1 Sangatta Utara!”
        </p>
      </div>

      {/* Tahapan Mendaftar */}
      <div className="text-left space-y-4">
        <h2 className="text-blue-900 font-bold text-lg">Tahapan Mendaftar PPDB Online</h2>
        <ol className="bg-blue-100 text-blue-900 p-4 rounded-lg text-sm space-y-2 list-decimal list-inside">
          <li>Menyiapkan data dan dokumen pelengkap untuk diisi dan diupload pada formulir pendaftaran.</li>
          <li>Membuka link formulir pendaftaran pada tombol biru dibawah.</li>
          <li>Mengisi data dan dokumen yang diperlukan pada form.</li>
          <li>Melengkapi formulir pendaftaran yang telah diisi dengan memastikan seluruh data telah sesuai dan benar.</li>
          <li>Orang tua calon murid menyerahkan dokumen dan validasi berkas dari sekolah dalam beberapa waktu sesuai hari kerja.</li>
        </ol>
      </div>

      {/* Formulir Pendaftaran */}
      <div className="space-y-4">
        <h2 className="text-blue-900 font-bold text-lg">Formulir Pendaftaran</h2>
        <p className="text-sm text-gray-700">
          Silakan siapkan data dan dokumen pelengkap untuk di upload pada form pendaftaran secara online.
          Perhatikan data yang akan dimasukkan telah benar dan sesuai.
        </p>
        <button onClick={() => window.location.href = "/formulir-ppdb"} className="bg-blue-200 text-blue-900 font-semibold rounded-xl px-6 py-3 hover:bg-blue-300 transition">
          Form Pendaftaran
        </button>
      </div>

      {/* Status Verifikasi */}
      <div className="space-y-4">
        <h2 className="text-blue-900 font-bold text-lg">Cek Status Verifikasi Pendaftaran</h2>
        <p className="text-sm text-gray-700">
          Anda dapat melihat status verifikasi berkas pada tombol dibawah ini,
        </p>
        <button onClick={() => window.location.href = "/verifikasi-ppdb"} className="bg-blue-300 text-blue-900 font-semibold rounded-xl px-6 py-3 hover:bg-blue-400 transition">
          Halaman Status Verifikasi
        </button>
      </div>
      
    </div>
  );
};

export default PendaftaranPPDB;
