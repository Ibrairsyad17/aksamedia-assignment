import React from "react";
import UserManagement from "./UserManagement";
// import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header.tsx";
import useUsers from "../hooks/useUsers.ts";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const {
    handleAddUser,
    handleDeleteUser,
    handleUpdateUser,
    handleSearchChange,
    currentUsers,
    totalPages,
    handleNextPage,
    handlePrevPage,
    currentPage,
  } = useUsers();

  return (
    <div>
      <Header onLogout={onLogout} />
      <div className="max-w-7xl mx-auto grid my-5 place-items-center px-8">
        <input
          id="search"
          name="seach"
          type="text"
          required
          className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 placeholder:text-xs focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={handleSearchChange}
          placeholder="Cari Pengguna..."
        />
      </div>

      <UserManagement
        users={currentUsers}
        onAddUser={handleAddUser}
        onDeleteUser={handleDeleteUser}
        onUpdateUser={handleUpdateUser}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Dashboard;
