import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ setCurrentUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-label">
            SECURE • PASSWORDLESS • BEHAVIORAL
          </div>

          <h1 className="hero-title">
            Passwordless
            <br />
            Authentication
          </h1>

          <div className="hero-divider" />

          <p className="hero-sub">
            Identity verified through keystroke dynamics.
            No passwords. No friction. Just behavior.
          </p>

          <div className="hero-actions">
            <div className="button-row">
              <button className="primary-btn">GET STARTED</button>
              <button className="secondary-btn">LEARN MORE</button>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              LOGOUT
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;