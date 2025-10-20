import React from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import { FaEdit, FaTrash } from "react-icons/fa";

const ListFasilitas = ({ dataFasilitas, onTambah, onEdit, onHapus }) => {
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

        {dataFasilitas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataFasilitas.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl overflow-hidden shadow-lg bg-white transition transform hover:scale-105"
              >
                {/* Tampilkan foto atau fallback */}
                <img
                  src={
                    item.path
                      ? `http://127.0.0.1:8000/storage/${item.path}`
                      : "https://via.placeholder.com/400x160?text=No+Image"
                  }
                  alt={item.name || "Fasilitas"}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {item.name || "Tanpa Nama"}
                  </h3>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => onEdit(item)}
                      className="p-2 text-blue-500 rounded hover:bg-blue-100"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => onHapus(item.id)}
                      className="p-2 text-red-500 rounded hover:bg-red-100"
                      title="Hapus"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-8 text-sm">
            Belum ada fasilitas.
          </p>
        )}
      </div>
    </NavbarSidebar>
  );
};

export default ListFasilitas;
