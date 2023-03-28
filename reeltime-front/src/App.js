import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Searchbox from './components/Searchbox';

function App() {
  return (
   <div>
    <Login></Login>
    <Signup></Signup>
    <Searchbox></Searchbox>
   </div>
  );
}

export default App;
