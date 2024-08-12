import Header from "./Header.tsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.ts";

interface Props {
  onLogout: () => void;
}

const EditUser: React.FC<Props> = ({ onLogout }) => {
  const [newUsername, setNewUsername] = useState("");
  const navigate = useNavigate();
  const { setCorrectUsername } = useAuth();

  const handleChangeUsername = () => {
    localStorage.setItem("user", newUsername);
    setCorrectUsername({
      username: newUsername,
      email: "ibrahim@gmail.com",
    });
    navigate("/dashboard");
  };

  return (
    <div>
      <Header onLogout={onLogout} />
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-2xl font-bold text-gray-800 mt-8">
          Ubah Nama Admin
        </h1>
        <div className="flex flex-col items-center mt-8">
          <div className="w-full flex flex-col md:flex-row items-center border shadow space-x-0 space-y-2 md:space-y-0 md:space-x-2 rounded-lg px-4 py-3">
            <input
              type="text"
              placeholder={localStorage.getItem("user") || "Nama Admin"}
              className="px-3 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 placeholder:text-xs focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full md:w-11/12"
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <button
              className="py-2 text-xs text-white rounded bg-amber-400 w-full md:w-1/12"
              onClick={handleChangeUsername}
            >
              Ubah Nama
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
