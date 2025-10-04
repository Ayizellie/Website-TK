import LandingPage from './pages/LandingPage';
import Berita from './pages/Berita';
import DetailBerita from './pages/DetailBerita';
import ProfilSekolah from './pages/ProfilSekolah';
import Kepengurusan from './pages/Kepengurusan';
import Kontak from './pages/Kontak';
import GaleriKegiatan from './pages/GaleriKegiatan';
import FasilitasKegiatan from './pages/FasilitasKegiatan';
import KurikulumPembelajaran from './pages/KurikulumPembelajaran';
import DashboardAdmin from './pages/DashboardAdmin';
import KelolaDataMurid from './pages/KelolaDataMurid';
import KelolaDataPegawai from './pages/KelolaDataPegawai';
import KelolaVerifikasiPendaftaran from './pages/KelolaVerifikasiPendaftaran';
import KelolaAkunAdmin from './pages/KelolaAkunAdmin';
import KelolaGaleri from './pages/KelolaGaleri';
import KelolaFasilitas from './pages/KelolaFasilitas';
import KelolaBerita from './pages/KelolaBerita';
import PPDB from './pages/PPDB';
import FormulirPendaftaran from './pages/FormulirPendaftaran';
import VerificationPage from './pages/VerificationPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  const path = window.location.pathname;

  const routes = {
    '/berita': <Berita />,
    '/detail-berita': <DetailBerita />,
    '/profil-sekolah': <ProfilSekolah />,
    '/data-kepengurusan': <Kepengurusan />,
    '/kontak': <Kontak />,
    '/galeri-kegiatan': <GaleriKegiatan />,
    '/fasilitas-kegiatan': <FasilitasKegiatan />,
    '/kurikulum-pembelajaran': <KurikulumPembelajaran />,
    '/admin/dashboard': <DashboardAdmin />,
    '/admin/datamurid': <KelolaDataMurid />,
    '/admin/datapegawai': <KelolaDataPegawai />,
    '/admin/kelolaverifikasipendaftaran': <KelolaVerifikasiPendaftaran />,
    '/admin/akunadmin': <KelolaAkunAdmin />,
    '/admin/kelolagaleri': <KelolaGaleri />,
    '/admin/kelolafasilitas': <KelolaFasilitas/>,
    '/admin/kelolaberita': <KelolaBerita/>,
    '/ppdb': <PPDB />,
    '/formulir-ppdb': <FormulirPendaftaran />,
    '/verifikasi-ppdb': <VerificationPage />,
    '/login': <LoginPage />,
    '/register': <RegisterPage />
  };

  const PageComponent = routes[path] || <LandingPage />;

  return <div className="w-full overflow-x-hidden">{PageComponent}</div>;
}

export default App;
