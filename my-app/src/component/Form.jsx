import React, { useState } from "react";
import "./Form.css";

const Form = ({ isLoggedIn, setLoggedIn, onInputChange }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic goes here
    setLoggedIn(!isLoggedIn);

   // Pass the username value to the parent component
    onInputChange(username);

    // Reset the form after submission
    setUsername("");
    setPassword("");
  };

  return (
    <div className="form-container">
     
          <form onSubmit={handleLogin}>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="user name"
              value={username}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              value={password}
            />
            <button type="submit">login</button>
          </form>
          
      
    </div>
  );
};

export default Form;
