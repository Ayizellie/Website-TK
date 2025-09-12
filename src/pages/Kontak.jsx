import HalamanKontakk from "../components/halamankontak/HalamanKontakk"
import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";

export default function LandingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <HalamanKontakk />
      <Footer />
    </main>
  );
}