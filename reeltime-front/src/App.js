import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetail';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/Signup';
import LogIn from './components/Login';
import Profile from './components/Profile';

class App extends Component {
  state = {
    currentUser: null,
    currentRoute: 'home',
  };

  handleLogin = (user) => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    const { currentUser, currentRoute } = this.state;

    return (
      <Router>
        <div className="App">
          <NavBar
            currentUser={currentUser}
            onLogout={this.handleLogout}
          />

          {currentRoute === 'home' && (
            <Route exact path="/" render={() => (
              <Home currentUser={currentUser} />
            )} />
          )}

          {currentRoute === 'movieList' && (
            <Route exact path="/movies" render={() => (
              <MovieList currentUser={currentUser} />
            )} />
          )}

          {currentRoute === 'movieDetails' && (
            <Route path="/movies/:id" render={(props) => (
              <MovieDetails
                {...props}
                currentUser={currentUser}
              />
            )} />
          )}

          {currentRoute === 'about' && (
            <Route path="/about" component={About} />
          )}

          {currentRoute === 'contact' && (
            <Route path="/contact" component={Contact} />
          )}

          {currentRoute === 'signUp' && (
            <Route path="/signup" render={() => (
              <SignUp onLogin={this.handleLogin} />
            )} />
          )}

          {currentRoute === 'logIn' && (
            <Route path="/login" render={() => (
              <LogIn onLogin={this.handleLogin} />
            )} />
          )}

          {currentRoute === 'profile' && (
            <Route path="/profile" render={() => (
              <Profile currentUser={currentUser} />
            )} />
          )}
        </div>
      </Router>
    );
  }
}

export default App;
