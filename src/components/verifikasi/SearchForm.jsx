import React from 'react';

const SearchForm = ({ nomor, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="bg-gray-100 p-5 rounded-xl shadow-md mt-6">
        <label className="block text-sm font-bold text-gray-700 mb-2">Nomor Pendaftaran</label>
        <input
            type="text"
            value={nomor}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            placeholder="cth: 082345678901"
        />
        <p className="text-xs text-gray-500 mt-2">Silahkan cari nomor pendaftaran untuk melihat status verifikasi pendaftaran</p>
        <button
            type="submit"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-semibold"
        >
            Cek Status
        </button>
    </form>

  );
};

export default SearchForm;
