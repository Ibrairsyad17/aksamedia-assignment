import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const DropdownMenu: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

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

  const handleNavigation = () => {
    navigate("/edit");
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
        className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white hover:bg-gray-50 shadow-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none relative dark:bg-black dark:text-white dark:hover:bg-black dark:hover:underline dark:focus:bg-black transition duration-200"
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
        <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 dark:bg-black dark:border-gray-900 dark:text-white dark:shadow-lg dark:ring-1 dark:ring-gray-900 transition duration-300">
          <li className="hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-900 transition duration-300">
            <button
              type="button"
              className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-white"
              onClick={handleNavigation}
            >
              Edit Profile
            </button>
          </li>
          <li className="hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-900 transition duration-300">
            <button
              type="button"
              className="block w-full px-4 py-2 text-sm text-red-500"
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
