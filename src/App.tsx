import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.tsx";
import Dashboard from "./components/Dashboard.tsx";
import EditUser from "./components/EditUser.tsx";
import useAuth from "./hooks/useAuth.ts";
import { useEffect, useState } from "react";

function App() {
  const { isAuthenticated, handleLogin, handleLogout } = useAuth();
  const [mode, setMode] = useState("light");

  const onSelectMode = (mode: string) => {
    setMode(mode);
    if (mode === "light") document.body.classList.remove("bg-black");
    else document.body.classList.add("bg-black");
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        onSelectMode(e.matches ? "dark" : "light"),
      );

    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    );

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (e) =>
          onSelectMode(e.matches ? "dark" : "light"),
        );
    };
  }, []);

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
                mode={mode}
              />
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard onLogout={handleLogout} mode={mode} />
              ) : (
                <Login
                  onLogin={(username, password) => {
                    handleLogin(username, password);
                  }}
                  mode={mode}
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
                  mode={mode}
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
