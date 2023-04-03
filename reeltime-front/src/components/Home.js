import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch('https://reeltime-api.onrender.com/movies?sortBy=popularity&limit=6')
      .then(response => response.json())
      .then(data => setPopularMovies(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home-page">
      <div className="banner">
        <h1>Welcome to ReelTime</h1>
        <p>Discover new movies, rate and review your favorites, and connect with other movie lovers!</p>
      </div>
      <div className="popular-movies">
        <h2>Popular Movies</h2>
        <ul>
          {popularMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img src={movie.poster} alt={movie.title} />
                <h3>{movie.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;

