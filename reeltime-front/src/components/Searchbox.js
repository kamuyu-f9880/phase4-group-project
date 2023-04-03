// import React, { useState } from "react";
// import "./Searchbox.css";

// function Searchbox({ value, setSearchValue }) {
//   const handleChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   return (
//     <div className="search-box-container">
//       <i className="search-box-icon fas fa-search"></i>
//       <input
//         className="search-box-input"
//         value={value}
//         onChange={handleChange}
//         placeholder="Search Movies..."
//       />
//     </div>
//   );
// }


// export default Searchbox

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/movies?search=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBox;

