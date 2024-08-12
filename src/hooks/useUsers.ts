import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useUsers() {
  const [users, setUsers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search") || "";
    setSearchQuery(query);
  }, [location.search]);

  useEffect(() => {
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
  }, []);

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

  return {
    users,
    searchQuery,
    currentPage,
    totalPages,
    currentUsers,
    handleAddUser,
    handleDeleteUser,
    handleUpdateUser,
    handleSearchChange,
    handleNextPage,
    handlePrevPage,
    setUsers,
  };
}
