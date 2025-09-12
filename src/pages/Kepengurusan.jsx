import { useState } from 'react'
import Navbar from '../components/landingpage/Navbar';
import StrukturOrganisasi from '../components/datapengurus/StrukturOrganisasi';
import DaftarPegawai from '../components/datapengurus/DaftarPegawai';
import Footer from '../components/landingpage/Footer';
import { HiArrowLeft } from "react-icons/hi";

export default function Kepengurusan() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <StrukturOrganisasi/>
      <DaftarPegawai/>
      <Footer/>
    </main>
  );
}