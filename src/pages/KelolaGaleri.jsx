import React, { useState } from "react";
import Swal from "sweetalert2";
import ListGaleri from "../components/admin/Galeri/ListGaleri";
import DaftarGaleri from "../components/admin/Galeri/DaftarGaleri";

export default function KelolaGaleri() {
  const [halaman, setHalaman] = useState("list");
  const [galeri, setGaleri] = useState([
    { id: 1, nama: "Galeri 1", deskripsi: "Kegiatan A", foto: "/images/galeri1.jpg" },
    { id: 2, nama: "Galeri 2", deskripsi: "Kegiatan B", foto: "/images/galeri1.jpg" },
  ]);
  const [selectedGaleri, setSelectedGaleri] = useState(null);

  const handleTambah = () => {
    setSelectedGaleri(null);
    setHalaman("tambah");
  };

  const handleEdit = (item) => {
    setSelectedGaleri(item);
    setHalaman("edit");
  };

  const handleHapus = (id) => {
    Swal.fire({
      title: "Yakin mau hapus?",
      text: "Data galeri ini akan dihapus permanen!",
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
        setGaleri(galeri.filter((item) => item.id !== id));
        Swal.fire("Terhapus!", "Data galeri berhasil dihapus.", "success");
      }
    });
  };

  const handleSimpan = (data) => {
    if (selectedGaleri) {
      // update data lama
      setGaleri(
        galeri.map((item) =>
          item.id === selectedGaleri.id ? { ...item, ...data } : item
        )
      );
      Swal.fire("Tersimpan!", "Perubahan galeri berhasil disimpan.", "success");
    } else {
      // tambah data baru
      setGaleri([
        ...galeri,
        { id: Date.now(), ...data }, // auto id
      ]);
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
        <DaftarGaleri
          data={selectedGaleri}
          onSimpan={handleSimpan}
          onBatal={() => setHalaman("list")}
        />
      )}
    </>
  );
}
