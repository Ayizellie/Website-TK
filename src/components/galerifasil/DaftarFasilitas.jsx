import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiArrowLeft } from "react-icons/hi";

const DaftarFasilitas = () => {
  const [fasilitas, setFasilitas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const apiBase = `${import.meta.env.VITE_API_BASE_URL}/facilities`;

  // Ambil data fasilitas dari backend
  const fetchFasilitas = async () => {
    try {
      const res = await axios.get(apiBase);
      const data = res.data?.data?.data || res.data?.data || [];
      setFasilitas(data);
    } catch (error) {
      console.error("Gagal mengambil data fasilitas:", error);
    }
  };

  useEffect(() => {
    fetchFasilitas();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fasilitas.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(fasilitas.length / itemsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-full relative py-28 px-4 md:px-20 bg-white">
      {/* Tombol back */}
      <div className="mb-6 mt-6">
        <a href="/" className="inline-flex items-center text-blue-800 hover:text-blue-800 text-sm font-medium">
          <HiArrowLeft className="mr-2 text-3xl" />
        </a>
      </div>

      {/* Judul */}
      <h1 className="text-center text-2xl md:text-5xl font-extrabold text-[#047DD2] mb-4">
        Fasilitas Sekolah
      </h1>
      <h2 className="text-center text-md md:text-base text-[#4B5563] mb-20">
        Kami menyediakan berbagai fasilitas sekolah yang mendukung kegiatan belajar mengajar siswa
      </h2>

      {/* Gambar motto */}
      <img
        src="/images/motto.png"
        alt="Motto Sekolah"
        className="absolute top-28 right-10 w-32 md:w-22 lg:w-30"
      />

      {/* Grid fasilitas */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
            {currentItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <div className="w-full overflow-hidden rounded-lg shadow">
                  <img
                    src={
                      item.path
                        ? `${import.meta.env.VITE_STORAGE_BASE_URL}/${item.path}`
                        : "https://via.placeholder.com/400x160?text=No+Image"
                    }
                    alt={item.name || "Fasilitas"}
                    className="object-cover w-full h-40"
                  />
                </div>
                <div className="bg-[#5B8AC9] text-black text-sm w-60 h-10 text-center py-2 rounded-xl -mt-4">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-8">Belum ada fasilitas.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className="bg-blue-200 text-sm px-4 py-2 rounded transition duration-300 hover:bg-blue-200 disabled:opacity-80"
        >
          Sebelumnya
        </button>
        <span className="text-sm">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="bg-blue-200 text-sm px-4 py-2 rounded hover:bg-blue-200 disabled:opacity-80"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default DaftarFasilitas;
