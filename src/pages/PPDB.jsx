import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderPPDB from "../components/ppdb/header";
import BadgeMenu from "../components/ppdb/badgemenu";
import SyaratPendaftaran from "../components/ppdb/syaratppdb";
import PendaftaranPPDB from "../components/ppdb/tahapanppdb";
import Footer from "../components/landingpage/Footer";

export default function PPDB() {
  const [selected, setSelected] = useState("persyaratan");
  const [ppdbStatus, setPpdbStatus] = useState("open");
  const [ppdbMessage, setPpdbMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPPDBStatus = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/ppdb-setting");
        if (res.data.data) {
          setPpdbStatus(res.data.data.status);
          setPpdbMessage(res.data.data.message || "");
        }
      } catch (err) {
        console.error("Error fetching PPDB status:", err.response?.data || err.message);
        setPpdbStatus("open");
      } finally {
        setLoading(false);
      }
    };

    fetchPPDBStatus();
  }, []);

  if (loading) {
    return (
      <main className="w-full overflow-x-hidden">
        <HeaderPPDB />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="text-gray-600 mt-4">Memuat status pendaftaran...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="w-full overflow-x-hidden">
      <HeaderPPDB ppdbStatus={ppdbStatus} />

      {/* Alert PPDB Ditutup */}
      {ppdbStatus === "closed" && (
        <div className="mx-4 my-6 md:mx-10 md:my-8">
          <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-800 mb-1">
                  Pendaftaran PPDB DITUTUP
                </h3>
                <p className="text-red-700">
                  {ppdbMessage || "Pendaftaran sedang tidak tersedia saat ini. Silakan hubungi sekolah untuk informasi lebih lanjut."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Badge Menu - Selalu tampil */}
      <BadgeMenu 
        selected={selected} 
        setSelected={setSelected}
        disabled={ppdbStatus === "closed"}
      />

      {/* Content - Tampil dengan overlay jika ditutup */}
      <div className={ppdbStatus === "closed" ? "relative opacity-60 pointer-events-none" : ""}>
        {selected === "persyaratan" && <SyaratPendaftaran />}
        {selected === "pendaftaran" && <PendaftaranPPDB />}
      </div>

      <Footer />
    </main>
  );
}