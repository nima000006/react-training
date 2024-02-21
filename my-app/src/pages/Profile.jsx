// Profile.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../index.css";
import "../component/Form.css";

const Profile = () => {
  const location = useLocation();
  const { username: initialUsername = "", password: initialPassword = "" } = location.state || {};
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Fetch the previous values from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    
    // Set the initial state with the values fetched from localStorage
    setUsername(storedUsername || initialUsername);
    setPassword(storedPassword || initialPassword);
  }, [initialUsername, initialPassword]);

  const handleEdit = (e) => {
    e.preventDefault();

    // Update username and password in localStorage
    const newUsername = e.target.elements.username.value;
    const newPassword = e.target.elements.password.value;
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);

    // Update state with new values
    setUsername(newUsername);
    setPassword(newPassword);
  };

  return (
    <form className="form-container" style={{ marginTop: "50px" }} onSubmit={handleEdit}>
      <p>profile</p>
      <input type="text" name="username" defaultValue={username} />
      <input type="password" name="password" defaultValue={password} />
      <button type="submit">edit</button>
    </form>
  );
};

export default Profile;
