import React, { useEffect, useState } from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import axios from "axios";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const DaftarMurid = () => {
  const [muridData, setMuridData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // token admin
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/admission`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const diterima = res.data.filter(
          (murid) => murid.status.toLowerCase() === "diterima"
        );
        setMuridData(diterima);
      } catch (err) {
        console.error("Gagal mengambil data murid:", err);
      }
    };
    fetchData();
  }, []);

  const filteredData = muridData.filter((murid) =>
    murid.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <NavbarSidebar>
      <div className="flex flex-col w-full min-h-screen px-4 sm:px-8 md:px-10">
        <h1 className="text-left text-black text-lg sm:text-xl font-semibold mb-2">
          Data Murid Diterima TK Negeri 1 Sangatta Utara
        </h1>
        <input
          type="text"
          placeholder="Cari nama murid..."
          className="mb-4 p-2 border rounded w-full sm:w-72"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />

        <div className="flex justify-end gap-4 mb-3">
          <button onClick={handlePrev} disabled={currentPage === 1}>
            <FaChevronCircleLeft />
          </button>
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            <FaChevronCircleRight />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center text-black">
            <thead className="text-xs text-black bg-[#6FBFF2] bg-opacity-50">
              <tr>
                <th className="px-4 py-3">Nama Lengkap</th>
                <th className="px-4 py-3">Ayah / HP</th>
                <th className="px-4 py-3">Ibu / HP</th>
                <th className="px-4 py-3">Wali / HP</th>
                <th className="px-4 py-3 hidden sm:table-cell">Tanggal Lahir</th>
                <th className="px-4 py-3 hidden sm:table-cell">PAUD</th>
                <th className="px-4 py-3 hidden sm:table-cell">File KK</th>
                <th className="px-4 py-3 hidden sm:table-cell">File Akta</th>
                <th className="px-4 py-3 hidden sm:table-cell">File Foto</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((murid, i) => (
                  <tr key={i} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-4">{murid.full_name}</td>
                    <td className="px-4 py-4">
                      {murid.father_name} <br />
                      {murid.father_phone || "-"}
                    </td>
                    <td className="px-4 py-4">
                      {murid.mother_name} <br />
                      {murid.mother_phone || "-"}
                    </td>
                    <td className="px-4 py-4">
                      {murid.guardian_name || "-"} <br />
                      {murid.guardian_phone || "-"}
                    </td>
                    <td className="px-4 py-4 hidden sm:table-cell">{murid.date_of_birth}</td>
                    <td className="px-4 py-4 hidden sm:table-cell">{murid.paud || "-"}</td>
                    <td className="px-4 py-4 hidden sm:table-cell">
                      {murid.file_kk ? (
                        <a href={`${import.meta.env.VITE_STORAGE_BASE_URL}/${murid.file_kk}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                          Lihat
                        </a>
                      ) : "-"}
                    </td>
                    <td className="px-4 py-4 hidden sm:table-cell">
                      {murid.file_akta ? (
                        <a href={`${import.meta.env.VITE_STORAGE_BASE_URL}/${murid.file_akta}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                          Lihat
                        </a>
                      ) : "-"}
                    </td>
                    <td className="px-4 py-4 hidden sm:table-cell">
                      {murid.file_foto ? (
                        <a href={`${import.meta.env.VITE_STORAGE_BASE_URL}/${murid.file_foto}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                          Lihat
                        </a>
                      ) : "-"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center py-6">
                    Tidak ada murid diterima.
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

export default DaftarMurid;
