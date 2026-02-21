import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // Ensure this path points to your CSS file

function AddUser({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  // Safety check: if they somehow get here without logging in, boot them to profile
  useEffect(() => {
    if (!currentUser) {
      navigate("/profile");
    }
  }, [currentUser, navigate]);

  // Handle Secure Logout
  const handleLogout = () => {
    localStorage.removeItem("keyAuth_currentUser");
    setCurrentUser(null);
    navigate("/profile");
  };

  if (!currentUser) return null; 

  return (
    <div className="profile-container" style={{ width: "100%" }}>
      <div className="profile-header">
        <span className="subtitle">// NEW PROFILE</span>
        <h1 className="title">Add User</h1>
      </div>

      <div className="auth-wrapper">
        
        {/* ADD USER BOX */}
        <div className="form-box bracket-borders" style={{ borderTop: "1px solid var(--border-color)", padding: "2.5rem 2rem", marginBottom: "2rem" }}>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2rem" }}>
            <div style={{ 
              width: "60px", 
              height: "60px", 
              border: "1px dashed var(--text-muted)", 
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.8rem",
              cursor: "pointer",
              backgroundColor: "rgba(255,255,255,0.02)"
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              Photo (optional)
            </span>
          </div>

          <div className="input-group" style={{ marginBottom: "1.5rem" }}>
            <label>NAME</label>
            <input 
              type="text" 
              placeholder="Full name..." 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button className="submit-btn" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
            TRAIN DATASET <span style={{ fontFamily: "var(--font-mono)" }}>&gt;</span>
          </button>
        </div>

        {/* LOGOUT BOX */}
        <div className="form-box bracket-borders" style={{ borderTop: "1px solid var(--border-color)", padding: "1.5rem 2rem", textAlign: "center" }}>
          <span className="subtitle" style={{ display: "block", marginBottom: "1rem" }}>// SYSTEM CONTROL</span>
          <button 
            onClick={handleLogout}
            className="submit-btn" 
            style={{ 
              borderColor: "#ff4d4d", 
              color: "#ff4d4d", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              gap: "0.5rem" 
            }}
          >
            SECURE LOGOUT
          </button>
        </div>

      </div>
    </div>
  );
}

export default AddUser;