import React from "react";

const TentangKami = () => {
  return (
    <div className="bg-blue-50 py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-bold text-blue-800 mb-12">
          Tentang Kami
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex-1 text-center min-h-[180px]">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">✨ Visi</h3>
            <p className="text-gray-700">[Isi visi di sini]</p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex-1 text-center min-h-[180px]">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">✨ Misi</h3>
            <p className="text-gray-700">[Isi misi di sini]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
