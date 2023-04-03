import React, { useState, useEffect } from 'react';

const RecentVisits = () => {
  const [visitedMovies, setVisitedMovies] = useState([]);

  useEffect(() => {
    // fetch recent visited movies from API and setVisitedMovies
    
  }, []);

  return (
    <div>
      <h2>Recent Visits</h2>
      <ul>
        {visitedMovies.map(movie => (
          <li key={movie.id}>
            <p>{movie.title}</p>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentVisits;
