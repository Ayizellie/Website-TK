import React, { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import axios from "axios";

const DaftarGaleri = () => {
  const [galeri, setGaleri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    const fetchGaleri = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/gallery`);
        setGaleri(res.data.galeri);
      } catch (error) {
        console.error("Gagal mengambil data galeri:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGaleri();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = galeri.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(galeri.length / itemsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <p className="text-center mt-10">Memuat galeri...</p>;

  return (
    <div className="w-full relative py-28 px-4 md:px-20 bg-white">
      <div className="mb-6 mt-6">
        <a href="/" className="inline-flex items-center text-blue-800 hover:text-blue-800 text-sm font-medium">
          <HiArrowLeft className="mr-2 text-3xl" />
        </a>
      </div>

      <h1 className="text-center text-2xl md:text-5xl font-extrabold text-[#047DD2] mb-4">
        Galeri Kegiatan
      </h1>

      <img
        src="/images/motto.png"
        alt="Motto Sekolah"
        className="absolute top-28 right-10 w-32 md:w-22 lg:w-30"
      />

      <div className="max-w-6xl mx-auto px-4">
        {currentItems.length > 0 ? (
          currentItems.map((activity) => (
            <div key={activity.id} className="bg-white border rounded-3xl mb-14 p-8 shadow-sm">
              <h2 className="font-bold text-[#064A8C] text-2xl mb-3">{activity.name}</h2>
              <p className="font-normal text-[#4B5563] text-sm mb-12">{activity.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {activity.images && activity.images.length > 0 ? (
                  activity.images.map((img) => (
                    <img
                      key={img.id}
                      src={`${import.meta.env.VITE_STORAGE_BASE_URL}/${img.path}`}
                      className="aspect-[4/3] w-full rounded-3xl shadow-md object-cover"
                      alt={activity.name}
                    />
                  ))
                ) : (
                  <p className="text-gray-400 italic">Belum ada foto.</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Belum ada galeri kegiatan.</p>
        )}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className="bg-blue-200 text-sm px-4 py-2 rounded hover:bg-blue-300 disabled:opacity-50"
        >
          Sebelumnya
        </button>
        <span className="text-sm">
          Halaman {currentPage} dari {totalPages || 1}
        </span>
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="bg-blue-200 text-sm px-4 py-2 rounded hover:bg-blue-300 disabled:opacity-50"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default DaftarGaleri;
