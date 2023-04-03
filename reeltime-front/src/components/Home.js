import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://reeltime-api.onrender.com/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Reel Time
          </Link>
          <div className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/movies" className="navbar-item">
              Movie List
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Search movies"
                    onChange={handleSearch}
                  />
                </p>
                <p className="control">
                  <Link to="/signin" className="button">
                    Sign In
                  </Link>
                </p>
                <p className="control">
                  <Link to="/signup" className="button is-primary">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="section">
        <h2 className="title">Featured Movies</h2>
        <div className="columns is-multiline">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img src={movie.image} alt={movie.title} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                  </div>
                </div>
                <footer className="card-footer">
                  <Link to={`/movies/${movie.id}`} className="card-footer-item">
                    View Details
                  </Link>
                  <button className="card-footer-item">Add to Favorites</button>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
