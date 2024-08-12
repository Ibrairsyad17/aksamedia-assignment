import React, { useState, useEffect, useRef } from "react";

const DropdownMenu: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block dropdown-btn" ref={dropdownRef}>
      <button
        type="button"
        className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-blue-600 text-white hover:bg-blue-700 shadow-sm focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none relative"
        onClick={toggleDropdown}
      >
        {localStorage.getItem("user")}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-down"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <li className="hover:bg-gray-100 cursor-pointer">
            <button
              type="button"
              className="block w-full px-4 py-2 text-sm text-gray-700"
              onClick={onLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
