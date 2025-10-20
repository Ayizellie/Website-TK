import React, { useEffect, useState } from "react";
import { FaUserGraduate, FaChild, FaMedal } from "react-icons/fa";
import "cally";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import axios from "axios";
import Swal from "sweetalert2";

const AdminDashboard = () => {
  const [beritaList, setBeritaList] = useState([]);
  const [ppdbStatus, setPpdbStatus] = useState("open");
  const [ppdbMessage, setPpdbMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [pendaftar, setPendaftar] = useState([]);
  const [totalMurid, setTotalMurid] = useState(0);
  const [totalGuru, setTotalGuru] = useState(0);
  const totalPrestasi = 0; // tetap 0

  const BASE_URL = "http://127.0.0.1:8000/api";
  const token = localStorage.getItem("token");

  // 🔹 Ambil data guru
  const fetchGuru = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/teachers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const guruCount = Array.isArray(res.data)
        ? res.data.length
        : Array.isArray(res.data.data)
        ? res.data.data.length
        : 0;
      setTotalGuru(guruCount);
    } catch (err) {
      console.error("Gagal memuat data guru:", err);
    }
  };

  // 🔹 Ambil data pendaftar (murid)
  const fetchMurid = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/admission`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const allMurid = res.data || [];
      setPendaftar(allMurid);

      const diterimaCount = allMurid.filter((p) => p.status === "diterima")
        .length;
      setTotalMurid(diterimaCount);
    } catch (err) {
      console.error("Gagal memuat data pendaftar:", err);
    }
  };

  // 🔹 Ambil status PPDB
  const fetchPPDBStatus = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/ppdb-setting`);
      setPpdbStatus(res.data.data.status);
      setPpdbMessage(res.data.data.message || "");
    } catch (err) {
      console.error("Gagal memuat status PPDB:", err);
    }
  };

  // 🔹 Toggle status PPDB
  const handleTogglePPDB = async () => {
    const newStatus = ppdbStatus === "open" ? "closed" : "open";
    const { value: message } = await Swal.fire({
      title: `${newStatus === "open" ? "Buka" : "Tutup"} Pendaftaran PPDB?`,
      input: "textarea",
      inputLabel: "Pesan (opsional)",
      inputPlaceholder: "Masukkan pesan untuk user...",
      inputValue: ppdbMessage,
      showCancelButton: true,
      confirmButtonText: "Ya, Lanjutkan",
      cancelButtonText: "Batal",
      confirmButtonColor: newStatus === "open" ? "#10b981" : "#ef4444",
    });

    if (message !== undefined) {
      setLoading(true);
      try {
        await axios.post(
          `${BASE_URL}/ppdb-setting`,
          { status: newStatus, message: message || null },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        await fetchPPDBStatus();
        Swal.fire(
          "Berhasil!",
          `Pendaftaran PPDB telah ${
            newStatus === "open" ? "dibuka" : "ditutup"
          }.`,
          "success"
        );
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Gagal mengubah status PPDB.", "error");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/news`);
        const beritaData = res.data.data.data || [];
        setBeritaList(beritaData.slice(0, 4));
      } catch (err) {
        console.error("Gagal memuat berita:", err);
      }
    };

    fetchBerita();
    fetchPPDBStatus();
    fetchGuru(); // tetap memanggil guru
    fetchMurid(); // hanya menghitung murid diterima
  }, []);

  const cards = [
    {
      title: "Murid",
      count: totalMurid,
      label: "Murid Diterima",
      bgColor: "bg-[#F58CA2]",
      bgOpacity: "bg-opacity-50",
      icon: <FaChild className="text-2xl text-[#AC383D]" />,
    },
    {
      title: "Guru",
      count: totalGuru,
      label: "Guru Terdaftar",
      bgColor: "bg-[#6FBFF2]",
      bgOpacity: "bg-opacity-50",
      icon: <FaUserGraduate className="text-2xl text-[#2471A2]" />,
    },
    {
      title: "Prestasi",
      count: totalPrestasi,
      label: "Prestasi Sekolah",
      bgColor: "bg-[#F4C7AB]",
      bgOpacity: "bg-opacity-50",
      icon: <FaMedal className="text-2xl text-[#BF8E34]" />,
    },
  ];

  return (
    <NavbarSidebar>
      <div className="px-10 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-medium text-[#064a8c] mb-1">
              Selamat Datang
            </h1>
            <p className="text-sm font-light text-[#047DD2]">
              Management Dashboard TK Negeri 1 Sangatta Utara
            </p>
          </div>

          {/* 🔹 PPDB Status Toggle */}
          <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm p-3">
            <div className="text-right">
              <p className="text-xs font-medium text-gray-600">Status PPDB</p>
              <p
                className={`text-sm font-bold ${
                  ppdbStatus === "open" ? "text-green-600" : "text-red-600"
                }`}
              >
                {ppdbStatus === "open" ? "DIBUKA" : "DITUTUP"}
              </p>
            </div>
            <button
              onClick={handleTogglePPDB}
              disabled={loading}
              className={`px-3 py-2 rounded-lg font-medium text-white text-sm transition ${
                ppdbStatus === "open"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              } disabled:opacity-50`}
            >
              {loading ? "..." : ppdbStatus === "open" ? "Tutup" : "Buka"}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-md p-5 ${card.bgColor} ${card.bgOpacity} flex flex-col gap-2`}
          >
            <div className="font-bold text-black text-sm">{card.title}</div>
            <div className="font-normal text-black text-2xl flex items-center gap-3">
              {card.count} <span>{card.icon}</span>
            </div>
            <div className="text-sm text-black">{card.label}</div>
          </div>
        ))}
      </div>

      {/* 🔹 Calendar + Berita */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-10 pb-10">
        <div className="p-6 bg-white rounded-lg shadow-md flex items-center justify-center">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box w-full max-w-lg mx-auto text-center">
                  <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                  </svg>
                  <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                  </svg>
                  <calendar-month></calendar-month>
                </calendar-date>
              `,
            }}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold text-blue-800 mb-4">PUSAT BERITA</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {beritaList.length === 0 ? (
              <p className="text-gray-500 text-sm text-center">
                Belum ada berita.
              </p>
            ) : (
              beritaList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                >
                  <h3 className="text-blue-600 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.content}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="mt-4 text-right">
            <a
              href="/berita"
              className="text-gray-600 text-sm hover:text-blue-600 transition"
            >
              Lebih Banyak &gt;
            </a>
          </div>
        </div>
      </div>
    </NavbarSidebar>
  );
};

export default AdminDashboard;
