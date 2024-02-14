import React from "react";
import "./Header.css";

const Header = ({ isLoggedIn, setLoggedIn, inputValue}) => {

  return (
    <div className="header">
      <p>dashboard</p>
      {isLoggedIn ? (
        <p>{inputValue}</p>
      ) : (
        <p>!First login please</p>
      )}
    </div>
  );
};

export default Header;
