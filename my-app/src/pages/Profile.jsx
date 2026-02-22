import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Profile.css";

function Profile({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  const [tab, setTab] = useState("signup");
  const [error, setError] = useState("");

  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!signupEmail || !signupPassword) {
      setError("Please fill out all fields.");
      return;
    }

    const existingUsers =
      JSON.parse(localStorage.getItem("keyAuth_users")) || [];

    if (existingUsers.find((u) => u.email === signupEmail)) {
      setError("An account with this email already exists.");
      return;
    }

    const newUser = { email: signupEmail, password: signupPassword };

    existingUsers.push(newUser);
    localStorage.setItem("keyAuth_users", JSON.stringify(existingUsers));
    localStorage.setItem("keyAuth_currentUser", JSON.stringify(newUser));

    setCurrentUser(newUser);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const existingUsers =
      JSON.parse(localStorage.getItem("keyAuth_users")) || [];

    const foundUser = existingUsers.find(
      (u) =>
        u.email === loginIdentifier &&
        u.password === loginPassword
    );

    if (foundUser) {
      localStorage.setItem(
        "keyAuth_currentUser",
        JSON.stringify(foundUser)
      );
      setCurrentUser(foundUser);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <span className="subtitle">// SECURE ACCESS</span>
        <h1 className="title">Profile</h1>
      </div>

      <div className="auth-wrapper">
        <div className="tabs">
          <button
            className={`tab-btn ${tab === "signup" ? "active" : ""}`}
            onClick={() => {
              setTab("signup");
              setError("");
            }}
          >
            SIGNUP
          </button>

          <button
            className={`tab-btn ${tab === "login" ? "active" : ""}`}
            onClick={() => {
              setTab("login");
              setError("");
            }}
          >
            LOGIN
          </button>
        </div>

        <div className="form-box">
          {error && <div className="error-message">{error}</div>}

          {tab === "login" ? (
            <form className="form" onSubmit={handleLogin}>
              <div className="input-group">
                <label>USERNAME OR EMAIL</label>
                <input
                  type="text"
                  placeholder="user@example.com"
                  value={loginIdentifier}
                  onChange={(e) =>
                    setLoginIdentifier(e.target.value)
                  }
                />
              </div>

              <div className="input-group">
                <label>PASSWORD</label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={loginPassword}
                  onChange={(e) =>
                    setLoginPassword(e.target.value)
                  }
                />
              </div>

              <button type="submit" className="submit-btn">
                LOGIN
              </button>

              <p className="helper-text">
                Uses keystroke-dynamics if training data exists.
              </p>
            </form>
          ) : (
            <form className="form" onSubmit={handleSignup}>
              <div className="input-group">
                <label>EMAIL</label>
                <input
                  type="email"
                  placeholder="user@example.com"
                  value={signupEmail}
                  onChange={(e) =>
                    setSignupEmail(e.target.value)
                  }
                />
              </div>

              <div className="input-group">
                <label>CREATE PASSWORD</label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={signupPassword}
                  onChange={(e) =>
                    setSignupPassword(e.target.value)
                  }
                />
              </div>

              <button type="submit" className="submit-btn">
                CREATE ACCOUNT
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;