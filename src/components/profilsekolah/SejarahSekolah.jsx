import React from "react";
import { HiArrowLeft } from "react-icons/hi";

const SejarahSekolah = () => {
  return (
    <div className="w-full bg-white text-left pb-16">
      {/* Container responsif */}
      <div className="px-6 md:px-10 lg:px-20 space-y-10 mx-auto max-w-full md:max-w-3xl lg:max-w-full">
        {/* Panah kembali */}
        <a
          href="/"
          className="flex items-center text-blue-800 font-semibold mt-24"
        >
          <HiArrowLeft className="mr-2 text-3xl" />
        </a>

        {/* Judul */}
        <h1 className="text-blue-800 font-bold text-2xl mb-2 mt-6">PROFIL SEKOLAH</h1>

        {/* Bagian 1 - Putih */}
        <div className="relative flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-md p-4 lg:p-8 overflow-visible gap-6">
          <div className="relative w-full lg:w-auto lg:ml-[-40px]">
            <img
              src="/images/galeri1.jpg"
              alt="Foto Sejarah 1"
              className="w-full lg:w-[480px] h-[300px] object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="flex-1 text-left">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Sejarah sekolah</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              TK Negeri 1 Sangatta Utara adalah lembaga pendidikan anak usia dini yang
              berkomitmen tinggi dalam membentuk karakter dan kecerdasan anak-anak melalui
              pendekatan bermain sambil belajar. Visi kami adalah menyiapkan generasi yang
              cerdas, kreatif, dan berakhlak mulia.
            </p>
            <p className="text-gray-700 text-base mt-3 leading-relaxed">
              Fasilitas yang kami sediakan lengkap dan modern, menunjang tumbuh kembang anak
              secara optimal.
            </p>
          </div>
        </div>

        {/* Bagian 2 - Biru */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center bg-blue-100 rounded-2xl shadow-md p-4 lg:p-8 overflow-visible gap-6">
          <div className="relative w-full lg:w-auto lg:mr-[-40px]">
            <img
              src="/images/galeri1.jpg"
              alt="Foto Sejarah 2"
              className="w-full lg:w-[480px] h-[300px] object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="flex-1 text-left">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Sejarah sekolah</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              TK Negeri 1 Sangatta Utara telah berkembang menjadi sekolah favorit bagi
              masyarakat sekitar. Kami terus berinovasi untuk menciptakan suasana belajar
              yang menyenangkan dan membangun karakter anak sejak dini.
            </p>
            <p className="text-gray-700 text-base mt-3 leading-relaxed">
              Sekolah kami juga aktif dalam kegiatan sosial, budaya, dan pendidikan yang
              mendukung pembelajaran holistik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SejarahSekolah;
