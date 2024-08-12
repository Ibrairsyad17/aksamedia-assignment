import { useEffect, useState } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [correctUsername, setCorrectUsername] = useState({
    username: "ibrahim",
    email: "ibrahim@gmail.com",
  });
  const [correctPassword, setCorrectPassword] = useState("123456");

  useEffect(() => {
    const user = localStorage.getItem("user");
    const password = localStorage.getItem("password");
    if (user && password) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username: string, password: string) => {
    if (username === correctUsername.email && password === correctPassword) {
      localStorage.setItem("user", correctUsername.username);
      localStorage.setItem("password", password);
      setIsAuthenticated(true);
    } else {
      alert("Username atau Password salah!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    correctUsername,
    correctPassword,
    setCorrectPassword,
    setCorrectUsername,
    handleLogin,
    handleLogout,
  };
}
