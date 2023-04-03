import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://reeltime-api.onrender.com/movies/${id}/reviews`)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div className="reviews-container">
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.comments}</p>
            <p>Rating: {review.rating}</p>
            <p>By: {review.user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
