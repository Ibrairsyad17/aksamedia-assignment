import DropdownMenu from "./DropdownMenu.tsx";
import React from "react";

const Header: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  return (
    <header className="w-full py-5 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex px-8 justify-between space-y-4 items-start lg:items-center">
        <a
          href="/dashboard"
          className="text-2xl font-bold text-gray-800 hover:underline"
        >
          Dashboard
        </a>
        <DropdownMenu onLogout={onLogout} />
      </div>
    </header>
  );
};

export default Header;
