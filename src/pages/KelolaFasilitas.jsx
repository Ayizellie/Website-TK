import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import ListFasilitas from "../components/admin/Fasilitas/ListFasilitas";
import DaftarFasil from "../components/admin/Fasilitas/DaftarFasil";

export default function KelolaFasilitas() {
  const [halaman, setHalaman] = useState("list");
  const [fasilitas, setFasilitas] = useState([]);
  const [selectedFasilitas, setSelectedFasilitas] = useState(null);

  const apiBase = "http://127.0.0.1:8000/api/facilities";
  const token = localStorage.getItem("token");

  // Ambil data fasilitas
  const fetchFasilitas = async () => {
  try {
    const res = await axios.get(apiBase, {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    // Ubah ini - data sudah langsung array, bukan pagination object
    const fasilitasArray = res.data?.data || [];
    setFasilitas(fasilitasArray);
  } catch (error) {
    console.error(error);
    Swal.fire(
      "Error",
      "Gagal mengambil data fasilitas dari server.",
      "error"
    );
  }
};

  useEffect(() => {
    fetchFasilitas();
  }, []);

  // Tambah fasilitas
  const handleTambah = () => {
    setSelectedFasilitas(null);
    setHalaman("form");
  };

  // Edit fasilitas
  const handleEdit = (item) => {
    setSelectedFasilitas(item);
    setHalaman("form");
  };

  // Hapus fasilitas
  const handleHapus = async (id) => {
    Swal.fire({
      title: "Yakin mau hapus?",
      text: "Data fasilitas ini akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
      customClass: {
        confirmButton: "bg-red-500 text-white px-4 py-2 rounded-md",
        cancelButton: "bg-gray-300 text-black px-4 py-2 rounded-md ml-2",
      },
      buttonsStyling: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${apiBase}/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setFasilitas((prev) => prev.filter((item) => item.id !== id));
          Swal.fire("Terhapus!", "Data fasilitas berhasil dihapus.", "success");
        } catch (error) {
          console.error(error);
          Swal.fire("Error", "Gagal menghapus data fasilitas.", "error");
        }
      }
    });
  };

  // Simpan fasilitas (tambah/edit)
  const handleSimpan = async (formData, id) => {
    try {
      if (!id) console.log("Tambah baru");
      else console.log("Edit ID:", id);

      const dataToSend = new FormData();
      const nameValue = formData.get("name");
      dataToSend.append("name", nameValue || "");

      const imageFile = formData.get("image");
      if (imageFile && imageFile.size > 0) {
        dataToSend.append("image", imageFile);
      }

      // PENTING: Tambah _method: PUT untuk update
      if (id) {
        dataToSend.append("_method", "PUT");
      }

      console.log("=== DATA YANG DIKIRIM ===");
      for (let pair of dataToSend.entries()) {
        console.log(pair[0], pair[1]);
      }

      const url = id ? `${apiBase}/${id}` : apiBase;

      console.log(`Method: POST, URL: ${url}`);

      // Selalu POST, Laravel middleware akan handle _method: PUT
      const response = await axios.post(url, dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response:", response.data);

      Swal.fire(
        "Berhasil!",
        id ? "Fasilitas berhasil diperbarui." : "Fasilitas baru berhasil ditambahkan.",
        "success"
      );
      await fetchFasilitas();
      setHalaman("list");
    } catch (error) {
      console.error("=== ERROR DETAILS ===");
      console.error("Status:", error.response?.status);
      console.error("Data:", error.response?.data);
      console.error("Message:", error.message);

      Swal.fire(
        "Error",
        error.response?.data?.message || "Gagal menyimpan data fasilitas.",
        "error"
      );
    }
  };


  return (
    <>
      {halaman === "list" && (
        <ListFasilitas
          dataFasilitas={fasilitas}
          onTambah={handleTambah}
          onEdit={handleEdit}
          onHapus={handleHapus}
        />
      )}

      {halaman === "form" && (
        <DaftarFasil
          data={selectedFasilitas}
          onSimpan={(formData) =>
            handleSimpan(formData, selectedFasilitas?.id)
          }
          onBatal={() => setHalaman("list")}
        />
      )}
    </>
  );
}
