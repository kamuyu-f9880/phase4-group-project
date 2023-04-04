import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MovieListing.css"

const MovieListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/movie/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/movie/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch(" http://localhost:8000/movies" + id, {
              method: "DELETE",
            })
              .then((res) => {
                alert("Removed successfully.");
                window.location.reload();
              })
              .catch((err) => {
                console.log(err.message);
              });
        }
    }




    useEffect(() => {
      fetch("http://localhost:8000/movies")
        .then((res) => res.json())
        .then((data) => {
          empdatachange(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Movie Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="movie/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Movie Name</td>
                                <td>Genre</td>
                                <td>Release Date</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default MovieListing;