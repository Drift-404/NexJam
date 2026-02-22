import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import AddUser from "./pages/AddUser";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const savedUser = localStorage.getItem("keyAuth_currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const isLoginPage = location.pathname === "/profile";

  return (
    <div className="layout">
      {!isLoginPage && (
        <Sidebar currentUser={currentUser} />
      )}

      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <Profile
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />

          <Route path="/settings" element={<Settings />} />

          <Route
            path="/add-user"
            element={
              <AddUser
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;