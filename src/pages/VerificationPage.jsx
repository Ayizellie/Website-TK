import React, { useState } from 'react';
import SearchForm from '../components/verifikasi/SearchForm';
import StatusMessage from '../components/verifikasi/StatusMessage';
import HeaderForm from '../components/formulir/HeaderForm';
import axios from 'axios';

const VerificationPage = () => {
  const [nomor, setNomor] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNomor(e.target.value.toUpperCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setError('');
    setLoading(true);

    try {
      // Panggil endpoint Laravel BE, langsung pakai nomor pendaftaran
      const res = await axios.post(
        `http://127.0.0.1:8000/api/admission/${nomor}/check`
      );

      // Ambil status dari backend
      setStatus(res.data.status);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Kode pendaftaran tidak ditemukan');
      } else {
        setError('Terjadi kesalahan server');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderForm />

      <div className="px-4 py-10 max-w-lg mx-auto">
        <div className="bg-gray-200 py-3 px-4 flex items-center gap-2">
          <span className="text-lg">📄</span>
          <h1 className="text-md font-semibold text-gray-800">
            Halaman Status Verifikasi
          </h1>
        </div>

        <SearchForm nomor={nomor} onChange={handleChange} onSubmit={handleSubmit} />

        {loading && (
          <p className="text-blue-600 mt-4 text-center">Sedang memeriksa...</p>
        )}
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
        {status && <StatusMessage status={status} />}
      </div>
    </div>
  );
};

export default VerificationPage;
