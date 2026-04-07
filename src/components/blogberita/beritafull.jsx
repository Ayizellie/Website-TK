import React, { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import axios from "axios";
import Swal from "sweetalert2";

const BlogBerita = () => {
  const [dataBerita, setDataBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/news`;

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const res = await axios.get(BASE_URL);
        setDataBerita(res.data.data.data || []);
      } catch (err) {
        console.error("Gagal ambil data berita:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBerita();
  }, []);

  const handleDetail = (item) => {
    Swal.fire({
      title: `<strong style="color:#047DD2;">${item.title}</strong>`,
      html: `
        <img src="${import.meta.env.VITE_STORAGE_BASE_URL}/${item.thumbnail}" 
             alt="${item.title}" 
             class="w-full h-48 object-cover rounded-lg mb-4"/>
        <div class="text-gray-700 text-sm text-justify whitespace-pre-line">${item.content}</div>
      `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: "Tutup",
      customClass: {
        confirmButton: "bg-blue-500 text-white px-4 py-2 rounded-md",
      },
    });
  };

  if (loading) {
    return (
      <div className="w-full text-center py-20 text-gray-500">
        Sedang memuat berita...
      </div>
    );
  }

  return (
    <div className="relative py-28 px-4 md:px-20 bg-white">
      <div className="mb-6 mt-6">
        <a
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          <HiArrowLeft className="mr-2 text-3xl" />
        </a>
      </div>

      <h2 className="text-center text-2xl md:text-5xl font-extrabold text-[#047DD2] mb-16">
        Blog dan Berita
      </h2>

      {/* Motto Sekolah */}
      <img
        src="/images/motto.png"
        alt="Motto Sekolah"
        className="absolute top-28 right-10 w-32 md:w-22 lg:w-30"
      />

      {dataBerita.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada berita.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataBerita.map((berita) => (
            <div
              key={berita.id}
              className="bg-white border rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={`${import.meta.env.VITE_STORAGE_BASE_URL}/${berita.thumbnail}`}
                alt={berita.title}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.src = "/no-image.jpg")}
              />
              <div className="p-4">
                <h3 className="text-blue-800 font-bold text-base mb-1">
                  {berita.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(berita.created_at).toLocaleDateString("id-ID")}
                </p>
                <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                  {berita.content}
                </p>
                <button
                  onClick={() => handleDetail(berita)}
                  className="text-pink-600 text-sm hover:underline font-medium"
                >
                  Baca Selengkapnya &gt;&gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogBerita;
