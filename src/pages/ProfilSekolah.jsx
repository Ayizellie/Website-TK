import React from "react";
import SejarahSekolah from "../components/profilsekolah/SejarahSekolah";
import MottoVisiMisi from "../components/profilsekolah/MottoVisiMisi";
import LogoSekolah from "../components/profilsekolah/LogoSekolah";
import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";
import { HiArrowLeft } from "react-icons/hi";

const ProfilSekolah = () => {
  return (
     <main className="w-full overflow-x-hidden">
          <Navbar />
          <SejarahSekolah/>
          <MottoVisiMisi/>
          <LogoSekolah/>
          <Footer/>
      </main>
  );
};

export default ProfilSekolah;
