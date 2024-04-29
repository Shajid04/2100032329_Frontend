import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/Home" className="navbar-link">Home</Link>
          <Link to="/Employee" className="navbar-link">Employee</Link>
        </div>
        
        
      </div>
    </nav>
  );
}

export default Navbar;
