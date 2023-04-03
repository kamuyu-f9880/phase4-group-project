import { useState, useEffect } from 'react';


const Profile = () => {
  const { currentUser } = useAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://reeltime-api.onrender.com/users/${currentUser.uid}/movies`
      );
      const data = await response.json();
      setMovies(data);
    };
    if (currentUser) {
      fetchMovies();
    }
  }, [currentUser]);

  const handleDeleteMovie = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this movie?');
    if (confirmDelete) {
      await fetch(`https://reeltime-api.onrender.com/movies/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    }
  };

  return (
    <div className="container">
      <h2 className="title is-2">Profile</h2>
      {currentUser ? (
        <>
          <p>Email: {currentUser.email}</p>
          <h3 className="title is-3">Your Movies</h3>
          {movies.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>
                      <button
                        className="button is-danger is-small"
                        onClick={() => handleDeleteMovie(movie.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>You haven't added any movies yet.</p>
          )}
        </>
      ) : (
        <p>You need to sign in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
