import React, { useState, useEffect } from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import Swal from "sweetalert2";
import axios from "axios";

const FormGaleriKegiatan = ({ data, onSimpan, onBatal }) => {
  const [namaGaleri, setNamaGaleri] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [photos, setPhotos] = useState([]);
  const token = localStorage.getItem("token");
  const API_URL = `${import.meta.env.VITE_API_BASE_URL}/gallery`;

  // jika edit → isi field
  useEffect(() => {
    if (data) {
      setNamaGaleri(data.name || "");
      setDeskripsi(data.description || "");

      if (data.activity_date) {
        let formattedDate = data.activity_date;

        // Kalau backend kirim format dd/mm/yyyy → ubah ke yyyy-mm-dd
        if (formattedDate.includes("/")) {
          const [d, m, y] = formattedDate.split("/");
          formattedDate = `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
        } else if (formattedDate.includes("-")) {
          // kalau udah yyyy-mm-dd biarkan saja
          const parts = formattedDate.split("-");
          if (parts[0].length !== 4) {
            // berarti formatnya dd-mm-yyyy → ubah
            const [d, m, y] = parts;
            formattedDate = `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
          }
        }

        setTanggal(formattedDate);
      } else {
        setTanggal("");
      }

      setPhotos(
        data.images?.map((img) => ({
          file: null,
          preview: `${import.meta.env.VITE_STORAGE_BASE_URL}/${img.path}`,
          path: img.path,
        })) || []
      );
    }
  }, [data]);

  const handleAddPhotoBox = () => setPhotos([...photos, { file: null, preview: null }]);

  const handlePhotoChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const newPhotos = [...photos];
    newPhotos[index] = { file, preview: URL.createObjectURL(file) };
    setPhotos(newPhotos);
  };

  const handleRemovePhoto = (index) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!namaGaleri || !deskripsi || !tanggal) {
      Swal.fire("Error", "Lengkapi semua field!", "error");
      return;
    }

    try {
      let galleryId;

      if (data) {
        // Edit
        await axios.put(
          `${API_URL}/${data.id}`,
          { name: namaGaleri, description: deskripsi, activity_date: tanggal },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        galleryId = data.id;
      } else {
        // Create
        const res = await axios.post(
          API_URL,
          { name: namaGaleri, description: deskripsi, activity_date: tanggal },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        galleryId = res.data.data.id;
      }

      // Upload foto baru
      const uploadedPhotos = [];
      for (const photo of photos) {
        if (photo.file) {
          const formData = new FormData();
          formData.append("media", photo.file);
          const upload = await axios.post(`${API_URL}/${galleryId}/media`, formData, {
            headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
          });
          uploadedPhotos.push(upload.data);
        } else if (photo.path) {
          uploadedPhotos.push({ path: photo.path });
        }
      }

      // Kirim data ke parent
      onSimpan({ id: galleryId, name: namaGaleri, description: deskripsi, activity_date: tanggal }, uploadedPhotos);

      // reset
      setNamaGaleri("");
      setDeskripsi("");
      setTanggal("");
      setPhotos([]);
      } catch (err) {
      console.error("=== ERROR DETAIL ===");
      if (err.response) {
        console.error("Status:", err.response.status);
        console.error("Data:", err.response.data);
        Swal.fire(
          "Error",
          `Gagal menyimpan galeri: ${JSON.stringify(err.response.data)}`,
          "error"
        );
      } else {
        console.error("Error:", err.message);
        Swal.fire("Error", "Gagal menyimpan galeri (network error).", "error");
      }
    }
  };

  return (
    <NavbarSidebar>
      <div className="pt-0 px-8 pb-8">
        <h2 className="text-left text-[#064a8c] text-xl font-medium mb-8">
          {data ? "Edit Galeri" : "Form Galeri Kegiatan"}
        </h2>

        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-1">Nama Galeri</label>
          <input
            type="text"
            value={namaGaleri}
            onChange={(e) => setNamaGaleri(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-1">Deskripsi</label>
          <textarea
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-1">Tanggal Kegiatan</label>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-[#047DD2] font-medium mb-2">Upload Foto Galeri</label>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="relative w-28 h-28 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center cursor-pointer hover:border-blue-400"
                onClick={() => document.getElementById(`fileInput-${idx}`).click()}
              >
                {photo.preview ? (
                  <>
                    <img src={photo.preview} alt={`Preview ${idx}`} className="w-full h-full object-cover rounded-xl" />
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleRemovePhoto(idx); }}
                      className="absolute top-1 right-1 bg-white text-red-500 font-bold rounded-full px-1 shadow"
                    >
                      ✕
                    </button>
                  </>
                ) : (
                  <span className="text-gray-400 text-xs text-center px-2">Klik untuk pilih foto</span>
                )}
                <input type="file" id={`fileInput-${idx}`} accept="image/*" className="hidden" onChange={(e) => handlePhotoChange(e, idx)} />
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddPhotoBox}
              className="w-28 h-28 border-2 border-dashed border-blue-300 rounded-xl flex flex-col items-center justify-center text-blue-400 hover:bg-blue-50"
            >
              <span className="text-2xl">+</span>
              <span className="text-xs mt-1">Tambah</span>
            </button>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={onBatal} className="px-6 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400">Batal</button>
          <button onClick={handleSubmit} className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Simpan</button>
        </div>
      </div>
    </NavbarSidebar>
  );
};

export default FormGaleriKegiatan;
