import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import AddUser from "./pages/AddUser";
import "./App.css"; 

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation(); 

  useEffect(() => {
    const savedUser = localStorage.getItem("keyAuth_currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // Check if we are on the login page
  const isLoginPage = location.pathname === "/profile";

  return (
    <div className="app-layout" style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#070a0f' }}>
      
      {/* Hide Sidebar ONLY if we are on the profile (login) page */}
      {!isLoginPage && <Sidebar currentUser={currentUser} />}

      <div className="main-content" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route 
            path="/profile" 
            element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/add-user" element={<AddUser currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;