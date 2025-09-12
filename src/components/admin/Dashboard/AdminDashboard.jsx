// src/pages/AdminDashboard.jsx
import React, { useState } from "react";
import { FaUserGraduate, FaChild, FaMedal } from "react-icons/fa";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";

const AdminDashboard = () => {
  const cards = [
    {
      title: "Murid",
      count: "110",
      label: "Murid Terdaftar",
      bgColor: "bg-[#F58CA2]",
      bgOpacity: "bg-opacity-50",
      icon: <FaChild className="text-2xl text-[#AC383D]" />,
    },
    {
      title: "Guru",
      count: "12",
      label: "Guru Terdaftar",
      bgColor: "bg-[#6FBFF2]",
      bgOpacity: "bg-opacity-50",
      icon: <FaUserGraduate className="text-2xl text-[#2471A2]" />,
    },
    {
      title: "Prestasi",
      count: "10",
      label: "Prestasi Sekolah",
      bgColor: "bg-[#F4C7AB]",
      bgOpacity: "bg-opacity-50",
      icon: <FaMedal className="text-2xl text-[#BF8E34]" />,
    },
  ];

  return (
    <NavbarSidebar>
      <div className="px-10 pb-2">
        <h1 className="text-xl font-medium text-[#064a8c] mb-1">Selamat Datang</h1>
        <p className="text-sm font-light text-[#047DD2]">Management Dashboard TK Negeri 1 Sangatta Utara</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {cards.map((card, idx) => (
          <div key={idx} className={`rounded-2xl shadow-md p-5 ${card.bgColor} ${card.bgOpacity} flex flex-col gap-2`}>
            <div className="font-bold text-black text-sm">{card.title}</div>
            <div className="font-normal text-black text-2xl flex items-center gap-3">
              {card.count} <span>{card.icon}</span>
            </div>
            <div className="text-sm text-black">{card.label}</div>
          </div>
        ))}
      </div>
    </NavbarSidebar>
  );
};

export default AdminDashboard;
