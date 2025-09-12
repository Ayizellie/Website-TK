import React, { useState } from 'react';
import NavbarAdmin from '../navbaradmin/NavbarAdmin';
import Sidebar from '../sidebaradmin/Sidebar';

const NavbarSidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex h-screen w-full">
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="flex flex-col flex-1">
        {isSidebarOpen ? (
          <div className="w-full">
            <NavbarAdmin toggleSidebar={toggleSidebar} />
          </div>
        ) : (
          <div className="w-full">
            <NavbarAdmin toggleSidebar={toggleSidebar} />
          </div>
        )}

        <main className="flex-1 p-4 bg-[#f8f8f8] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
export default NavbarSidebar;