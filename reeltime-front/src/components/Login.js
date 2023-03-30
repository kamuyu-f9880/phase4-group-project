import React, { useState } from "react";
import './Login.css';
import { useNavigate, Link } from "react-router-dom";



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

  };
  

function handleClick(){
    navigate("/home","/searchbox")
}
    
 

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <p className="forgot-password text-right">
          Not a member <Link to="/Signup">Sign up?</Link>
        </p>
        <button onClick={handleClick} type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
