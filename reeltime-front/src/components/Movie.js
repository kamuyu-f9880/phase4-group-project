import React, { useState, useEffect } from "react";

const Movie = ({ match }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://reeltime-api.onrender.com/movies/${match.params.id}`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [match.params.id]);

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <p>{movie.reviews.length}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movie;
