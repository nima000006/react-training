// Header.js
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setLoggedIn, inputValue }) => {
  return (
    <div className="header">
      <p>dashboard</p>
      {isLoggedIn ? (
        <Link to={{
          pathname: "/profile",
          state: { username: inputValue, password: localStorage.getItem("password") }
        }}>
          {inputValue}
        </Link>
      ) : (
        <p>!First login please</p>
      )}
    </div>
  );
};

export default Header;
