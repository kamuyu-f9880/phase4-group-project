import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, username }) => {
  return (
    <nav>
      <div className="navbar-brand">
        <Link to="/">ReelTime</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="navbar-end">
          {isLoggedIn ? (
            <>
              <Link to="/profile">{username}</Link>
              <Link to="/logout">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


