import React from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const ListBerita = ({ dataBerita, onTambah, onEdit, onHapus }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin mau hapus?",
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
      if (result.isConfirmed) onHapus(id);
    });
  };

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

  const handleEdit = (item) => {
    Swal.fire({
      title: "Edit Berita",
      text: `Kamu akan mengedit berita: "${item.title}"`,
      icon: "info",
      confirmButtonText: "Lanjutkan",
      customClass: {
        confirmButton: "bg-yellow-500 text-white px-4 py-2 rounded-md",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onEdit(item);
      }
    });
  };

  return (
    <NavbarSidebar>
      <div className="pt-0 px-8 pb-8">
        <h2 className="text-left text-[#064a8c] text-xl font-medium mb-3">
          Kelola Berita
        </h2>
        <h2 className="text-left text-[#047DD2] text-sm font-light mb-8">
          Management Dashboard Admin
        </h2>

        {/* Tombol Tambah Berita */}
        <div className="mb-6">
          <button
            onClick={onTambah}
            className="px-6 py-2 bg-blue-400 text-white shadow-md rounded-[15px] hover:bg-[#3B82F6]"
          >
            Tambah Berita
          </button>
        </div>

        {/* Daftar Berita */}
        <div className="flex flex-col gap-4">
          {dataBerita.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row border rounded-xl p-4 bg-white shadow hover:shadow-md transition"
            >
              <img
                src={`${import.meta.env.VITE_STORAGE_BASE_URL}/${item.thumbnail}`}
                alt={item.title}
                className="w-full sm:w-32 h-48 sm:h-24 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                onError={(e) => (e.target.src = "/no-image.jpg")} // fallback jika gambar rusak
              />

              <div className="flex-1">
                <h3 className="font-semibold text-blue-800">{item.title}</h3>
                <p className="text-gray-600 text-sm truncate max-w-[600px] overflow-hidden text-ellipsis">
                  {item.content}
                </p>

                <div className="mt-2 flex justify-between items-center flex-wrap gap-2">
                  <span
                    className="text-blue-500 text-sm cursor-pointer hover:underline"
                    onClick={() => handleDetail(item)}
                  >
                    Selengkapnya &gt;&gt;
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-300 rounded hover:bg-blue-200"
                      title="Edit Berita"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-300 rounded hover:bg-red-200"
                      title="Hapus Berita"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </NavbarSidebar>
  );
};

export default ListBerita;
