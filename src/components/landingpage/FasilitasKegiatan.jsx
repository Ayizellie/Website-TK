import React from "react";

const Fasilitas = () => {
  return (
    <div className="py-16 px-4 md:px-20 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-10">
          Fasilitas dan Kegiatan
        </h2>

        {/* Konten */}
        <div className="flex flex-col md:flex-row bg-blue-100 rounded-2xl shadow-md overflow-hidden text-left">
          
          {/* Gambar */}
          {/* Gambar */}
            <div className="w-full md:w-[360px] lg:w-[260px] ml-4 md:ml-6">
              <div className="border-[3px] border-blue-300 rounded-bl-[95px] rounded-br-[95px] p-1 bg-white">
                <img
                  src="/images/galeri1.jpg"
                  alt="Fasilitas TK"
                  className="w-full h-full object-cover rounded-bl-[95px] rounded-br-[95px]"
                />
              </div>
            </div>

          {/* Teks */}
          <div className="md:w-3/4 flex items-center min-h-[180px] px-6 py-6 md:px-8">
            <div>
                 <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                TK Negeri 1 Sangatta Utara bukan sekadar tempat belajar, tetapi lingkungan hangat yang mendukung tumbuh kembang anak secara menyeluruh. Kami mengedepankan metode bermain sambil belajar yang menyenangkan, aman, dan sesuai tahap perkembangan anak usia dini. Dengan tenaga pendidik berpengalaman dan program pembelajaran yang dirancang untuk membentuk karakter, kemandirian, dan kecerdasan sejak dini, kami percaya bahwa setiap anak adalah bintang yang siap bersinar di masa depan.
            </p>
            </div>
          </div>
        </div>

        {/* Tombol */}
        <div className="flex justify-end mt-6">
          <a
            href="/fasilitas"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Selengkapnya &gt;&gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fasilitas;
