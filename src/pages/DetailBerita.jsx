import React, { useEffect, useState } from "react";
import Navbar from "../components/landingpage/Navbar";
import axios from "axios";

const DetailBerita = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/news/${id}`);
        setBerita(res.data.data); // sesuaikan dengan struktur respons API
      } catch (err) {
        console.error("Gagal ambil berita:", err);
        setBerita(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBerita();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="py-20 text-center text-gray-500">Memuat berita...</div>
      </>
    );
  }

  if (!berita) {
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
      <div className="py-28 px-4 md:px-20 bg-white max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3">{berita.title}</h1>
        <img 
          src="/images/motto.png" 
          alt="Motto Sekolah" 
          className="absolute top-24 right-10 w-32 md:w-22 lg:w-30"
        />
        <p className="text-gray-500 text-sm mb-5">
          {new Date(berita.created_at).toLocaleDateString("id-ID")}
        </p>
        <img
          src={`http://127.0.0.1:8000/storage/${berita.thumbnail}`}
          alt={berita.title}
          className="w-full rounded-xl shadow-lg mb-8"
          onError={(e) => (e.target.src = "/no-image.jpg")}
        />
        <p className="text-gray-800 text-justify leading-relaxed whitespace-pre-line">
          {berita.content}
        </p>
      </div>
    </>
  );
};

export default DetailBerita;
