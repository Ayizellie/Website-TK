import React from "react";

const pegawai = {
  pengurus: [
    {
      nama: "Elyza Martalenny, M.Pd",
      jabatan: "Kepala Sekolah",
      foto: "/images/Elyza.jpg",
    },
    {
      nama: "Wahyu Laili Syafa’ah, S.Pd",
      jabatan: "Tata Usaha/Operator ARKAS",
      foto: "/images/bu wahyu.jpeg",
    },
    {
      nama: "Ririn Maghfiroh, S.Pd., Gr",
      jabatan: "Bendahara",
      foto: "/images/Ririn.jpg",
    },
  ],
  pendidik: [
    {
      nama: "Meida Arum Tyas, S.Pd., Gr",
      jabatan: "Guru Kelas A1",
      foto: "/images/Meida.jpg",
    },
    {
      nama: "Melli, S.Pd",
      jabatan: "Guru Kelas A3",
      foto: "/images/Melli.jpg",
    },
    {
      nama: "Ririn Maghfiroh, S.Pd., Gr",
      jabatan: "Guru Kelas B1",
      foto: "/images/Ririn.jpg",
    },
    {
      nama: "Yessica Simflensia Sihotang, S.Pd",
      jabatan: "Guru Kelas B1 dan IMTAQ KRISTEN",
      foto: "/images/Yessica.jpg",
    },
    {
      nama: "Usna Majid, M.Pd",
      jabatan: "Guru Kelas B2",
      foto: "/images/Usna.jpg",
    },
    {
      nama: "Susilowati, S.Pd",
      jabatan: "Guru Kelompok B2",
      foto: "/images/Susilowati.jpg",
    },
    {
      nama: "Agustina Dewi Rakhmawati M.Pd",
      jabatan: "Guru Kelas B3",
      foto: "/images/Dewi.jpg",
    },
    {
      nama: "Masyitta, S.Pd",
      jabatan: "Guru Kelas B3",
      foto: "/images/Masyitta.jpg",
    },
    {
      nama: "Marpuah, S.H",
      jabatan: "Guru Kelas A2 dan IMTAQ ISLAM",
      foto: "/images/Marpuah.jpg",
    },

  ],
};

const DaftarPegawai = () => {
  const renderGrid = (list) => (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {list.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={item.foto}
            alt={item.nama}
            className="w-32 h-32 object-cover rounded-full shadow-md border"
          />
          <div className="bg-white shadow-xl text-blue-900 font-semibold px-4 py-1 rounded-lg mt-3 text-center text-sm">
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
        <h2 className="text-2xl font-bold text-[#047DD2] mb-16 text-center">TENAGA KEPENDIDIKAN</h2>
        {renderGrid(pegawai.pengurus)}
      </div>

      {/* Bagian Tenaga Pendidik */}
      <div>
        <h2 className="text-2xl font-bold text-[#047DD2] mb-16 mt-20 text-center">GURU KELAS</h2>
        {renderGrid(pegawai.pendidik)}
      </div>
    </section>
  );
};

export default DaftarPegawai;
