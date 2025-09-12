import React from "react";

const ProfilSingkat = () => {
  return (
    <div className="flex justify-center py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
        {/* Gambar dengan border & rounded kanan atas dan bawah */}
        <div className="border-[3px] border-pink-300 rounded-tr-[50px] rounded-br-[50px] p-1 w-full md:w-1/2">
          <img
            src="/images/hero-illustration.png" // Ganti sesuai path kamu
            alt="TK Negeri 1 Sangatta Utara"
            className="w-full h-auto object-cover rounded-tr-[40px] rounded-br-[40px]"
          />
        </div>

        {/* Teks dan Tombol */}
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">
              Mengapa harus TK Negeri 1 Sangatta Utara?
            </h2>
            <p className="text-gray-700 text-justify leading-relaxed mb-4">
              TK Negeri 1 Sangatta Utara bukan sekadar tempat belajar, tetapi lingkungan hangat yang mendukung tumbuh kembang anak secara menyeluruh. Kami mengajarkan mereka semangat
              sembari belajar nilai-nilai kebangsaan, akhlak, dan sosialitas.
              <br /><br />
              Pembelajaran yang modern dipadukan dengan pendidikan untuk membentuk karakter kemandirian. Di lingkungan yang aktif, kami percaya bahwa setiap anak adalah bintang yang siap
              bersinar di masa depan.
            </p>
            <p className="text-blue-600 font-bold uppercase mb-3">
              Terbaik, Mandiri, Berprestasi
            </p>
          </div>

          {/* Tombol Selengkapnya di kanan bawah */}
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition">
              Selengkapnya &gt;&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilSingkat;
