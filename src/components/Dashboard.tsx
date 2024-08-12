import React, { useState, useEffect } from "react";
import UserManagement from "./UserManagement";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header.tsx";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [users, setUsers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (storedUsers.length === 0) {
      const initialUsers = [
        "Haaland",
        "Rashford",
        "Salah",
        "Messi",
        "Gojo",
        "Yuji",
        "Tanjiro",
        "Sakura",
        "Ariana",
        "Onana",
        "Asep",
      ];
      localStorage.setItem("users", JSON.stringify(initialUsers));
      setUsers(initialUsers);
    } else {
      setUsers(storedUsers);
    }
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search") || "";
    setSearchQuery(query);
  }, [location.search]);

  const handleAddUser = (username: string) => {
    const updatedUsers = [...users, username];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleDeleteUser = (username: string) => {
    const updatedUsers = users.filter((user) => user !== username);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleUpdateUser = (oldUsername: string, newUsername: string) => {
    const updatedUsers = users.map((user) =>
      user === oldUsername ? newUsername : user,
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`?search=${query}`);
  };

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Header onLogout={onLogout} />
      <div className="max-w-7xl mx-auto grid my-5 place-items-center">
        <input
          id="search"
          name="seach"
          type="text"
          required
          className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={handleSearchChange}
          placeholder="Cari Pengguna..."
        />
      </div>

      <UserManagement
        users={currentUsers}
        onAddUser={handleAddUser}
        onDeleteUser={handleDeleteUser}
        onUpdateUser={handleUpdateUser}
      />
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
