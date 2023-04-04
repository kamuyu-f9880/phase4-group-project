import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDetail.css";

const MovieDetail = () => {
  const { movieid } = useParams();

  const [moviedata, moviedatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        moviedatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              {empdata && (
                <div>
                  <h2 className="movie-title">{moviedata.name}</h2>
                  <div className="movie-details">
                    <p className="movie-genre">{moviedata.director}</p>
                    <p className="movie-release-date">{empdata.releasedate}</p>
                  </div>
                  <Link className="btn btn-danger back-btn" to="/">
                    Back to Listing
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
