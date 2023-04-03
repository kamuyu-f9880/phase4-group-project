import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://reeltime-api.onrender.com/movies/${id}`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Director: {movie.director.name}</p>
      <p>Cast: {movie.actors.map(actor => actor.name).join(', ')}</p>
      <p>Reviews:</p>
      <ul>
        {movie.reviews.map(review => (
          <li key={review.id}>
            <p>{review.user.email}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;

