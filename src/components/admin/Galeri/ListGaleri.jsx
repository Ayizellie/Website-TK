import React, { useState } from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";


const ListGaleri = ({ onTambah }) => {
  const [dataGaleri, setDataGaleri] = useState([
    { id: 1, nama: "Galeri 1", deskripsi: "Kegiatan A", foto: "/images/galeri1.jpg" },
    { id: 2, nama: "Galeri 2", deskripsi: "Kegiatan B", foto: "/images/galeri1.jpg" },
  ]);

  // Hapus galeri
  const handleDelete = (id) => {
    Swal.fire({
        title: "Apakah kamu yakin?",
        text: "Galeri ini akan dihapus!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Batal",
        customClass: {
        confirmButton:
            "bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md",
        cancelButton:
            "bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 py-2 rounded-md ml-8",
        },
        buttonsStyling: false, // wajib biar customClass kepake
    }).then((result) => {
        if (result.isConfirmed) {
        setDataGaleri((prev) => prev.filter((item) => item.id !== id));
        Swal.fire({
            icon: "success",
            title: "Terhapus!",
            text: "Galeri berhasil dihapus.",
            confirmButtonText: "OK",
            customClass: {
            confirmButton:
                "bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md",
            },
            buttonsStyling: false,
        });
        }
    });
   };


  // Edit galeri
  const handleEdit = (item) => {
  Swal.fire({
    title: "<span style='font-size:1.25rem; font-weight:bold; color:#064A8C'>Edit Galeri</span>",
    html: `
      <input id="nama" class="swal2-input text-lg text-gray-400" placeholder="${item.nama || 'Nama Galeri'}">
      <input id="deskripsi" class="swal2-input text-lg text-gray-400" placeholder="${item.deskripsi || 'Deskripsi Galeri'}">
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: "Simpan",
    cancelButtonText: "Batal",
    customClass: {
      confirmButton: "bg-blue-400 text-white px-4 py-2 rounded-md",
      cancelButton: "bg-red-300 text-white px-4 py-2 rounded-md ml-2",
    },
    buttonsStyling: false, // biar styling custom dipakai
    preConfirm: () => {
      const nama = document.getElementById("nama").value;
      const deskripsi = document.getElementById("deskripsi").value;
      if (!nama || !deskripsi) {
        Swal.showValidationMessage("Isi semua field!");
      }
      return { nama, deskripsi };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      setDataGaleri((prev) =>
        prev.map((g) =>
          g.id === item.id ? { ...g, nama: result.value.nama, deskripsi: result.value.deskripsi } : g
        )
      );
      Swal.fire("Tersimpan!", "Galeri berhasil diperbarui.", "success");
    }
  });
 };

  return (
    <NavbarSidebar>
      <div className="pt-0 px-8 pb-8">
        <h2 className="text-left text-[#064a8c] text-xl font-medium mb-3">Kelola Galeri</h2>
        <h2 className="text-left text-[#047DD2] text-sm font-light mb-8">Management Dashoard Admin TK Negeri 1 Sangatta Utara</h2>

        <button
          onClick={onTambah}
          className="mb-8 mt-2 px-4 py-2 bg-blue-400 text-white shadow-md rounded-[15px] hover:bg-[#3B82F6]"
        >
          Tambah Galeri
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataGaleri.map((item) => (
                <div
                    key={item.id}
                    className="border rounded-xl overflow-hidden shadow-lg bg-white transition transform hover:scale-105"
                    >
                    <img
                        src={item.foto}
                        alt={item.nama}
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-800">{item.nama}</h3>
                        <p className="text-sm text-gray-600">{item.deskripsi}</p>

                        <div className="flex gap-2 mt-4">
                            {/* Tombol Edit */}
                            <button
                                onClick={() => handleEdit(item)}
                                className="p-2 text-blue-300 rounded hover:bg-blue-200"
                                title="Edit" // tooltip saat hover
                            >
                                <FaEdit />
                            </button>

                            {/* Tombol Hapus */}
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="p-2 text-red-300 rounded hover:bg-red-200"
                                title="Hapus" // tooltip saat hover
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </NavbarSidebar>
  );
};

export default ListGaleri;
