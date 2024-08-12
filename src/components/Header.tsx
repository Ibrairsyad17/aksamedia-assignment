import DropdownMenu from "./DropdownMenu.tsx";
import React from "react";

const Header: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  return (
    <header className="w-full py-5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col px-4 lg:px-0 lg:flex-row justify-between space-y-4 items-start lg:items-center">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <DropdownMenu onLogout={onLogout} />
      </div>
    </header>
  );
};

export default Header;
