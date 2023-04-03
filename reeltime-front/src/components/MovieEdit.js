import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`https://reeltime-api.onrender.com/movies/${movieId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      setMovie(data);
      setTitle(data.title);
      setDescription(data.description);
      setDirector(data.director);
      setYear(data.year);
    };
    fetchMovie();
  }, [movieId]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://reeltime-api.onrender.com/movies/${movieId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        title,
        description,
      })
    });
    if (response.ok) {
      history.push(`/movies/${movieId}`);
    }
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditMovie;
