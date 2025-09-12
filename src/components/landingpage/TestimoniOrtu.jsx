import React from "react";

const Testimoni = () => {
  return (
    <div className="py-16 px-4 md:px-20 bg-white text-center">
      {/* Judul */}
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
        Bagaimana Menurut Mereka?
      </h2>
      <p className="text-sm text-blue-700 mb-10 max-w-xl mx-auto">
        Ini adalah alasan mengapa banyak orang tua memilih TK Negeri 1 Sangatta Utara sebagai tempat anak-anaknya sekolah sejak dini
      </p>

      {/* Kartu utama (atas) */}
      <div className="flex justify-center mb-8">
        <div className="bg-blue-100 max-w-sm w-full p-6 rounded-2xl shadow-md text-left min-h-[200px]">
          <div className="flex items-center gap-4 mb-3">
            <img
              src="/images/galeri1.jpg"
              alt="Alanna Be"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-blue-800">Alanna Be</h3>
              <p className="text-xs text-gray-600">Kepala Sekolah</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 italic">
            "Anak-anak sangat menyenangkan yaa"
          </p>
        </div>
      </div>

      {/* Dua kartu sejajar (responsive grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center">
        {/* Kartu 1 */}
        <div className="bg-pink-100 max-w-sm w-full p-6 rounded-2xl shadow-md text-left min-h-[200px]">
          <div className="flex items-center gap-4 mb-3">
            <img
              src="/images/galeri1.jpg"
              alt="Ibu Zellie"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-blue-800">Ibu Zellie</h3>
              <p className="text-xs text-gray-600">Orang tua dari Ananda Latte</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 italic">
            "Anak yang belajar disini pasti akan menjadi anak-anak berprestasi dan mandiri ya!"
          </p>
        </div>

        {/* Kartu 2 */}
        <div className="bg-pink-100 max-w-sm w-full p-6 rounded-2xl shadow-md text-left min-h-[200px]">
          <div className="flex items-center gap-4 mb-3">
            <img
              src="/images/galeri1.jpg"
              alt="Ibu Rina"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-blue-800">Ibu Rina</h3>
              <p className="text-xs text-gray-600">Orang tua dari Ananda Naya</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 italic">
            "Anak saya selalu semangat setiap pagi ke sekolah. Lingkungannya sangat ramah anak dan penuh kasih."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
