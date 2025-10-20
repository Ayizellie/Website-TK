import React, { useState, useEffect } from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import { FaChevronCircleRight, FaChevronCircleLeft, FaPlus, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import axios from "axios";

const DaftarPegawai = () => {
  // State untuk data dari API
  const [pegawaiData, setPegawaiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // State untuk modal
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" atau "edit"
  const [selectedPegawai, setSelectedPegawai] = useState(null);

  // State untuk form
  const [formData, setFormData] = useState({
    name: "",
    major: "",
    phone: "",
    status: "aktif",
    position: "",
  });

  // State search dan pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Token auth (sesuaikan dengan sistem auth Anda)
  const token = localStorage.getItem("token"); // Ambil dari localStorage

  // Axios instance dengan token
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  // Fetch data dari API
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/teachers");

      if (response.data && response.data.data) {
        setPegawaiData(response.data.data);
      }
      setError(null);
    } catch (err) {
      console.error("Error fetching teachers:", err);
      setError("Gagal memuat data pegawai. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Open modal untuk tambah
  const openAddModal = () => {
    setModalMode("add");
    setFormData({
      name: "",
      major: "",
      phone: "",
      status: "aktif",
      position: "",
    });
    setShowModal(true);
  };

  // Open modal untuk edit
  const openEditModal = (pegawai) => {
    setModalMode("edit");
    setSelectedPegawai(pegawai);
    setFormData({
      name: pegawai.name,
      major: pegawai.major,
      phone: pegawai.phone,
      status: pegawai.status,
      position: pegawai.position,
    });
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedPegawai(null);
    setFormData({
      name: "",
      major: "",
      phone: "",
      status: "aktif",
      position: "",
    });
  };

  // Handle submit (Add/Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      if (modalMode === "add") {
        const response = await api.post("/teachers", formData);
        setSuccess("Pegawai berhasil ditambahkan!");
        setPegawaiData([response.data.data, ...pegawaiData]);
      } else {
        const response = await api.put(`/teachers/${selectedPegawai.id}`, formData);
        setSuccess("Data pegawai berhasil diupdate!");
        setPegawaiData(
          pegawaiData.map((p) => (p.id === selectedPegawai.id ? response.data.data : p))
        );
      }

      closeModal();
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error("Error saving teacher:", err);
      const errorMsg = err.response?.data?.message || "Gagal menyimpan data pegawai.";
      setError(errorMsg);
    }
  };

  // Handle delete
  const handleDelete = async (id, name) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus ${name}?`)) {
      return;
    }

    try {
      await api.delete(`/teachers/${id}`);
      setPegawaiData(pegawaiData.filter((p) => p.id !== id));
      setSuccess("Pegawai berhasil dihapus!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error("Error deleting teacher:", err);
      setError("Gagal menghapus data pegawai.");
    }
  };

  // Filter data berdasarkan input pencarian
  const filteredData = pegawaiData.filter((pegawai) =>
    pegawai.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination data hasil pencarian
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Navigasi halaman
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Format status badge
  const getStatusBadge = (status) => {
    const statusColors = {
      aktif: "bg-green-100 text-green-800",
      tidak_aktif: "bg-red-100 text-red-800",
      cuti: "bg-yellow-100 text-yellow-800",
    };

    const statusText = {
      aktif: "Aktif",
      tidak_aktif: "Tidak Aktif",
      cuti: "Cuti",
    };

    return (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          statusColors[status] || "bg-gray-100 text-gray-800"
        }`}
      >
        {statusText[status] || status}
      </span>
    );
  };

  return (
    <NavbarSidebar>
      <div className="flex flex-col w-full min-h-screen px-4 sm:px-8 md:px-10 bg-gray-50">
        <div className="relative overflow-x-auto sm:rounded-lg">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-left text-black text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Data Pegawai TK Negeri 1 Sangatta Utara
            </h1>
            <h2 className="text-left text-gray-600 text-xs sm:text-sm font-normal">
              Management Dashboard Admin TK Negeri 1 Sangatta Utara
            </h2>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex justify-between items-center">
              <span>{success}</span>
              <button onClick={() => setSuccess(null)} className="text-green-700 hover:text-green-900">
                <FaTimes />
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex justify-between items-center">
              <span>{error}</span>
              <button onClick={() => setError(null)} className="text-red-700 hover:text-red-900">
                <FaTimes />
              </button>
            </div>
          )}

          {/* Search bar, Tambah button dan pagination */}
          <div className="flex flex-col sm:flex-row flex-wrap sm:space-y-0 items-center justify-between pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              {/* Search */}
              <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 
                      3.476l4.817 4.817a1 1 0
                      01-1.414 1.414l-4.816-4.816A6 6 0 
                      012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block w-full sm:w-72 md:w-80 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white 
                  focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Cari nama pegawai..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>

              {/* Button Tambah */}
              <button
                onClick={openAddModal}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaPlus className="text-xs" />
                <span>Tambah Pegawai</span>
              </button>
            </div>

            {/* Pagination */}
            <div className="flex justify-center sm:justify-end items-center gap-4 sm:gap-6">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`text-blue-600 hover:text-blue-800 text-xl ${
                  currentPage === 1 && "opacity-40 cursor-not-allowed"
                }`}
              >
                <FaChevronCircleLeft />
              </button>

              <span className="text-sm text-gray-600">
                Halaman {currentPage} dari {totalPages || 1}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`text-blue-600 hover:text-blue-800 text-xl ${
                  (currentPage === totalPages || totalPages === 0) &&
                  "opacity-40 cursor-not-allowed"
                }`}
              >
                <FaChevronCircleRight />
              </button>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full text-sm text-center text-black">
                <thead className="text-xs text-black bg-[#6FBFF2] bg-opacity-50 uppercase">
                  <tr>
                    <th className="px-4 sm:px-6 py-3">Nama Lengkap</th>
                    <th className="px-4 sm:px-6 py-3">Jurusan</th>
                    <th className="px-4 sm:px-6 py-3">Jabatan</th>
                    <th className="px-4 sm:px-6 py-3 hidden sm:table-cell">Status</th>
                    <th className="px-4 sm:px-6 py-3 hidden md:table-cell">Nomor HP</th>
                    <th className="px-4 sm:px-6 py-3">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 ? (
                    currentItems.map((pegawai) => (
                      <tr
                        key={pegawai.id}
                        className="bg-white border-b border-gray-200 hover:bg-gray-50"
                      >
                        <th
                          scope="row"
                          className="px-4 sm:px-6 py-4 font-medium text-black whitespace-nowrap text-left"
                        >
                          {pegawai.name}
                        </th>
                        <td className="px-4 sm:px-6 py-4">{pegawai.major}</td>
                        <td className="px-4 sm:px-6 py-4">{pegawai.position}</td>
                        <td className="px-4 sm:px-6 py-4 hidden sm:table-cell">
                          {getStatusBadge(pegawai.status)}
                        </td>
                        <td className="px-4 sm:px-6 py-4 hidden md:table-cell">
                          {pegawai.phone}
                        </td>
                        <td className="px-4 sm:px-6 py-4">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => openEditModal(pegawai)}
                              className="text-blue-600 hover:text-blue-800 text-lg"
                              title="Edit"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(pegawai.id, pegawai.name)}
                              className="text-red-600 hover:text-red-800 text-lg"
                              title="Hapus"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="text-center text-gray-500 font-medium text-sm sm:text-base py-8"
                      >
                        {searchTerm
                          ? `Tidak ada data dengan nama "${searchTerm}"`
                          : "Belum ada data pegawai."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal Add/Edit */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">
                  {modalMode === "add" ? "Tambah Pegawai Baru" : "Edit Data Pegawai"}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-xl"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Modal Body - Form */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Nama */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Masukkan nama lengkap"
                      required
                      minLength={3}
                      maxLength={100}
                    />
                  </div>

                  {/* Jurusan */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jurusan <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Contoh: Pendidikan"
                      required
                      minLength={3}
                      maxLength={100}
                    />
                  </div>

                  {/* Jabatan */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jabatan <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Contoh: Kepala Sekolah"
                      required
                      minLength={3}
                      maxLength={100}
                    />
                  </div>

                  {/* Nomor HP */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor HP <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="08123456789"
                      required
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="aktif">Aktif</option>
                      <option value="tidak_aktif">Tidak Aktif</option>
                      <option value="cuti">Cuti</option>
                    </select>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {modalMode === "add" ? "Tambah" : "Simpan Perubahan"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </NavbarSidebar>
  );
};

export default DaftarPegawai;