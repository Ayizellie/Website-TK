import React from "react";
import { HiArrowLeft } from "react-icons/hi";


const dataBerita = [
  {
    id: "1",
    judul: "Pelepasan Angkatan 2024-2025",
    tanggal: "27 Mei 2025",
    deskripsi:
      "Pada 27 Mei 2025, telah terasa salah satu babak akhir anak-anak TK Negeri 1 Sangatta Utara. Selamat semoga anak-anak semakin hebat dan berprestasi di masa depan.",
    gambar: "/images/galeri1.jpg",
  },
  {
    id: "2",
    judul: "Pertemuan orang tua anak didik ajaran 2025-2026",
    tanggal: "11 Juni 2025",
    deskripsi:
      "Pertemuan orang tua murid di TK Negeri 1 Sangatta Utara pada tanggal 11 Juni 2025 dilakukan dalam rangka sinergi antara guru dan orang tua siswa.",
    gambar: "/images/galeri2.jpg",
  },
  {
    id: "3",
    judul: "Outing Class ke Kebun Kelutut Sangatta",
    tanggal: "Juni 2025",
    deskripsi:
      "Anak-anak sangat antusias mengikuti outing class ke Kebun Kelutut. Mereka belajar tentang lebah dan alam sekitar dengan cara yang menyenangkan.",
    gambar: "/images/galeri3.jpg",
  },
];

const BlogBerita = () => {
  return (
    <div className="py-16 px-4 md:px-20 bg-white">
      <div className="mb-6 mt-6">
            <a
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
                <HiArrowLeft className="mr-1 text-2xl" />
            </a>
        </div>

      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-10">
        Blog dan Berita
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataBerita.map((berita) => (
          <div
            key={berita.id}
            className="bg-white border rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={berita.gambar}
              alt={berita.judul}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-blue-800 font-bold text-base mb-1">{berita.judul}</h3>
              <p className="text-sm text-gray-500 mb-2">{berita.tanggal}</p>
              <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                {berita.deskripsi}
              </p>
              <a
                href={`/detail-berita?id=1`}
                className="text-pink-600 text-sm hover:underline font-medium"
              >
                Baca Selengkapnya &gt;&gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogBerita;
