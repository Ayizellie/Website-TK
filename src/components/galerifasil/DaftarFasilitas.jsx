import React from "react";
import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";

const DaftarFasilitas = () => {
  const fasilitas = [
    {title: "Ruang Kelas A1: Sentra Kreativitas", images:"/images/sentra_kreativitas.jpg"},
    {title: "Ruang Kelas B1: Sentra Balok", images: "/images/sentra_balok.jpg"},
    {title: "Ruang Kelas B2: Sentra Main Peran", images: "/images/sentra_main.jpg"},
    {title: "Ruang Kelas B3: Sentra Persiapan", images: "/images/sentra_persiapan.jpg"},
    {title: "Tempat Cuci Tangan", images: "/images/alat_cucitangan.jpg"},
    {title: "Rak Sepatu", images: "/images/rak_sepatu.jpg"},
    {title: "Lemari", images: "/images/lemari.jpg"},
    {title: "Kursi", images: "/images/kursi.jpg"},
    {title: "Meja", images: "/images/meja.jpg"},
    {title: "Toilet ", images: "/images/toilet.jpg"},
    {title: "Papan Tulis ", images: "/images/papan_tulis.jpg"},
    {title: "Ruang Guru ", images: "/images/ruang_guru.jpg"},
    {title: "Alat Kebersihan ", images: "/images/alat_kebersihan.jpg"},
  ];

  const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 6;
  
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = fasilitas.slice(indexOfFirstItem, indexOfLastItem);
  
      const totalPages = Math.ceil (fasilitas.length / itemsPerPage);
  
      const goToNext = () => {
          if (currentPage < totalPages) setCurrentPage (currentPage + 1);
      };
  
      const goToPrev = () => {
          if (currentPage > 1)  setCurrentPage (currentPage - 1);
      };

  return (
    <div className="w-full bg-white pb-16">
      <div className="px-4 sm:px-6 lg:px-20 space-y-10 mx-auto max-w-screen-xl">
        <a 
          href="/"
          className="flex items-center text-blue-800 font-semibold mt-24">
          <HiArrowLeft className="mr-2 text-3xl" />
        </a>
      </div>

        <h1 className="text-center text-2xl md:text-5xl font-extrabold text-[#047DD2] mb-4">
          FASILITAS SEKOLAH
        </h1>
        <h2 className="text-center text-md md:text-base text-[#4B5563] mb-20">
          Kami menyediakan berbagai fasilitas sekolah yang mendukung kegiatan belajar mengajar siswa
        </h2>

        <div className="max-w-6xl mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
            {currentItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-full overflow-hidden rounded-lg shadow">
                  <img src={item.images} alt={item.title} className="object-cover w-full h-40"/>
                </div>
                <div className="bg-[#5B8AC9] text-black text-sm w-60 h-10 text-center py-2 rounded-xl -mt-4">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={goToPrev} disabled={currentPage === 1} className="bg-blue-200 text-sm px-4 py-2 rounded transition duration-300 hover:bg-blue-200 disabled:opacity-80">
                Sebelumnya
            </button>
            <span className="text-sm">
                Halaman {currentPage} dari {totalPages}
            </span>
            <button onClick={goToNext} disabled={currentPage === totalPages} className="bg-blue-200 text-sm px-4 py-2 rounded hover:bg-blue-200 disabled:opacity-80">
                Selanjutnya
            </button>
        </div>
    </div>
  );
};


export default DaftarFasilitas;