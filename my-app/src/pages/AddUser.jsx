import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Profile.css";

function AddUser({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");


  useEffect(() => {
    if (!currentUser) {
      navigate("/profile");
    }
  }, [currentUser, navigate]);

  if (!currentUser) return null;

  const handleLogout = () => {
    localStorage.removeItem("keyAuth_currentUser");
    setCurrentUser(null);
    navigate("/profile");
  };

  const handleTrain = () => {
    if (!name.trim()) return;
    // later: navigate to training screen
    console.log("Start training for:", name);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <span className="subtitle">// NEW PROFILE</span>
        <h1 className="title">Add User</h1>
      </div>

      <div className="auth-wrapper">

        <div className="form-box">
          <div className="photo-upload">
            <div className="photo-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <span className="photo-label">Photo (optional)</span>
          </div>

          <div className="input-group">
            <label>NAME</label>
            <input
              type="text"
              placeholder="Full name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button
            className="submit-btn"
            onClick={handleTrain}
            disabled={!name.trim()}
          >
            TRAIN DATASET <span>&gt;</span>
          </button>
        </div>



      </div>
    </div>
  );
}

export default AddUser;