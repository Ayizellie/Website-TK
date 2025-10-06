import React from "react";
import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";

const DaftarGaleri = () => {
    const galeri = [
        {title:"Pelepasan Angkatan 2024-2025", description:"TK Negeri Sangatta Utara", images:["", "", ""],},
        {title:"Pertemuan Ortu", description:"TK Negeri Sangatta Utara", images:["", "", ""],},
        {title:"Pelepasan Angkatan 2023-2024", description:"TK Negeri Sangatta Utara", images:["", "", ""],},
        {title:"Lomba Fashion Show", description:"TK Negeri Sangatta Utara", images:["", "", ""],},
        {title:"Hari Kartini", description:"TK Negeri Sangatta Utara", images:["", "", ""],},
    ];
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = galeri.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil (galeri.length / itemsPerPage);

    const goToNext = () => {
        if (currentPage < totalPages) setCurrentPage (currentPage + 1);
    };

    const goToPrev = () => {
        if (currentPage > 1)  setCurrentPage (currentPage - 1);
    };

    return (
        <div className="w-full bg-white pb-16">
            <div className="px-4 sm:px-6 lg:px-20 space-y-10 mx-auto max-w-screen-xl">
                <a 
                    href="/" 
                    className="flex items-center text-blue-800 font-semibold mt-24">
                    <HiArrowLeft className="mr-2 text-3xl" />
                </a>
            </div>

            <h1 className="text-center text-2xl md:text-5xl font-extrabold text-[#047DD2] mb-12">Galeri Kegiatan</h1>

            <img 
                src="/images/motto.png" 
                alt="Motto Sekolah" 
                className="absolute top-28 right-10 w-32 md:w-22 lg:w-30"
            />

            <div className="max-w-6xl mx-auto px-4">
                {currentItems.map((activity, index) => (
                    <div key={index} className="bg-white border rounded-3xl mb-14 p-8 shadow-sm">
                        <h2 className="font-bold text-[#064A8C] text-2xl mb-3">{activity.title}</h2>
                        <p className="font-normal text-[#4B5563] text-sm mb-12">{activity.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {activity.images.map((img, idx) => (
                                <img src={img} key={idx} className="aspect-[4/3] w-full rounded-3xl shadow-md overflow-hidden" alt="" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
                <button onClick={goToPrev} disabled={currentPage === 1} className="bg-blue-200 text-sm px-4 py-2 rounded transition duration-300 hover:bg-blue-200 disabled:opacity-80">
                    Sebelumnya
                </button>
                <span className="text-sm">
                    Halaman {currentPage} dari {totalPages}
                </span>
                <button onClick={goToNext} disabled={currentPage === totalPages} className="bg-blue-200 text-sm px-4 py-2 rounded hover:bg-blue-200 disabled:opacity-80">
                    Selanjutnya
                </button>
            </div>
        </div>
    );
};

export default DaftarGaleri;
