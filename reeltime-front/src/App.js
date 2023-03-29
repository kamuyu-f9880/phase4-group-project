import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Searchbox from './components/Searchbox';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Login></Login> */}
        <Routes>
          <Route path="/signup" element={<Signup />}/>
          <Route exact path="/login" element={<Login />}/>
        </Routes>
        <Searchbox></Searchbox>
      </BrowserRouter>
    </div>
  );
}


export default App;
