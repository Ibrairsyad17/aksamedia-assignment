import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.tsx";
import Dashboard from "./components/Dashboard.tsx";
import EditUser from "./components/EditUser.tsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const password = localStorage.getItem("password");
    if (user && password) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username: string, password: string) => {
    if (username === "ibrahim" && password === "123456") {
      localStorage.setItem("user", username);
      localStorage.setItem("password", password);
      setIsAuthenticated(true);
    } else {
      alert("Invalid username");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <Login
                onLogin={(username, password) => {
                  handleLogin(username, password);
                }}
              />
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard onLogout={handleLogout} />
              ) : (
                <Login
                  onLogin={(username, password) => {
                    handleLogin(username, password);
                  }}
                />
              )
            }
          ></Route>
          <Route
            path={"/edit"}
            element={
              isAuthenticated ? (
                <EditUser onLogout={handleLogout} />
              ) : (
                <Login
                  onLogin={(username, password) => {
                    handleLogin(username, password);
                  }}
                />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
