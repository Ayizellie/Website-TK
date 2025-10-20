import React from "react";
import { HiArrowLeft } from "react-icons/hi";

// Data ekstrakurikuler
const ekstrakurikulerData = [
  {
    nama: "Mengaji dan Tahfiz",
    tujuan: "Menumbuhkan kecintaan terhadap Al-Qur'an sejak dini, melatih disiplin dalam ibadah, dan mengembangkan kemampuan hafalan sederhana.",
    integrasi: "Menumbuhkan kecintaan terhadap Al-Qur'an sejak dini, melatih disiplin dalam ibadah, dan mengembangkan kemampuan hafalan sederhana."
  },
  {
    nama: "Tari Tradisional",
    tujuan: "Melestarikan budaya lokal, melatih kelenturan fisik, koordinasi gerak, dan membangun kepercayaan diri untuk tampil di depan umum.",
    integrasi:"Anak-anak belajar kewargaan dengan mengenal dan bangga terhadap budaya tari daerah sendiri, sekaligus mengembangkan kesehatan melalui latihan kekuatan otot, keseimbangan, dan koordinasi fisik-motorik. Selain itu, mereka menstimulasi kreativitas dengan mengekspresikan diri lewat gerakan tari, serta melatih kolaborasi dengan bergerak serempak dan bekerja sama dalam formasi kelompok."
  },
  {
    nama: "Angklung",
    tujuan: "Mengenalkan alat musik tradisional, melatih ketepatan nada, irama, serta mengajarkan pentingnya kerja sama tim dalam menghasilkan harmoni.",
    integrasi: "Anak-anak belajar kolaborasi dengan bekerja sama karena setiap anak memegang satu nada sehingga tidak bisa bermain sendiri. Mereka juga melatih penalaran kritis dengan memahami kapan giliran membunyikan nada dalam irama yang kompleks, mengembangkan kreativitas melalui penciptaan variasi irama sederhana dalam kelompok, serta menumbuhkan kemandirian dengan bertanggung jawab memegang dan merawat alat musiknya sendiri."
  },
  {
    nama: "Mewarnai",
    tujuan: "Mengembangkan imajinasi dan kreativitas anak, melatih motorik halus untuk persiapan menulis, serta menumbuhkan kesabaran dan ketekunan.",
    integrasi: "Anak-anak mengembangkan kreativitas dengan memilih kombinasi warna yang unik dan orisinal, menumbuhkan kemandirian dengan menyelesaikan gambar atau pola hingga tuntas dengan fokus dan ketekunan, serta melatih kesehatan melalui kekuatan jari dan koordinasi mata-tangan (motorik halus). Mereka juga meningkatkan komunikasi dengan menceritakan alasan di balik pilihan warna atau hasil karyanya."
  },
  {
    nama: "Pramuka",
    tujuan: "MMenanamkan nilai-nilai kepemimpinan sederhana, kedisiplinan, kemandirian, dan cinta tanah air melalui kegiatan luar ruangan yang aktif.",
    integrasi: "Anak-anak dikembangkan dalam 8 dimensi profil lulusan, yaitu beriman melalui kegiatan doa pagi, sehat dengan aktivitas gerak jalan, mandiri dengan kemampuan memakai syal sendiri, kolaboratif melalui permainan tali-temali sederhana, kreatif lewat menyanyi, komunikasi dengan menceritakan pengalaman, kewargaan dengan menghormati bendera, serta bernalar kritis dengan memecahkan kode sandi."
  },
];

// Komponen card ekstrakurikuler
const EkstrakurikulerCard = ({ nama, tujuan, integrasi }) => (
  <div className="flex-1 bg-[#3C80C7] bg-opacity-25 rounded-2xl shadow-md p-6">
    <h3 className="text-black font-semibold text-lg mb-2">{nama}</h3>
    <p className="text-black text-sm mb-1"><strong>Tujuan:</strong> {tujuan}</p>
    <p className="text-black text-sm"><strong>Integrasi:</strong> {integrasi}</p>
  </div>
);

const Kurikulum = () => {
    return(
        <div className="w-full bg-white pb-16">
            <div className="px-4 sm:px-6 lg:px-20 space-y-10 mx-auto max-w-screen-xl">
                <a 
                  href="/"
                  className="flex items-center text-blue-800 font-semibold mt-24"
                >
                  <HiArrowLeft className="mr-2 text-3xl" />
                </a>
            </div>
            <div className="max-w-6xl mx-auto px-4 mb-20">
                <h1 className="text-center text-2xl md:text-5xl font-extrabold text-[#047DD2] mb-4"> Kurikulum</h1>
                <h2 className="text-center text-md md:text-base text-[#4B5563] mb-20">
                  Kurikulum yang digunakan pada sekolah TK Negeri 1 Sangatta Utara
                </h2>

                <img 
                    src="/images/motto.png" 
                    alt="Motto Sekolah" 
                    className="absolute top-28 right-10 w-32 md:w-22 lg:w-30"
                />

                <div className="bg-[#3C80C7] bg-opacity-25 px-4 py-40 rounded-xl shadow-xl mb-20">
                    <p className="text-black text-base text-center font-normal">
                        Kurikulum di TK Negeri 1 Kecamatan Sangatta Utara dirancang agar dinamis, fleksibel, dan responsif. Ini berarti kurikulumnya siap 
                        menyesuaikan diri dengan cepat terhadap perkembangan teknologi dan kebutuhan masyarakat yang berubah. Selain itu, kurikulum ini sangat 
                        responsif terhadap karakteristik unik dan kebutuhan belajar individual setiap anak, memastikan proses belajar yang personal. Untuk menjaga 
                        relevansi pengajaran, kurikulum ini juga menjalani pembaruan berkelanjutan yang didasarkan pada hasil evaluasi rutin.
                    </p>
                </div>

                <h3 className="text-[#064A8C] font-bold text-5xl mb-6">
                    Pembelajaran
                </h3>
                <h2 className="text-black font-normal text-base mb-8">
                    3 bentuk yang terintegrasi untuk pengalaman belajar TK Negeri 1 Sangatta Utara
                </h2>
                
                {/* Intrakurikuler */}
                <div className="relative flex flex-col lg:flex-row items-center gap-10 px-10 py-10">
                    <div className="w-full lg:w-auto lg:ml-[-40px]">
                        <img src="/images/galeri6.jpg" alt="Foto Kurikulum 1" className="w-full lg:w-[480px] h-[300px] object-cover rounded-xl shadow-lg"/>
                    </div>
                    <div className="flex-1 text-left bg-[#3C80C7] bg-opacity-25 rounded-2xl shadow-md p-4 lg:p-8">
                        <p className="text-sm font-semibold text-black px-5 mb-3">Pembelajaran Intrakurikuler</p>
                        <p className="text-sm font-normal text-black px-5 mb-3">
                            Pembelajaran intrakurikuler PAUD hadir dengan konsep “Bermain Bermakna”, supaya anak belajar sambil 
                            bersenang-senang dan merasakan pengalaman yang bermakna dari lingkungan sekitar. Anak diajak eksplorasi, 
                            bermain, bercerita, dan berinteraksi, sambil mengembangkan kemampuan agama & moral, fisik-motorik, kognitif, 
                            bahasa, sosial-emosional, dan seni. Semua kegiatan dilakukan secara bertahap: memahami, mengaplikasi, dan merefleksi, 
                            sehingga belajar terasa menyenangkan, kreatif, dan dekat dengan kehidupan sehari-hari mereka.
                        </p>
                    </div>
                </div>

                {/* Proyek */}
                <div className="relative flex flex-col lg:flex-row-reverse items-center gap-10 px-10 py-10">
                    <div className="w-full lg:w-auto lg:mr-[-40px]">
                        <img src="/images/galeri5.jpg" alt="Foto Kurikulum 2" className="w-full lg:w-[480px] h-[300px] object-cover rounded-xl shadow-lg"/>
                    </div>
                    <div className="flex-1 text-left bg-[#3C80C7] bg-opacity-25 rounded-2xl shadow-md p-4 lg:p-8">
                        <p className="text-sm font-semibold text-black px-5 mb-3">Pembelajaran Proyek</p>
                        <p className="text-sm font-normal text-black px-5 mb-3">
                            Pembelajaran proyek membantu anak belajar sambil mengeksplorasi masalah dan pertanyaan dari kehidupan sehari-hari. 
                            Anak diajak melalui tahapan memahami, mengaplikasi, dan merefleksi, sambil bekerja sama dengan teman, orang tua, dan 
                            komunitas, serta memanfaatkan teknologi digital sesuai usia. Dengan begitu, mereka belajar kreatif, kolaboratif, dan 
                            kontekstual, sekaligus mengembangkan berbagai kemampuan yang mendukung profil pelajar Pancasila.
                        </p>
                    </div>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center gap-10 px-10 py-10"> 
                    <div className="w-full lg:w-auto lg:ml-[-40px]"> 
                        <img src="/images/galeri8.jpg" alt="Foto Kurikulum 3" className="w-full lg:w-[480px] h-[300px] object-cover rounded-xl shadow-lg"/> 
                        </div> 
                        <div className="flex-1 text-left bg-[#3C80C7] bg-opacity-25 rounded-2xl shadow-md p-4 lg:p-8"> 
                            <p className="text-sm font-semibold text-black px-5 mb-3"> Pembelajaran Ekstrakurikuler </p> 
                            <p className="text-sm font-normal text-black px-5 mb-3"> 
                                Ekstrakurikuler dirancang agar anak bisa memilih kegiatan sesuai minatnya tanpa paksaan, dengan pendampingan guru berpengalaman. 
                                Semua kegiatan tetap menyenangkan dan bermakna, sekaligus membantu anak mengembangkan bakat dan kemampuan khusus yang mendukung profil pelajar Pancasila. 
                            </p>
                        </div> 
                    </div>

                {/* Ekstrakurikuler */}
                <div className="relative px-10 py-10">
                    <h3 className="text-[#064A8C] font-bold text-3xl mb-6">Ekstrakurikuler</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ekstrakurikulerData.map((item, index) => (
                            <EkstrakurikulerCard
                                key={index}
                                nama={item.nama}
                                tujuan={item.tujuan}
                                integrasi={item.integrasi}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    ); 
};

export default Kurikulum;
