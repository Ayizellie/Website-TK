import DaftarGaleri from "../components/galerifasil/DaftarGaleri";
import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";

export default function LandingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <DaftarGaleri />
      <Footer />
    </main>
  );
}