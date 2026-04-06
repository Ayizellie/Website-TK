import React from "react";
import Navbar from "../landingpage/Navbar";
import { HiArrowLeft } from "react-icons/hi";
import MapsKontak from "./MapsKontak";

const HalamanKontakk = () => {
  return (
    <>
    <Navbar />
    <div className="w-full bg-white pb-16">
      <div className="px-4 sm:px-6 lg:px-20 space-y-10 mx-auto max-w-screen-xl">
        <a
        href="/"
        className="flex items-center text-blue-800 font-semibold mt-24">
        <HiArrowLeft className="mr-2 text-3xl" />
        </a>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-center text-2xl md:text-5xl font-extrabold text-[#047DD2] mb-4">
          Kontak Kami
        </h1>
        <p className="text-center text-md md:text-base text-[#4B5563] mb-20">
          Hubungi kami jika memiliki pertanyaan, komentar dan saran  
        </p>

        <img 
          src="/images/motto.png" 
          alt="Motto Sekolah" 
          className="absolute top-28 right-10 w-32 md:w-22 lg:w-30"
        />

        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex flex-col gap-4 md:w-1/4">
            <div className="bg-[#3C80C7] text-white rounded-md p-4">
              <h3 className="font-semibold mb-2 text-center text-xl">Facebook</h3>
              <p className="font-normal text-center text-sm">Tknsatu Sangattautara</p>
            </div>
            <div className="bg-[#3C80C7] text-white rounded-md p-4">
              <h3 className="font-semibold mb-2 text-center text-xl">Instagram</h3>
              <p className="font-normal text-center text-sm">@tknegeri1sangattautara</p>
            </div>
            <div className="bg-[#3C80C7] text-white rounded-md p-4">
              <h3 className="font-semibold mb-2 text-center text-xl">Email</h3>
              <p className="font-normal text-center text-sm">tknegeri1sgtutara@gmail.com</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-10">
            <div className="rounded-md overflow-hidden">
              <MapsKontak/>
            </div>

            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HalamanKontakk;