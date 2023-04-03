import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://reeltime-api.onrender.com/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
