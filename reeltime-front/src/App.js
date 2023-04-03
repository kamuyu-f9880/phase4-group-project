import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import MovieDetails from "./components/MovieDetails";
import MovieCreate from "./components/MovieCreate";
import MovieEdit from "./components/MovieEdit";
import MovieDelete from "./components/MovieDelete";

function App() {
  const [user, setUser] = useState(null);

  // Helper function to check if the user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  // Handler function to log in the user
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // Handler function to log out the user
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated()} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <Signup handleLogin={handleLogin} />
        </Route>
        {/* Private routes that require authentication */}
        {isAuthenticated() && (
          <>
            <Route path="/profile">
              <Profile user={user} />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route path="/create-movie">
              <MovieCreate />
            </Route>
            <Route path="/edit-movie/:id">
              <MovieEdit />
            </Route>
            <Route path="/delete-movie/:id">
              <MovieDelete />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
