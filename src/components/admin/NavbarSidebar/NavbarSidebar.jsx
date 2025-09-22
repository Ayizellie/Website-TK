import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../navbaradmin/NavbarAdmin';
import Sidebar from '../sidebaradmin/Sidebar';

const NavbarSidebar = ({ children }) => {
  const [
    isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem('sidebarbuka');
    if (savedState !== null){
      setIsSidebarOpen(savedState === 'true');
    } 
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => {
      const stateBaru = !prev;
      localStorage.setItem('sidebarbuka', stateBaru.toString());
      return stateBaru;
    });
  };

  return (
    <div className="flex h-screen w-full">
      <Sidebar 
      isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-col flex-1">
        <NavbarAdmin 
        toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 bg-[#f8f8f8] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
export default NavbarSidebar;