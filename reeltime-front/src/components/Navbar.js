import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, handleLogout, handleSearch }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">ReelTime</Link>
      <div className="search">
        <input type="text" placeholder="Search movies..." onChange={handleSearch} />
        <button type="submit">Search</button>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {user ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;



