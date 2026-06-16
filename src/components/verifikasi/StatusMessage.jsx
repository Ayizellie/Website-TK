import React from 'react';

// Fungsi untuk menentukan warna berdasarkan isi string status
const getStatusClass = (status) => {
  if (status.toLowerCase() === 'diterima') {
    return 'bg-green-100 text-green-700 border-green-500';
  } else if (status.toLowerCase() === 'pending') {
    return 'bg-yellow-100 text-yellow-700 border-yellow-500';
  } else if (status.toLowerCase() === 'ditolak') {
    return 'bg-red-100 text-red-700 border-red-500';
  } else {
    return 'bg-gray-100 text-gray-700 border-gray-400';
  }
};


const StatusMessage = ({ status }) => {
  const statusClass = getStatusClass(status);

  return (
    <div className={`border px-6 py-4 rounded-2xl mt-6 text-center text-base font-semibold shadow-md ${statusClass}`}>
      {status}
    </div>
  );
};

export default StatusMessage;
