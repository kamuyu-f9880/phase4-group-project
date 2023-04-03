import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDetail.css";

const EmpDetail = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
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
                  <h2 className="movie-title">{empdata.name}</h2>
                  <div className="movie-details">
                    <p className="movie-genre">{empdata.genre}</p>
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
