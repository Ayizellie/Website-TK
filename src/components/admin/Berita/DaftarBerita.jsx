import React, { useState } from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import Swal from "sweetalert2";

const DaftarBerita = ({ data, onSimpan, onBatal }) => {
  const [title, setTitle] = useState(data?.title || "");
  const [content, setContent] = useState(data?.content || "");
  const [thumbnail, setThumbnail] = useState(data?.thumbnail || null);
  const [preview, setPreview] = useState(data?.thumbnail ? `http://127.0.0.1:8000/storage/${data.thumbnail}` : null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (!title || !content) {
      Swal.fire("Error", "Judul dan isi wajib diisi!", "error");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (thumbnail instanceof File) {
      formData.append("image", thumbnail); // hanya kirim kalau user upload baru
    }

    onSimpan(formData);
  };

  return (
    <NavbarSidebar>
      <div className="pt-0 px-8 pb-8">
        <h2 className="text-left text-[#064a8c] text-xl font-medium mb-8">
          Form Pengisian Berita
        </h2>

        {/* Judul / Title */}
        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-1">
            Judul Berita
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Masukkan judul berita"
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-xs"
          />
        </div>

        {/* Isi Berita */}
        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-1">
            Isi Berita
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Masukkan isi berita lengkap"
            rows={5}
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-xs"
          />
        </div>

        {/* Upload Gambar */}
        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-1">
            Upload / Edit Foto Cover
          </label>

          <div
            className="relative w-48 h-32 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center cursor-pointer hover:border-blue-400 transition"
            onClick={() => document.getElementById("fileInput").click()}
          >
            {preview ? (
              <>
                <img
                  src={preview}
                  alt="Cover Berita"
                  className="w-full h-full object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById("fileInput").click();
                  }}
                  className="absolute top-1 right-1 bg-white p-1 rounded-full shadow hover:bg-gray-100"
                  title="Ganti Foto"
                >
                  ✎
                </button>
              </>
            ) : (
              <span className="text-gray-400 text-sm">Klik untuk upload foto</span>
            )}
          </div>

          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
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

export default DaftarBerita;
