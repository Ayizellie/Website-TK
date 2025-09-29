import { useState } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiClipboardList } from "react-icons/hi";

// Reusable dropdown component
const CustomDropdown = ({ label, options, selected, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 relative">
      <label className="block mb-1 text-blue-900 font-medium">{label}</label>
      <div
        onClick={() => setOpen(!open)}
        className={`border bg-white border-gray-300 px-4 py-2 rounded-lg cursor-pointer ${
        selected ? "text-black" : "text-gray-400 italic"
        }`}
      >
        {selected || "Silakan Pilih Salah Satu"}
      </div>

      {open && (
        <div className="absolute left-0 right-0 bg-white rounded-xl shadow-md mt-1 z-10">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FormulirPendaftaran = () => {
  const [form, setForm] = useState({
    namaLengkap: "",
    alamat: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    agama: "",
    namaAyah:"",
    nomorAyah:"",
    namaIbu: "",
    nomorIbu:"",
    namaWali:"",
    nomorWali:"",
    jenjangSekolah:"",
    asalPaud:"",
    dokumenKK:null,
    dokumenAL:null,
    foto:null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl mt-6">
        <div className="bg-white shadow-md flex items-center px-4 py-2 mb-10">
            <HiClipboardList className="text-blue-700 text-2xl mr-2" />
            <h2 className="text-xl mt-2 font-bold mb-2 text-blue-700">
                Formulir Pendaftaran</h2>
        </div>

      {/* Nama */}
      <div className="mb-4">
        <label className="block mb-1 text-blue-900 font-medium">Nama Lengkap</label>
        <input
          type="text"
          name="namaLengkap"
          value={form.namaLengkap}
          onChange={handleChange}
          placeholder="Masukkan nama lengkap"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Tempat & Tanggal Lahir */}
      <div className="mb-4 flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1 text-blue-900 font-medium">Tempat Lahir</label>
          <input
            type="text"
            name="tempatLahir"
            value={form.tempatLahir}
            onChange={handleChange}
            placeholder="Masukkan tempat lahir"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="w-1/2">
          <label className="block mb-1 text-blue-900 font-medium">Tanggal Lahir</label>
          <div className="relative">
            <input
              type="date"
              name="tanggalLahir"
              value={form.tanggalLahir}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>
      </div>

      {/* Jenis Kelamin */}
      <CustomDropdown
        label="Jenis Kelamin"
        options={["Laki-laki", "Perempuan"]}
        selected={form.jenisKelamin}
        onChange={(val) => setForm((prev) => ({ ...prev, jenisKelamin: val }))}
      />

      {/* alamat */}
      <div className="mb-4">
        <label className="block mb-1 text-blue-900 font-medium">Alamat</label>
        <input
          type="text"
          name="alamat"
          value={form.alamat}
          onChange={handleChange}
          placeholder="Masukkan alamat"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Agama */}
      <CustomDropdown
        label="Agama"
        options={["Islam", "Kristen", "Katolik", "Hindu", "Buddha", "Konghucu"]}
        selected={form.agama}
        onChange={(val) => setForm((prev) => ({ ...prev, agama: val }))}
      />
      
      {/* namaAyah */}
      <div className="mb-4">
        <label className="block mb-1 text-blue-900 font-medium">Nama Ayah</label>
        <input
          type="text"
          name="namaAyah"
          value={form.namaAyah}
          onChange={handleChange}
          placeholder="Masukkan nama ayah"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <p className="text-sm text-[#AC383D] mt-1 italic">*isi dengan "-" jika tidak ada</p>
      </div>

      {/* nomorAyah */}
      <div className="mb-4">
        <label className="block mb-1 text-blue-900 font-medium">Nomor Ayah</label>
        <input
          type="text"
          name="nomorAyah"
          value={form.nomorAyah}
          onChange={handleChange}
          placeholder="Masukkan nomor (08xx-xxxx-xxxx)"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <p className="text-sm text-[#AC383D] mt-1 italic">*isi dengan "-" jika tidak ada</p>
      </div>

      {/* namaIbu */}
      <div className="mb-4">
        <label className="block mb-1 text-blue-900 font-medium">Nama Ibu</label>
        <input
          type="text"
          name="namaIbu"
          value={form.namaIbu}
          onChange={handleChange}
          placeholder="Masukkan nama ibu"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <p className="text-sm text-[#AC383D] mt-1 italic">*isi dengan "-" jika tidak ada</p>
      </div>

      {/* nomorIbu */}
      <div className="mb-4">
        <label className="block mb-1 text-blue-900 font-medium">Nomor Ibu</label>
        <input
          type="text"
          name="nomorIbu"
          value={form.nomorIbu}
          onChange={handleChange}
          placeholder="Masukkan nomor (08xx-xxxx-xxxx)"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <p className="text-sm text-[#AC383D] mt-1 italic">*isi dengan "-" jika tidak ada</p>
      </div>

      {/* namaWali */}
      <div className="mb-4">
        <label className="block mb-1 text-blue-900 font-medium">Nama Wali</label>
        <input
          type="text"
          name="namaWali"
          value={form.namaWali}
          onChange={handleChange}
          placeholder="Masukkan nama wali"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <p className="text-sm text-[#AC383D] mt-1 italic">*isi dengan "-" jika tidak ada</p>
      </div>

      {/* nomorWali */}
      <div className="mb-4">
        <label className="block mb-1 text-blue-900 font-medium">Nomor Wali</label>
        <input
          type="text"
          name="nomorWali"
          value={form.nomorWali}
          onChange={handleChange}
          placeholder="Masukkan nomor (08xx-xxxx-xxxx)"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <p className="text-sm text-[#AC383D] mt-1 italic">*isi dengan "-" jika tidak ada</p>
      </div>

      <CustomDropdown
        label="jenjangSekolah"
        options={["Kelompok A (Jenjang Kecil)", "Kelompok B (Jenjang Besar)", "Penitipan Anak"]}
        selected={form.jenjangSekolah}
        onChange={(val) => setForm((prev) => ({ ...prev, jenjangSekolah: val }))}
      />

      {/* asalPaud */}
      <div className="mb-4">
        <label className="block mb-1 text-blue-900 font-medium">Asal PAUD/Playgroup</label>
        <input
          type="text"
          name="asalPaud"
          value={form.asalPaud}
          onChange={handleChange}
          placeholder="Masukkan asal PAUD/Playgroup"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <p className="text-sm text-[#AC383D] mt-1 italic">*isi dengan "-" jika tidak ada</p>
      </div>

      {/* Dokumen Kartu Keluarga */} 
        <div className="mb-4">
            <label className="block mb-1 text-blue-900 font-medium">Upload Dokumen Kartu Keluarga</label>
            <input
                type="file"
                accept=".pdf, .jpg, .jpeg, .png"
                name="dokumenKK"
                onChange={(e) => {
                const file = e.target.files[0];
                setForm((prev) => ({ ...prev, dokumenKK: file }));
                }}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
            />
            <p className="text-sm text-gray-500 mt-1 text-right italic">*Format file: PDF, JPG, atau PNG</p>
        </div>

        {/* Dokumen Akta Lahir */} 
        <div className="mb-4">
            <label className="block mb-1 text-blue-900 font-medium">Upload Dokumen Akta Lahir</label>
            <input
                type="file"
                accept=".pdf, .jpg, .jpeg, .png"
                name="dokumenAL"
                onChange={(e) => {
                const file = e.target.files[0];
                setForm((prev) => ({ ...prev, dokumenAL: file }));
                }}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
            />
            <p className="text-sm text-gray-500 mt-1 text-right italic">*Format file: PDF, JPG, atau PNG</p>
        </div>

        {/* Upload Foto*/} 
        <div className="mb-4">
            <label className="block mb-1 text-blue-900 font-medium">Upload Foto</label>
            <input
                type="file"
                accept=".jpg, .jpeg, .png"
                name="foto"
                onChange={(e) => {
                const file = e.target.files[0];
                setForm((prev) => ({ ...prev, foto: file }));
                }}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
            />
            <p className="text-sm text-gray-500 mt-1 text-right italic">*Format file: JPEG, JPG, atau PNG</p>
        </div>


      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
        Daftar Sekarang
      </button>
    </div>
  );
};

export default FormulirPendaftaran;
