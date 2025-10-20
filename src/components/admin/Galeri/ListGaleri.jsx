import React from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import { FaEdit, FaTrash } from "react-icons/fa";

const ListGaleri = ({ dataGaleri, onTambah, onEdit, onHapus }) => {
  return (
    <NavbarSidebar>
      <div className="pt-0 px-8 pb-8">
        <h2 className="text-left text-[#064a8c] text-xl font-medium mb-3">
          Kelola Galeri
        </h2>
        <button
          onClick={onTambah}
          className="mb-8 mt-2 px-4 py-2 bg-blue-400 text-white shadow-md rounded-[15px] hover:bg-[#3B82F6]"
        >
          Tambah Galeri
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataGaleri.length > 0 ? (
            dataGaleri.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl overflow-hidden shadow-lg bg-white transition transform hover:scale-105"
              >
               <img
                  src={
                    item.images?.[0]?.path
                      ? `http://127.0.0.1:8000/storage/${item.images[0].path}?t=${new Date().getTime()}`
                      : "/images/placeholder.jpg"
                  }
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => onEdit(item)}
                      className="p-2 text-blue-400 rounded hover:bg-blue-100"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => onHapus(item.id)}
                      className="p-2 text-red-400 rounded hover:bg-red-100"
                      title="Hapus"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Belum ada galeri kegiatan.</p>
          )}
        </div>
      </div>
    </NavbarSidebar>
  );
};

export default ListGaleri;
