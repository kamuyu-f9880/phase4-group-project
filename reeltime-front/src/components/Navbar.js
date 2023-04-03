import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {!isLoggedIn ? (
          <>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout">Log Out</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

