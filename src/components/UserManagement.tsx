import React, { useState } from "react";
import UserTable from "./UserTable.tsx";

interface UserManagementProps {
  users: string[];
  onAddUser: (username: string) => void;
  onDeleteUser: (username: string) => void;
  onUpdateUser: (oldUsername: string, newUsername: string) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  currentPage: number;
  totalPages: number;
}

const UserManagement: React.FC<UserManagementProps> = ({
  users,
  onAddUser,
  onDeleteUser,
  onUpdateUser,
  handleNextPage,
  handlePrevPage,
  currentPage,
  totalPages,
}) => {
  const [newUsername, setNewUsername] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const handleAddUser = () => {
    onAddUser(newUsername);
    setNewUsername("");
  };

  const handleUpdateUser = () => {
    onUpdateUser(selectedUser, editUsername);
    setEditUsername("");
    setSelectedUser("");
  };

  return (
    <div className="grid max-w-7xl mx-auto bg-transparent gap-4 px-8">
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-center border shadow space-x-0 space-y-2 md:space-y-0 md:space-x-2 rounded-lg px-4 py-3 dark:border-gray-800">
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="Tambahkan Pengguna"
            className="px-3 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 placeholder:text-xs focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full md:w-11/12 dark:bg-black dark:text-white dark:ring-gray-800"
          />
          <button
            onClick={handleAddUser}
            className="py-2 text-xs text-white rounded bg-amber-400 w-full md:w-1/12"
          >
            Tambah
          </button>
        </div>
      </div>

      {selectedUser && (
        <div className="w-full flex flex-col md:flex-row items-center border shadow space-x-0 space-y-2 md:space-y-0 md:space-x-2 rounded-lg px-4 py-3 dark:border-gray-800">
          <input
            type="text"
            defaultValue={selectedUser}
            value={editUsername}
            onChange={(e) => setEditUsername(e.target.value)}
            placeholder={selectedUser}
            className="px-3 block rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 placeholder:text-xs focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full md:w-11/12 text-xs dark:bg-black dark:text-white dark:ring-gray-800"
          />
          <button
            onClick={handleUpdateUser}
            className="py-2 text-xs text-white rounded bg-green-500 w-full md:w-1/12"
          >
            Ubah Nama
          </button>
        </div>
      )}

      <div className="flex flex-col items-center">
        <UserTable
          onDeleteUser={onDeleteUser}
          users={users}
          setSelectedUser={setSelectedUser}
        />
        <div className="my-4 flex space-x-4 items-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="text-xs bg-white px-3 py-1.5 shadow rounded"
          >
            Sebelumnya
          </button>
          <span className="text-sm text-center dark:text-white">
            {currentPage} dari {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="text-xs bg-white px-3 py-1.5 shadow rounded"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
