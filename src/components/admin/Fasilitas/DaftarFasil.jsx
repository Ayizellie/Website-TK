import React, { useState, useEffect } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import Swal from "sweetalert2";

const FormFasilitas = ({ data, onSimpan, onBatal }) => {
  const [nama, setNama] = useState("");
  const [foto, setFoto] = useState(""); // preview foto
  const [fotoFile, setFotoFile] = useState(null); // file asli untuk upload

  useEffect(() => {
    if (data) {
      setNama(data.name || "");
      setFoto(data.path ? `${import.meta.env.VITE_STORAGE_BASE_URL}/${data.path}` : "");
      setFotoFile(null);
    } else {
      setNama("");
      setFoto("");
      setFotoFile(null);
    }
  }, [data]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoFile(file);
      setFoto(URL.createObjectURL(file));
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Foto ini akan dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
      customClass: {
        confirmButton: "bg-red-500 text-white px-4 py-2 rounded-md",
        cancelButton: "bg-gray-300 text-black px-4 py-2 rounded-md ml-2",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        setFoto("");
        setFotoFile(null);
        Swal.fire("Terhapus!", "Foto berhasil dihapus.", "success");
      }
    });
  };

  const handleSave = async () => {
    if (!nama) {
      Swal.fire("Error", "Isi nama fasilitas dulu!", "error");
      return;
    }

    const formData = new FormData();
    formData.append("name", nama);
    if (fotoFile) {
      formData.append("image", fotoFile);
    }

    try {
      await onSimpan(formData);
    } catch (error) {
      console.error(error);
      Swal.fire("Gagal!", "Terjadi kesalahan saat menyimpan data.", "error");
    }
  };

  return (
    <NavbarSidebar>
      <div className="pt-0 px-8 pb-8">
        <h2 className="text-left text-[#064a8c] text-xl font-medium mb-8">
          {data ? "Edit Fasilitas" : "Form Tambah Fasilitas"}
        </h2>

        {/* Nama Fasilitas */}
        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-1">
            Nama Fasilitas
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama fasilitas"
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-xs"
          />
        </div>

        {/* Upload Foto Fasilitas */}
        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-2">
            Foto Fasilitas
          </label>
          <div className="flex gap-3 flex-wrap items-center">
            {foto ? (
              <div className="relative w-32 h-32 border border-gray-300 rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={foto}
                  alt="Fasilitas"
                  className="object-cover w-full h-full"
                />
                <button
                  onClick={handleDelete}
                  className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow"
                  title="Hapus Foto"
                >
                  <FaTrashAlt className="text-red-500" />
                </button>
                <label
                  className="absolute bottom-2 left-2 bg-white p-1 rounded-full shadow cursor-pointer"
                  title="Ganti Foto"
                >
                  <FaEdit className="text-blue-500" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <label className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center cursor-pointer">
                <span className="text-gray-400 text-2xl">+</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        {/* Tombol Simpan & Batal */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={onBatal}
            className="px-6 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Simpan
          </button>
        </div>
      </div>
    </NavbarSidebar>
  );
};

export default FormFasilitas;
