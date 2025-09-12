import React, { useState } from "react";
import Swal from "sweetalert2";
import ListFasilitas from "../components/admin/Fasilitas/ListFasilitas";
import DaftarFasil from "../components/admin/Fasilitas/DaftarFasil";

export default function KelolaFasilitas() {
  const [halaman, setHalaman] = useState("list");
  const [fasilitas, setFasilitas] = useState([
    { id: 1, nama: "Fasilitas 1", foto: "/images/fasilitas1.jpg" },
    { id: 2, nama: "Fasilitas 2", foto: "/images/fasilitas2.jpg" },
  ]);
  const [selectedFasilitas, setSelectedFasilitas] = useState(null);

  const handleTambah = () => {
    setSelectedFasilitas(null);
    setHalaman("tambah");
  };

  const handleEdit = (item) => {
    setSelectedFasilitas(item);
    setHalaman("edit");
  };

  const handleHapus = (id) => {
    Swal.fire({
      title: "Yakin mau hapus?",
      text: "Data fasilitas ini akan dihapus permanen!",
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
        setFasilitas(fasilitas.filter((item) => item.id !== id));
        Swal.fire("Terhapus!", "Data fasilitas berhasil dihapus.", "success");
      }
    });
  };

  const handleSimpan = (data) => {
    if (selectedFasilitas) {
      // update data lama
      setFasilitas(
        fasilitas.map((item) =>
          item.id === selectedFasilitas.id ? { ...item, ...data } : item
        )
      );
      Swal.fire("Tersimpan!", "Perubahan fasilitas berhasil disimpan.", "success");
    } else {
      // tambah data baru
      setFasilitas([
        ...fasilitas,
        { id: Date.now(), ...data }, // auto id
      ]);
      Swal.fire("Tersimpan!", "Fasilitas baru berhasil ditambahkan.", "success");
    }
    setHalaman("list");
  };

  return (
    <>
      {halaman === "list" && (
        <ListFasilitas
          dataFasilitas={fasilitas}
          onTambah={handleTambah}
          onEdit={handleEdit}
          onHapus={handleHapus}
        />
      )}

      {(halaman === "tambah" || halaman === "edit") && (
        <DaftarFasil
          data={selectedFasilitas}
          onSimpan={handleSimpan}
          onBatal={() => setHalaman("list")}
        />
      )}
    </>
  );
}
