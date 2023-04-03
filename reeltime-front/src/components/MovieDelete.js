import React, { useState } from 'react';

const MovieDelete = ({ movie, onDelete }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = () => {
    fetch(`https://reeltime-api.onrender.com/movies/${movie.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete movie');
        }
        onDelete(movie.id);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      {confirmDelete ? (
        <>
          <p>Are you sure you want to delete this movie?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setConfirmDelete(false)}>No</button>
        </>
      ) : (
        <button onClick={() => setConfirmDelete(true)}>Delete Movie</button>
      )}
    </div>
  );
};

export default MovieDelete;
