import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
