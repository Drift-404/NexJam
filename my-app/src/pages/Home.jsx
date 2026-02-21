import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Note: Ensure your Profile.css is imported globally in App.jsx or here so the styles apply!

function Home({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  // Redirect to login if accessed without being authenticated
  useEffect(() => {
    if (!currentUser) {
      navigate("/profile");
    }
  }, [currentUser, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("keyAuth_currentUser");
    setCurrentUser(null);
    navigate("/profile");
  };

  if (!currentUser) return null; 

  return (
    <div className="profile-container" style={{ width: "100%", justifyContent: "center" }}>
      
      <div className="profile-header" style={{ marginBottom: "2rem" }}>
        <span className="subtitle" style={{ letterSpacing: "0.2em" }}>// NEW PROFILE</span>
        <h1 className="title" style={{ fontSize: "2rem", marginTop: "0.5rem" }}>Add User</h1>
      </div>

      <div className="auth-wrapper" style={{ maxWidth: "450px" }}>
        
        {/* TOP BOX: ADD USER */}
        <div className="form-box bracket-borders" style={{ borderTop: "1px solid var(--border-color)", padding: "2.5rem 3rem", marginBottom: "2rem" }}>
          
          {/* Photo Upload Area */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2.5rem" }}>
            <div style={{ 
              width: "65px", 
              height: "65px", 
              border: "1px dashed var(--text-muted)", 
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
              cursor: "pointer",
              backgroundColor: "rgba(255,255,255,0.01)"
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              Photo (optional)
            </span>
          </div>

          {/* Name Input */}
          <div className="input-group" style={{ marginBottom: "2rem" }}>
            <label style={{ textAlign: "center", marginBottom: "0.5rem" }}>NAME</label>
            <input 
              type="text" 
              placeholder="Full name ..." 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Train Dataset Button */}
          <button className="submit-btn" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", width: "100%" }}>
            TRAIN DATASET <span style={{ fontFamily: "var(--font-mono)", color: "var(--primary-blue)" }}>&gt;</span>
          </button>
        </div>

        {/* BOTTOM BOX: SYSTEM CONTROL */}
        <div className="form-box bracket-borders" style={{ borderTop: "1px solid var(--border-color)", padding: "1.5rem 2rem", textAlign: "center" }}>
          <span className="subtitle" style={{ display: "block", marginBottom: "1.5rem" }}>// SYSTEM CONTROL</span>
          <button 
            onClick={handleLogout}
            className="submit-btn" 
            style={{ 
              borderColor: "#ff4d4d", 
              color: "#ff4d4d", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              width: "100%",
              letterSpacing: "0.1em"
            }}
          >
            SECURE LOGOUT
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;