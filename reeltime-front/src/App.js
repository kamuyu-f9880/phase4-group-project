import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieListing from './components/MovieListing';
import MovieCreate from './components/MovieCreate';
import MovieDetail from './components/MovieDetail';
import MovieEdit from './components/MovieEdit';
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Home from "./Home";

function App() {
  return (
    <div className="App">
      {/* <h1>Reel Time</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MovieListing />}></Route>
          <Route path="/movies/create" element={<MovieCreate />}></Route>

          <Route path="/movies/detail/:movie_id" element={<MovieDetail />}></Route>
          <Route path="/movies/edit/:movie_id" element={<MovieEdit />}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
