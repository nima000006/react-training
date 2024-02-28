// Header.js
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  // Fetch the username from local storage
  const username = localStorage.getItem("username");

  // Check if the username exists
  const isLoggedIn = username !== null;

  return (
    <div className="header">
      <p>dashboard</p>
      {isLoggedIn ? (
        <Link to={{
          pathname: "/profile",
          state: { username: username, password: localStorage.getItem("password") }
        }}>
          {username}
        </Link>
      ) : (
        <p>!First login please</p>
      )}
    </div>
  );
};

export default Header;
