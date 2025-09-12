import React from "react";
import Navbar from "../components/landingpage/Navbar";

const DetailBerita = () => {
  // Ambil ID dari URL (contoh: ?id=1)
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // Data contoh untuk ID = 1
  const berita = {
    id: "1",
    judul: "Pelepasan Angkatan 2024-2025",
    tanggal: "27 Mei 2025",
    gambar: "/images/galeri1.jpg",
    isi: `SANGATTA – Pada 27 Mei 2025, telah terasa salah satu babak akhir anak-anak TK Negeri 1 Sangatta Utara. Momen perpisahan ini menjadi penuh haru dan bahagia. Anak-anak tampil mengenakan baju adat serta menampilkan pertunjukan seni yang telah mereka siapkan bersama guru.

Orang tua, guru, dan para undangan ikut merayakan keberhasilan anak-anak menyelesaikan jenjang pendidikan PAUD dengan penuh cinta, tawa, dan kenangan indah. Acara ini menjadi bukti betapa pentingnya kolaborasi antara sekolah dan keluarga dalam tumbuh kembang anak.

Dengan semangat dan harapan, anak-anak TK Negeri 1 siap melangkah menuju jenjang pendidikan selanjutnya.`,
  };

  // Kalau ID bukan 1
  if (id !== "1") {
    return (
      <>
        <Navbar />
        <div className="py-20 text-center text-gray-600 text-xl">Berita tidak ditemukan</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="py-16 px-4 md:px-20 bg-white max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3">{berita.judul}</h1>
        <p className="text-gray-500 text-sm mb-5">{berita.tanggal}</p>
        <img
          src={berita.gambar}
          alt={berita.judul}
          className="w-full rounded-xl shadow-lg mb-8"
        />
        <p className="text-gray-800 text-justify leading-relaxed whitespace-pre-line">
          {berita.isi}
        </p>
      </div>
    </>
  );
};

export default DetailBerita;
