import React, { useState } from "react";
import "./Form.css";

const Form = ({ isLoggedIn, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic goes here
    setLoggedIn(!isLoggedIn);

    // Reset the form after submission
    setUsername("");
    setPassword("");
  };

  return (
    <div className="form-container">
      {isLoggedIn ? (
        <p>You are logged in</p>
      ) : (
        <>
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
          <p>{`Username: ${username} - Password: ${password}`}</p>
        </>
      )}
    </div>
  );
};

export default Form;
