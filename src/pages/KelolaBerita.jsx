import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ListBerita from "../components/admin/Berita/ListBerita";
import DaftarBerita from "../components/admin/Berita/DaftarBerita";
import axios from "axios";

export default function KelolaBerita() {
  const [halaman, setHalaman] = useState("list");
  const [berita, setBerita] = useState([]);
  const [selectedBerita, setSelectedBerita] = useState(null);

  // base URL backend kamu
  const BASE_URL = "http://127.0.0.1:8000/api/news"; // ubah sesuai port backend

  // 🧠 ambil semua berita pas komponen pertama kali jalan
  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setBerita(res.data.data.data); // <<-- ini isi array berita
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Gagal memuat berita dari server!", "error");
    }
  };

  const handleTambah = () => {
    setSelectedBerita(null);
    setHalaman("tambah");
  };

  const handleEdit = (item) => {
    setSelectedBerita(item);
    setHalaman("edit");
  };

  const handleHapus = async (id) => {
    const result = await Swal.fire({
      title: "Yakin mau hapus?",
      text: "Data berita ini akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
      customClass: {
        confirmButton: "bg-red-500 text-white px-4 py-2 rounded-md",
        cancelButton: "bg-gray-300 text-black px-4 py-2 rounded-md ml-2",
      },
      buttonsStyling: false,
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("token"); // pastikan token login tersimpan
        const headers = token
          ? { Authorization: `Bearer ${token}` }
          : {};

        await axios.delete(`${BASE_URL}/${id}`, { headers });
        Swal.fire("Terhapus!", "Berita berhasil dihapus.", "success");
        fetchBerita();
      } catch (err) {
        console.error("Delete error:", err.response?.data);
        Swal.fire("Error", err.response?.data?.message || "Gagal menghapus berita!", "error");
      }
    }
  };

  const handleSimpan = async (data) => {
    try {
      const token = localStorage.getItem("token"); // kalau pakai auth
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      if (selectedBerita) {
        data.append("_method", "PUT");
        await axios.post(`${BASE_URL}/${selectedBerita.id}`, data, { headers });
        Swal.fire("Berhasil!", "Berita berhasil diperbarui.", "success");
      } else {
        await axios.post(BASE_URL, data, { headers });
        Swal.fire("Berhasil!", "Berita baru berhasil ditambahkan.", "success");
      }

      fetchBerita();
      setHalaman("list");
    } catch (err) {
      console.error("Error saving news:", err.response?.data);
      Swal.fire("Error", err.response?.data?.message || "Gagal menyimpan berita!", "error");
    }
  };


  return (
    <>
      {halaman === "list" && (
        <ListBerita
          dataBerita={berita}
          onTambah={handleTambah}
          onEdit={handleEdit}
          onHapus={handleHapus}
        />
      )}

      {(halaman === "tambah" || halaman === "edit") && (
        <DaftarBerita
          data={selectedBerita}
          onSimpan={handleSimpan}
          onBatal={() => setHalaman("list")}
        />
      )}
    </>
  );
}
