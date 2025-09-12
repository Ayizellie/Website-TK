import React, { useState } from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";

const ListFasilitas = ({ onTambah }) => {
  const [dataFasilitas, setDataFasilitas] = useState([
    { id: 1, nama: "Fasilitas 1", foto: "/images/galeri1.jpg" },
    { id: 2, nama: "Fasilitas 2", foto: "/images/galeri2.jpg" },
  ]);

  // Hapus fasilitas
  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Fasilitas ini akan dihapus!",
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
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        setDataFasilitas((prev) => prev.filter((item) => item.id !== id));
        Swal.fire({
          icon: "success",
          title: "Terhapus!",
          text: "Fasilitas berhasil dihapus.",
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

  // Edit fasilitas
  const handleEdit = (item) => {
    Swal.fire({
      title: "<span style='font-size:1.25rem; font-weight:bold; color:#064A8C'>Edit Fasilitas</span>",
      html: `
        <input id="nama" class="swal2-input text-lg text-gray-400" placeholder="${item.nama || 'Nama Fasilitas'}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Simpan",
      cancelButtonText: "Batal",
      customClass: {
        confirmButton: "bg-blue-400 text-white px-4 py-2 rounded-md",
        cancelButton: "bg-red-300 text-white px-4 py-2 rounded-md ml-2",
      },
      buttonsStyling: false,
      preConfirm: () => {
        const nama = document.getElementById("nama").value;
        if (!nama) Swal.showValidationMessage("Isi nama fasilitas!");
        return { nama };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setDataFasilitas((prev) =>
          prev.map((f) =>
            f.id === item.id ? { ...f, nama: result.value.nama } : f
          )
        );
        Swal.fire("Tersimpan!", "Fasilitas berhasil diperbarui.", "success");
      }
    });
  };

  return (
    <NavbarSidebar>
      <div className="pt-0 px-8 pb-8">
        <h2 className="text-left text-[#064a8c] text-xl font-medium mb-3">
          Kelola Fasilitas
        </h2>
        <h2 className="text-left text-[#047DD2] text-sm font-light mb-8">
          Management Dashboard Admin TK Negeri 1 Sangatta Utara
        </h2>

        <button
          onClick={onTambah}
          className="mb-8 mt-2 px-4 py-2 bg-blue-400 text-white shadow-md rounded-[15px] hover:bg-[#3B82F6]"
        >
          Tambah Fasilitas
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataFasilitas.map((item) => (
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

                <div className="flex gap-2 mt-4">
                  {/* Tombol Edit */}
                  <button
                    onClick={() => handleEdit(item)}
                    className="p-2 text-blue-300 rounded hover:bg-blue-200"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>

                  {/* Tombol Hapus */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-red-300 rounded hover:bg-red-200"
                    title="Hapus"
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

export default ListFasilitas;
