import { useEffect, useState } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [correctUsername, setCorrectUsername] = useState("ibrahim");
  const [correctPassword, setCorrectPassword] = useState("123456");
  const [isVerified, setIsVerified] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const password = localStorage.getItem("password");
    if (user && password) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username: string, password: string) => {
    if (username === correctUsername && password === correctPassword) {
      localStorage.setItem("user", username);
      localStorage.setItem("password", password);
      setIsAuthenticated(true);
    } else {
      setIsVerified(false);
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
    isVerified,
    setCorrectPassword,
    setCorrectUsername,
    handleLogin,
    handleLogout,
  };
}
