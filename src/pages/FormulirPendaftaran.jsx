import HeaderForm from "../components/formulir/HeaderForm";
import Formpendaftaran from "../components/formulir/formpendaftaran";
import Footer from "../components/landingpage/Footer";

export default function FormulirPendaftaran() {
  return (
    <main className="w-full overflow-x-hidden">
        <HeaderForm/>
        <Formpendaftaran/>
        <Footer />
    </main>
  );
}