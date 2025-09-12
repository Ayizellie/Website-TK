import React, { useState } from "react";
import Swal from "sweetalert2";
import ListBerita from "../components/admin/Berita/ListBerita";
import DaftarBerita from "../components/admin/Berita/DaftarBerita";

export default function KelolaBerita() {
  const [halaman, setHalaman] = useState("list");
  const [berita, setBerita] = useState([
    {
      id: 1,
      tagline: "Berita 1",
      isi: "Ini isi berita 1 yang panjang banget untuk ditampilkan pada modal detail.",
      foto: "/images/galeri1.jpg",
    },
    {
      id: 2,
      tagline: "Berita 2",
      isi: "Isi berita 2 juga panjang dan bisa dilihat di modal ketika klik Selengkapnya.",
      foto: "/images/galeri3.jpg",
    },
  ]);
  const [selectedBerita, setSelectedBerita] = useState(null);

  const handleTambah = () => {
    setSelectedBerita(null);
    setHalaman("tambah");
  };

  const handleEdit = (item) => {
    setSelectedBerita(item);
    setHalaman("edit");
  };

  const handleHapus = (id) => {
    Swal.fire({
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
    }).then((result) => {
      if (result.isConfirmed) {
        setBerita(berita.filter((item) => item.id !== id));
        Swal.fire("Terhapus!", "Data berita berhasil dihapus.", "success");
      }
    });
  };

  const handleSimpan = (data) => {
    if (selectedBerita) {
      // update data lama
      setBerita(
        berita.map((item) =>
          item.id === selectedBerita.id ? { ...item, ...data } : item
        )
      );
      Swal.fire("Tersimpan!", "Perubahan berita berhasil disimpan.", "success");
    } else {
      // tambah data baru
      setBerita([
        ...berita,
        { id: Date.now(), ...data }, // auto id
      ]);
      Swal.fire("Tersimpan!", "Berita baru berhasil ditambahkan.", "success");
    }
    setHalaman("list");
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
