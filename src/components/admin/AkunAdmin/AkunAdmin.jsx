import React from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
const AkunAdmin = () => {
  return (

    <NavbarSidebar >
      <div className=" flex-1 min-h-screen px-10">
        <div className="relative overflow-x-auto rounded-lg">
          <div>
            <h1 className="text-left text-black text-xl font-semibold mb-5">Kelola Akun</h1>
          </div>

          <div className="flex flex-col items-left mb-6">
            <h3 className="mt-2 text-sm text-black font-semibold mb-3">Foto</h3>
            <img
              src="/assets/profile.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-lg object-cover shadow"
            />
          </div>
          
          <h2 className="text-left text-black text-sm font-semibold mb-3">Nama Admin</h2>
          <div className="mt-4">
            <label htmlFor="block font-semibold text-sm text-black mb-3" for="nama"></label>
            <input type="text" className="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full mb-6" />
          </div>

          <h2 className="text-left text-black text-sm font-semibold mb-3">Email Admin</h2>
          <div className="mt-4">
            <label htmlFor="block font-semibold text-sm text-black mb-3" for="email"></label>
            <input type="text" className="px-3 py-2 border border-gray-300 focus:border-indigo-500 focus:outline-indigo-500 rounded-md shadow-sm block w-full mb-6" />
          </div>

          <div className="flex justify-end mt-10">
            <button type="submit" className="inline-flex items-center px-3 border border-gray-700 rounded-md font-semibold text-sm text-black active:bg-white focus:outline-none focus:ring-2 focus:ring-[#6FBFF2] focus:ring-offset-2 transition ease-in-out duration-150 ml-4 bg-white hover:bg-[#6FBFF2] py-3">Simpan</button>
          </div>
        </div>
      </div> 
    </ NavbarSidebar >
  );
};
export default AkunAdmin;