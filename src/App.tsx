import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.tsx";
import Dashboard from "./components/Dashboard.tsx";
import EditUser from "./components/EditUser.tsx";
import useAuth from "./hooks/useAuth.ts";

function App() {
  const { isAuthenticated, handleLogin, handleLogout } = useAuth();

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
