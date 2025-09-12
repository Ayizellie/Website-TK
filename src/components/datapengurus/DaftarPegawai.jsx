import React from "react";

const pegawai = {
  pengurus: [
    {
      nama: "Elya Martalenny, S.Pd",
      jabatan: "Kepala Lembaga",
      foto: "/images/profil.png",
    },
    {
      nama: "Wahyu Laili Syafa’ah, S.Pd",
      jabatan: "Tata Usaha",
      foto: "/images/profil.png",
    },
    {
      nama: "Ririn Maghfira, S.Pd, Gr.",
      jabatan: "Bendahara",
      foto: "/images/profil.png",
    },
  ],
  pendidik: [
    {
      nama: "Maida Aulia Tissa, S.Pd, Gr.",
      jabatan: "Guru Kelompok A",
      foto: "/images/profil.png",
    },
    {
      nama: "Yesica Simfonesia Sitohang, S.Pd.",
      jabatan: "Guru IMTAQ Kristen",
      foto: "/images/profil.png",
    },
    {
      nama: "Marpuah, S.H",
      jabatan: "Guru IMTAQ Islam",
      foto: "/images/profil.png",
    },
    {
      nama: "Agustina Dwi Rahmawati, S.Pd",
      jabatan: "Guru Kelompok B3",
      foto: "/images/profil.png",
    },
    {
      nama: "Nina Mufidah, S.Pd",
      jabatan: "Guru Kelompok B2",
      foto: "/images/profil.png",
    },
    {
      nama: "Rika Meilinda, S.Pd",
      jabatan: "Guru Kelompok B1",
      foto: "/images/profil.png",
    },
    {
      nama: "Risma Mufidah",
      jabatan: "Asisten Guru",
      foto: "/images/profil.png",
    },
    {
      nama: "Ririn Maghfira, S.Pd, Gr.",
      jabatan: "Guru IMTAQ Islam",
      foto: "/images/profil.png",
    },
    {
      nama: "Maya Sari",
      jabatan: "Asisten Guru",
      foto: "/images/profil.png",
    },
    {
      nama: "Mutia",
      jabatan: "Guru Kelompok B1",
      foto: "/images/profil.png",
    },
  ],
};

const DaftarPegawai = () => {
  const renderGrid = (list) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {list.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={item.foto}
            alt={item.nama}
            className="w-32 h-32 object-cover rounded-full shadow-md border"
          />
          <div className="bg-blue-100 text-blue-900 font-semibold px-4 py-1 rounded-lg mt-3 text-center text-sm">
            {item.nama}
          </div>
          <p className="mt-1 text-sm text-gray-700 text-center">{item.jabatan}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="px-6 md:px-20 py-12 space-y-14">
      {/* Bagian Pengurus */}
      <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-16 text-center">PENGURUS</h2>
        {renderGrid(pegawai.pengurus)}
      </div>

      {/* Bagian Tenaga Pendidik */}
      <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-16 mt-20 text-center">TENAGA PENDIDIK</h2>
        {renderGrid(pegawai.pendidik)}
      </div>
    </section>
  );
};

export default DaftarPegawai;
