import React from "react";
import { HiArrowLeft } from "react-icons/hi";

const Kurikulum = () => {
    return(
        <div className="w-full bg-white pb-16">
            <div className="px-4 sm:px-6 lg:px-20 space-y-10 mx-auto max-w-screen-xl">
                <a 
                href="/"
                className="flex items-center text-blue-800 font-semibold mt-24">
                <HiArrowLeft className="mr-2 text-3xl" />
                </a>
            </div>
            <div className="max-w-6xl mx-auto px-4 mb-20">
                <h1 className="text-center text-2xl md:text-5xl font-extrabold text-[#047DD2] mb-4"> Kurikulum</h1>
                <h2 className="text-center text-md md:text-base text-[#4B5563] mb-20">Kurikulum yang digunakan pada sekolah TK Negeri 1 Sangatta Utara</h2>

                <img 
                    src="/images/motto.png" 
                    alt="Motto Sekolah" 
                    className="absolute top-28 right-10 w-32 md:w-22 lg:w-30"
                />

                <div className="bg-[#3C80C7] bg-opacity-25 px-4 py-40 rounded-xl shadow-xl mb-20">
                    <p className="text-black text-base text-center font-normal">
                        isi kurikulum
                    </p>
                </div>

                <h3 className="text-[#064A8C] font-bold text-5xl mb-6">
                    Pembelajaran
                </h3>
                <h2 className="text-black font-normal text-base mb-8">
                    Ada 3 kelas pembelajaran pada sekolah TK Negeri 1 Sangatta Utara
                </h2>
                
                <div className="relative flex flex-col lg:flex-row items-center gap-10 px-10 py-10">
                    <div className="w-full lg:w-auto lg:ml-[-40px]">
                        <img src="" alt="Foto Kurikulum 1" className="w-full lg:w-[480px] h-[300px] object-cover rounded-xl shadow-lg"></img>
                    </div>
                    <div className="flex-1 text-left bg-[#3C80C7] bg-opacity-25 rounded-2xl shadow-md p-4 lg:p-8">
                        <p className="text-sm font-normal text-black px-5 mb-3">
                            Pembelajaran pada kurikulum di TK Negeri 1 Sangatta Utara yaitu
                        </p>
                    </div>
                </div>
                
                <div className="relative flex flex-col lg:flex-row-reverse items-center gap-10 px-10 py-10">
                    <div className="w-full lg:w-auto lg:mr-[-40px]">
                        <img src="" alt="Foto Kurikulum 2" className="w-full lg:w-[480px] h-[300px] object-cover rounded-xl shadow-lg"/>
                    </div>
                    <div className=" flex-1 text-left bg-[#3C80C7] bg-opacity-25 rounded-2xl shadow-md p-4 lg:p-8">
                        <p className="text-sm font-normal text-black px-5 mb-3">
                            Pembelajaran pada kurikulum di TK Negeri 1 Sangatta Utara yaitu
                        </p>
                    </div>
                </div>
                
                <div className="relative flex flex-col lg:flex-row items-center gap-10 px-10 py-10">
                    <div className="w-full lg:w-auto lg:ml-[-40px]">
                        <img src="" alt="Foto Kurikulum 3" className="w-full lg:w-[480px] h-[300px] object-cover rounded-xl shadow-lg"/>
                    </div>
                    <div className="flex-1 text-left bg-[#3C80C7] bg-opacity-25 rounded-2xl shadow-md p-4 lg:p-8">
                        <p className="text-sm font-normal text-black px-5 mb-3">
                            Pembelajaran pada kurikulum di TK Negeri 1 Sangatta Utara yaitu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default Kurikulum;