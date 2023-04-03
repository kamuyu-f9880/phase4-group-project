import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [review, setReview] = useState('');
  const [isFavourite, setIsFavourite] = useState(false);
  const { id } = useParams();
  const { currentUser } = useAuth();

  useEffect(() => {
    fetch(`https://reeltime-api.onrender.com/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      fetch(`https://reeltime-api.onrender.com/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movieId: movie.id,
          user: currentUser.email,
          text: review,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setMovie((prev) => ({
            ...prev,
            reviews: [...prev.reviews, data],
          }));
          setReview('');
        });
    }
  };

  const handleFavouriteClick = () => {
    setIsFavourite(!isFavourite);
    if (currentUser) {
      fetch(
        `https://reeltime-api.onrender.com/users/${currentUser.uid}/favourites`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            movieId: movie.id,
            isFavourite: !isFavourite,
          }),
        }
      );
    }
  };

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
            {currentUser ? (
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/profile" className="button">
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="button is-danger">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/signup" className="button">
                    <strong>Sign up</strong>
                  </Link>
                  <Link to="/login" className="button">
                    Log in
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {movie ? (
        <section className="section">
          <div className="column">
            <div className="content">
              <h2>{movie.title}</h2>
              <p>Description: {movie.description}</p>
              <p>director_id: {movie.director_id}</p>
              <p>actor_id: {movie.actor_id}</p>
              <br />
              <h3>Reviews:</h3>
              {movie.reviews &&
                movie.reviews.map((review) => (
                  <div key={review.id}>
                    <p>{review.text}</p>
                    <p>
                      <strong>By:</strong> {review.user}
                    </p>
                    <hr />
                  </div>
                ))}
              <form onSubmit={handleReviewSubmit}>
                <h3>Submit Your Own Review:</h3>
                <div className="field">
                  <label className="label">Review</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Your review"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-link">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              {currentUser && (
                <div className="field">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      checked={isFavourite}
                      onChange={handleFavouriteClick}
                    />{' '}
                    Add to favourites
                  </label>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <div>Loading...</div>
      )
      }
    </div >
  );
};

export default MovieDetails;
