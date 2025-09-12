import { useState } from 'react'
import Navbar from '../components/landingpage/Navbar';
import HeroSection from '../components/landingpage/HeroSection';
import BadgeMotivasi from '../components/landingpage/BadgeMotivasi';
import ProfilSingkat from '../components/landingpage/ProfilSingkat';
import TentangKami from '../components/landingpage/TentangKami';
import GaleriKegiatan from '../components/landingpage/GaleriKegiatan';
import Fasilitas from '../components/landingpage/FasilitasKegiatan';
import Testimoni from '../components/landingpage/TestimoniOrtu';
import Lokasi from '../components/landingpage/LokasiPendidikan';
import Footer from '../components/landingpage/Footer';

export default function LandingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BadgeMotivasi/>
      <ProfilSingkat/>
      <TentangKami/>
      <GaleriKegiatan/>
      <Fasilitas/>
      <Testimoni/>
      <Lokasi/>
      <Footer/>
    </main>
  );
}