import React from "react";
import { NavLink } from "react-router-dom"; 

function Sidebar({ currentUser }) {
  // Dynamic styling for the active tab
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--primary-blue)' : 'var(--text-muted)', 
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    padding: '0.8rem 1.5rem', 
    borderLeft: isActive ? '3px solid var(--primary-blue)' : '3px solid transparent', 
    transition: 'all 0.2s ease',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    letterSpacing: '0.05em'
  });

  // Hide sidebar if not logged in
  if (!currentUser) return null;

  return (
    <aside className="sidebar" style={{ width: '250px', borderRight: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark)', paddingTop: '2rem' }}>
      
      {/* Brand Logo & Name */}
      <div className="brand" style={{ color: 'var(--primary-blue)', fontWeight: 'bold', fontSize: '1rem', paddingLeft: '1.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        KEYAUTH
      </div>

      {/* Navigation Links with SVGs */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>

        {/* ADD USER ICON */}
        <NavLink to="/add-user" style={navLinkStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
          ADD USER
        </NavLink>
      </nav>

    </aside>
  );
}

export default Sidebar;