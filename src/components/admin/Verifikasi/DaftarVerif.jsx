import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import { 
  FaClipboardCheck, 
  FaCheckDouble, 
  FaClock, 
  FaChevronCircleRight, 
  FaChevronCircleLeft 
} from "react-icons/fa";
import { FaRectangleXmark } from "react-icons/fa6";
import Swal from "sweetalert2";

const API_URL = "http://127.0.0.1:8000";

const DaftarVerif = () => {
  const [pendaftar, setPendaftar] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTab, setActiveTab] = useState("Semua");
  const [openDetailId, setOpenDetailId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/admission`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPendaftar(res.data || []);
      setFiltered(res.data || []);
    } catch (err) {
      console.error("Gagal mengambil data pendaftar:", err);
      if (err.response?.status === 403) {
        Swal.fire({
          icon: "error",
          title: "Akses Ditolak",
          text: "Hanya admin yang bisa melihat daftar pendaftar",
        });
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applyFilter = (tab, search) => {
    let data = [...pendaftar];
    if (tab !== "Semua") data = data.filter(p => p.status?.toLowerCase() === tab.toLowerCase());
    if (search) data = data.filter(p => p.full_name.toLowerCase().includes(search.toLowerCase()));
    setFiltered(data);
    setCurrentPage(1);
  };

  const handleTab = (tab) => {
    setActiveTab(tab);
    applyFilter(tab, searchTerm);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    applyFilter(activeTab, value);
  };

  const toggleDetail = (id) => {
    setOpenDetailId(prev => (prev === id ? null : id));
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(
        `${API_URL}/api/admission/${id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      // update langsung di frontend
      setFiltered(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
      setPendaftar(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: `Status pendaftar diubah menjadi "${newStatus}"`,
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error("Gagal update status:", err);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Tidak dapat mengubah status. Coba lagi nanti.",
      });
    }
  };

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const cards = [
    {
      title: "Terverifikasi",
      count: pendaftar.length,
      bgColor: "bg-[#6FBFF2]",
      icon: <FaClipboardCheck className="text-xl text-[#2471A2]" />,
    },
    {
      title: "Diterima",
      count: pendaftar.filter(p => p.status === "diterima").length,
      bgColor: "bg-[#D6EEDD]",
      icon: <FaCheckDouble className="text-xl text-[#378969]" />,
    },
    {
      title: "Pending",
      count: pendaftar.filter(p => p.status === "pending").length,
      bgColor: "bg-[#F5EBD6]",
      icon: <FaClock className="text-2xl text-[#BF8E34]" />,
    },
    {
      title: "Ditolak",
      count: pendaftar.filter(p => p.status === "ditolak").length,
      bgColor: "bg-[#FFD4D9]",
      icon: <FaRectangleXmark className="text-2xl text-[#AC383D]" />,
    },
  ];

  return (
    <NavbarSidebar>
      <div className="flex-1 w-full min-h-screen px-10">
        <div className="relative overflow-x-auto sm:rounded-lg">
          <h1 className="text-left text-black text-xl font-semibold mb-5">
            Verifikasi Pendaftaran
          </h1>

          {/* Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {cards.map((card, idx) => (
              <div key={idx} className={`rounded-2xl shadow-md p-4 ${card.bgColor} flex flex-col gap-2`}>
                <div className="font-bold text-black text-sm">{card.title}</div>
                <div className="font-normal text-black text-2xl flex items-center justify-between">
                  <span>{card.count}</span> {card.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-10 border-b mb-3">
            {["Semua", "Terverifikasi", "Diterima", "Pending", "Ditolak"].map(tab => (
              <button
                key={tab}
                onClick={() => handleTab(tab)}
                className={`pb-2 text-sm font-semibold transition ${
                  activeTab === tab
                    ? "text-black border-b-2 border-[#6FBFF2]"
                    : "text-gray-600 hover:text-black border-b-2 border-transparent hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search + Pagination */}
          <div className="flex justify-between items-center pb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              className="block p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
              placeholder="Cari nama pendaftar..."
            />
            <div className="flex justify-end items-center gap-6">
              <button onClick={handlePrev} disabled={currentPage === 1}>
                <FaChevronCircleLeft />
              </button>
              <span>{currentPage} / {totalPages || 1}</span>
              <button onClick={handleNext} disabled={currentPage === totalPages || totalPages === 0}>
                <FaChevronCircleRight />
              </button>
            </div>
          </div>

          {/* Tabel */}
          <table className="w-full text-sm text-center text-black">
            <thead className="text-xs text-black bg-[#6FBFF2] bg-opacity-50">
              <tr>
                <th className="px-6 py-3">Nama Lengkap</th>
                <th className="px-6 py-3">Nama Ayah</th>
                <th className="px-6 py-3">Tanggal Lahir</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? currentItems.map(item => (
                <React.Fragment key={item.id}>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-black">{item.full_name}</td>
                    <td className="px-6 py-4">{item.father_name}</td>
                    <td className="px-6 py-4">{item.date_of_birth}</td>
                    <td className="px-6 py-4">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`border rounded px-2 py-1 text-sm font-medium transition duration-200 ${
                          item.status === "diterima"
                            ? "bg-green-100 text-green-700 border-green-300"
                            : item.status === "ditolak"
                            ? "bg-red-100 text-red-700 border-red-300"
                            : "bg-yellow-100 text-yellow-700 border-yellow-300"
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="diterima">Diterima</option>
                        <option value="ditolak">Ditolak</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleDetail(item.id)}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {openDetailId === item.id ? "Tutup" : "Lihat"}
                      </button>
                    </td>
                  </tr>

                  {/* Detail */}
                  {openDetailId === item.id && (
                    <tr className="bg-gray-50 border-b">
                      <td colSpan="5" className="p-4 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <p><strong>Tempat Lahir:</strong> {item.place_of_birth}</p>
                          <p><strong>Jenis Kelamin:</strong> {item.gender}</p>
                          <p><strong>Alamat:</strong> {item.address}</p>
                          <p><strong>Agama:</strong> {item.religion}</p>
                          <p><strong>Nama Ibu:</strong> {item.mother_name}</p>
                          <p><strong>Nama Wali:</strong> {item.guardian_name || "-"}</p>
                          <p><strong>No. Wali:</strong> {item.guardian_phone || "-"}</p>
                          <p><strong>PAUD:</strong> {item.paud || "-"}</p>
                          <div className="flex gap-4 mt-2">
                            {item.file_kk && <a href={`${API_URL}/storage/${item.file_kk}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">Lihat KK</a>}
                            {item.file_akta && <a href={`${API_URL}/storage/${item.file_akta}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">Lihat Akta</a>}
                            {item.file_foto && <a href={`${API_URL}/storage/${item.file_foto}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">Lihat Foto</a>}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              )) : (
                <tr>
                  <td colSpan="5" className="py-6 text-gray-500">
                    Belum ada data pendaftar
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </NavbarSidebar>
  );
};

export default DaftarVerif;
