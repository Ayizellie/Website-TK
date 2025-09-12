import React from 'react';
import {
  FaHome, FaUserGraduate, FaUser, FaCamera, FaSchool,
  FaNewspaper, FaClipboardCheck, FaUserCog
} from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`bg-[#6FBFF2] text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'} h-screen`}>
      <div className="flex items-center justify-center h-16 border-b border-blue-700">
        <h1 className={`text-xl font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>
          LOGO
        </h1>
      </div>

      <nav className="px-2 py-4 space-y-2">
        <a href="/admin/dashboard" className="block py-2.5 px-4 rounded hover:bg-blue-700">
          {isSidebarOpen ? 'Dashboard' : <FaHome />}
        </a>
        <a href="/admin/datamurid" className="block py-2.5 px-4 rounded hover:bg-blue-700">
          {isSidebarOpen ? 'Murid' : <FaUserGraduate />}
        </a>
        <a href="/admin/datapegawai" className="block py-2.5 px-4 rounded hover:bg-blue-700">
          {isSidebarOpen ? 'Guru dan Pegawai' : <FaUser />}
        </a>
        <a href="/admin/kelolagaleri" className="block py-2.5 px-4 rounded hover:bg-blue-700">
          {isSidebarOpen ? 'Galeri Kegiatan' : <FaCamera />}
        </a>
        <a href="/admin/kelolafasilitas" className="block py-2.5 px-4 rounded hover:bg-blue-700">
          {isSidebarOpen ? 'Fasilitas Sekolah' : <FaSchool />}
        </a>
        <a href="/admin/kelolaberita" className="block py-2.5 px-4 rounded hover:bg-blue-700">
          {isSidebarOpen ? 'Manajemen Berita' : <FaNewspaper />}
        </a>
        <a href="/admin/kelolaverifikasipendaftaran" className="block py-2.5 px-4 rounded hover:bg-blue-700">
          {isSidebarOpen ? 'Verif Pendaftaran' : <FaClipboardCheck />}
        </a>
        <a href="/admin/akunadmin" className="block py-2.5 px-4 rounded hover:bg-blue-700">
          {isSidebarOpen ? 'Kelola Akun' : <FaUserCog />}
        </a>
      </nav>
    </div>
  );
};


export default Sidebar;
