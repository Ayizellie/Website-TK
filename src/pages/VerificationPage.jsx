import React, { useState } from 'react';
import SearchForm from '../components/verifikasi/SearchForm';
import StatusMessage from '../components/verifikasi/StatusMessage';
import HeaderForm from '../components/formulir/HeaderForm';

// ✅ Tambahkan dummy data
const dummyData = {
  '1': 'Pendaftaran Sedang Diverifikasi',
  '2': 'Pendaftaran Berhasil Diverifikasi',
  '3': 'Pendaftaran Ditolak karena data tidak lengkap',
  '4': 'Data Pendaftaran Tidak Ditemukan',
};


const VerificationPage = () => {
  const [nomor, setNomor] = useState('');
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setNomor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = dummyData[nomor] || 'Data belum ditemukan';
    setStatus(result);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Tambahkan header di atas */}
      <HeaderForm />

      <div className="px-4 py-10 max-w-lg mx-auto">
        <div className="bg-gray-200 py-3 px-4 flex items-center gap-2">
            <span className="text-lg">📄</span>
            <h1 className="text-md font-semibold text-gray-800">Halaman Status Verifikasi</h1>
        </div>

        <SearchForm nomor={nomor} onChange={handleChange} onSubmit={handleSubmit} />

        {status && <StatusMessage status={status} />}
      </div>
    </div>
  );
};

export default VerificationPage;
