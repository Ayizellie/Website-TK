import React from "react";

const MottoVisiMisi = () => {
  return (
    <section className="space-y-6 mt-10 px-6 md:px-10 lg:px-20 max-w-full md:max-w-4xl lg:max-w-full mx-auto">
      {/* Motto */}
      <div>
        <h3 className="text-blue-800 font-bold text-2xl mb-6">MOTTO KAMI</h3>
        <div className="bg-pink-100 px-4 py-10 rounded-xl shadow">
          <p className="text-gray-700 text-base text-center font-semibold">“Terbaik, Mandiri, Berprestasi”</p>
        </div>
      </div>

      {/* Visi */}
      <div>
        <h3 className="text-blue-800 font-bold text-2xl mb-6">VISI</h3>
        <div className="bg-pink-100 px-4 py-20 rounded-xl shadow">
          <p className="text-gray-700 text-base text-center font-semibold">
            “Menjadi taman kanak-kanak unggul dan ramah anak dalam membentuk karakter sejak dini”
          </p>
        </div>
      </div>

      {/* Misi */}
      <div>
        <h3 className="text-blue-800 font-bold text-2xl mb-6">MISI</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow text-base text-gray-700">
            1. Menanamkan nilai-nilai agama sesuai dengan agama dan keyakinan yang dianut
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-base text-gray-700">
            2. Meningkatkan ketaqwaan sesuai agama yang dianutnya.
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-base text-gray-700">
            3. Mengembangkan serta menerapkan budaya local
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-base text-gray-700">
            4. Menanamkan nilai-nilai Bhineka Tunggal Ika dalam semua aspek
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-base text-gray-700">
            5. Mengembangkan dan mendorong kecerdasan anak yang unik dan mandiri dengan mengoptimalkan kegitan yang aktif kreatif dan menyenangkan sesuai dengan bakat dan tingkat perkembangan anak
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-base text-gray-700">
            6. Mengembangkan perilaku yang bertanggung jawab dan mandiri.
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-base text-gray-700">
            7. Menanakan sikap sportivitas dan mengakui kelebihan lawan
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-base text-gray-700">
            8. Mengembangkan kemampuan dasar anak melalui kegiatan pengembangan aspek bahasa, kognitif, fisik motorik dan seni.
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-base text-gray-700">
            9. Menyelenggarakan layanan dan pengelolaan PAUD yang profesional, akuntabel dan berdaya saing
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-base text-gray-700">
            10. Menanamkan sikap sosial  semua warga TK Negeri 1 Kecamatan Sangatta Utara  
          </div>
        </div>
      </div>
    </section>
  );
};

export default MottoVisiMisi;
