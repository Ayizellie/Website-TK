import React from "react";
import NavbarSidebar from "../NavbarSidebar/NavbarSidebar";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const DaftarPegawai = () => {
  return (
    <NavbarSidebar >
    <div className="flex">
      <div className="w-full min-h-screen px-10">
        <div className="relative overflow-x-auto sm:rounded-lg">
          <div>
            <h1 className="text-left text-black text-xl font-semibold mb-3">Data Pegawai dan Guru TK Negeri 1 Sangatta Utara</h1>
            <h2 className="text-left text-black text-sm font-normal mb-8">Management Dashoard Admin TK Negeri 1 Sangatta Utara</h2>
          </div>

          <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-6">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-50 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items"></input>
            </div>
            <div className="flex justify-end items-center mt-4 gap-6">
              <button>
                <FaChevronCircleLeft />
              </button>
              <button>
                <FaChevronCircleRight />
              </button>
            </div>
          </div>

          <table className="w-full text-sm text-center rtl:text-right text-black">
            <thead className="text-xs text-black bg-[#6FBFF2] bg-opacity-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nama Lengkap
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Ayah
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Ibu
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal Lahir
                </th>
                <th scope="col" className="px-6 py-3">
                  Nomor HP
                </th>
                <th scope="col" className="px-6 py-3">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                  Zellie Lie
                </th>
                <td className="px-6 py-4">
                  Erthana
                </td>
                <td className="px-6 py-4">
                  Aezelli
                </td>
                <td className="px-6 py-4">
                  13-10-2022
                </td>
                <td className="px-6 py-4">
                  081234568791
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat</a>
                </td>
              </tr>
              
              <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                  Zellie Lie
                </th>
                <td className="px-6 py-4">
                  Erthana
                </td>
                <td className="px-6 py-4">
                  Aezelli
                </td>
                <td className="px-6 py-4">
                  13-10-2022
                </td>
                <td className="px-6 py-4">
                  081234568791
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat</a>
                </td>
              </tr>
              
              <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                  Zellie Lie
                </th>
                <td className="px-6 py-4">
                  Erthana
                </td>
                <td className="px-6 py-4">
                  Aezelli
                </td>
                <td className="px-6 py-4">
                  13-10-2022
                </td>
                <td className="px-6 py-4">
                  081234568791
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat</a>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                  Zellie Lie
                </th>
                <td className="px-6 py-4">
                  Erthana
                </td>
                <td className="px-6 py-4">
                  Aezelli
                </td>
                <td className="px-6 py-4">
                  13-10-2022
                </td>
                <td className="px-6 py-4">
                  081234568791
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat</a>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                  Zellie Lie
                </th>
                <td className="px-6 py-4">
                  Erthana
                </td>
                <td className="px-6 py-4">
                  Aezelli
                </td>
                <td className="px-6 py-4">
                  13-10-2022
                </td>
                <td className="px-6 py-4">
                  081234568791
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat</a>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                  Zellie Lie
                </th>
                <td className="px-6 py-4">
                  Erthana
                </td>
                <td className="px-6 py-4">
                  Aezelli
                </td>
                <td className="px-6 py-4">
                  13-10-2022
                </td>
                <td className="px-6 py-4">
                  081234568791
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lihat</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>  
    </ NavbarSidebar >
  );
};
export default DaftarPegawai;