import React, { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import Swal from "sweetalert2";

const FormGaleriKegiatan = ({ data, onSimpan, onBatal }) => {
  const [galeri, setGaleri] = useState(data?.nama || "");
  const [deskripsi, setDeskripsi] = useState(data?.deskripsi || "");
  const [images, setImages] = useState(data?.foto ? [data.foto] : []);

  // Hapus foto
  const handleDelete = (index) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Foto ini akan dihapus dari galeri!",
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
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
        Swal.fire("Terhapus!", "Foto berhasil dihapus.", "success");
      }
    });
  };

  // Upload foto baru
  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newUrls = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newUrls]);
  };

  // Edit foto
  const handleEdit = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      const newImages = [...images];
      newImages[index] = newUrl;
      setImages(newImages);
    }
  };

  // Simpan galeri → **panggil onSimpan ke parent**
  const handleSave = () => {
    if (!galeri || !deskripsi || images.length === 0) {
      Swal.fire("Error", "Lengkapi semua field sebelum menyimpan!", "error");
      return;
    }

    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Galeri kegiatan ini akan disimpan dan diupload!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Simpan!",
      cancelButtonText: "Batal",
      customClass: {
        confirmButton: "bg-blue-500 text-white px-4 py-2 rounded-md",
        cancelButton: "bg-gray-300 text-black px-4 py-2 rounded-md ml-2",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // **Kirim data ke parent**
        onSimpan({
          nama: galeri,
          deskripsi,
          foto: images[0], // bisa ganti ke seluruh array jika ingin multiple foto
        });

        Swal.fire("Tersimpan!", "Galeri kegiatan berhasil disimpan.", "success");
      }
    });
  };

  return (
    <NavbarSidebar>
      <div className="pt-0 px-8 pb-8">
        <h2 className="text-left text-[#064a8c] text-xl font-medium mb-8">
          Form Pengisian Galeri Kegiatan
        </h2>

        {/* Nama Galeri */}
        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-1">
            Nama Galeri Kegiatan
          </label>
          <input
            type="text"
            value={galeri}
            onChange={(e) => setGaleri(e.target.value)}
            placeholder="Nama untuk galeri kegiatan yang akan dibuat"
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-xs"
          />
        </div>

        {/* Deskripsi */}
        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-1">
            Deskripsi Singkat
          </label>
          <input
            type="text"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            placeholder="Deskripsi singkat galeri kegiatan yang dilakukan"
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-xs"
          />
        </div>

        {/* Upload Foto */}
        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-2">
            Upload Foto Galeri Kegiatan
          </label>
          <p className="text-xs text-gray-500 mb-3">Minimal foto yang diupload adalah 1!</p>

          <div className="flex gap-3 flex-wrap">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative w-32 h-32 border border-gray-300 rounded-xl overflow-hidden flex items-center justify-center"
              >
                <img src={img} alt={`img-${index}`} className="object-cover w-full h-full" />

                {/* Tombol Hapus */}
                <button
                  onClick={() => handleDelete(index)}
                  className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow"
                >
                  <FaTrashAlt className="text-red-500" />
                </button>

                {/* Tombol Edit */}
                <label className="absolute bottom-2 left-2 bg-white p-1 rounded-full shadow cursor-pointer">
                  <FaEdit className="text-blue-500" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleEdit(index, e)}
                    className="hidden"
                  />
                </label>
              </div>
            ))}

            {/* Input Upload */}
            <label className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center cursor-pointer">
              <span className="text-gray-400 text-2xl">+</span>
              <input type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" />
            </label>
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

export default FormGaleriKegiatan;
