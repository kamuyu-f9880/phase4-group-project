import React, {useState} from "react";
import "./Home.css";


function Home(){
    const [searchValue, setSearchValue] = useState("")
      const handleChange = (event) => {
        setSearchValue(event.target.value);
      };

    return (
      <div className="search-box-container">
        <i className="search-box-icon fas fa-search"></i>
        <input
          className="search-box-input"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search Movies..."
        />
        <h1 className="home-title">HomePage</h1>
      </div>
    );

}

export default Home 