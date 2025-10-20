import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ListGaleri from "../components/admin/Galeri/ListGaleri";
import FormGaleriKegiatan from "../components/admin/Galeri/DaftarGaleri";
import axios from "axios";

export default function KelolaGaleri() {
  const [halaman, setHalaman] = useState("list"); // list / tambah / edit
  const [galeri, setGaleri] = useState([]);
  const [selectedGaleri, setSelectedGaleri] = useState(null);

  const token = localStorage.getItem("token");
  const API_URL = "http://127.0.0.1:8000/api/gallery";

  // 🔹 Ambil galeri dari backend
  const fetchGaleri = async () => {
    try {
      const res = await axios.get(API_URL);
      setGaleri(res.data.galeri || []);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Gagal memuat data galeri", "error");
    }
  };

  useEffect(() => {
    fetchGaleri();
  }, []);

  const handleTambah = () => {
    setSelectedGaleri(null);
    setHalaman("tambah");
  };

  const handleEdit = (item) => {
    setSelectedGaleri(item);
    setHalaman("edit");
  };

  const handleHapus = async (id) => {
    Swal.fire({
      title: "Yakin mau hapus?",
      text: "Galeri ini akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
      customClass: {
        confirmButton: "bg-red-500 text-white px-4 py-2 rounded-md",
        cancelButton: "bg-gray-300 text-black px-4 py-2 rounded-md ml-2",
      },
      buttonsStyling: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${API_URL}/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setGaleri((prev) => prev.filter((item) => item.id !== id));
          Swal.fire("Terhapus!", "Galeri berhasil dihapus.", "success");
        } catch (err) {
          console.error(err);
          Swal.fire("Error", "Gagal menghapus galeri", "error");
        }
      }
    });
  };

  const handleSimpan = (data, uploadedPhotos = []) => {
    if (selectedGaleri) {
      // update data lama
      setGaleri(
        galeri.map((item) =>
          item.id === selectedGaleri.id
            ? { ...item, ...data, images: uploadedPhotos }
            : item
        )
      );
      Swal.fire("Tersimpan!", "Galeri berhasil diperbarui.", "success");
    } else {
      // tambah data baru
      setGaleri([...galeri, { ...data, images: uploadedPhotos }]);
      Swal.fire("Tersimpan!", "Galeri baru berhasil ditambahkan.", "success");
    }
    setHalaman("list");
  };

  return (
    <>
      {halaman === "list" && (
        <ListGaleri
          dataGaleri={galeri}
          onTambah={handleTambah}
          onEdit={handleEdit}
          onHapus={handleHapus}
        />
      )}

      {(halaman === "tambah" || halaman === "edit") && (
        <FormGaleriKegiatan
          data={selectedGaleri}
          onSimpan={handleSimpan}
          onBatal={() => setHalaman("list")}
        />
      )}
    </>
  );
}
