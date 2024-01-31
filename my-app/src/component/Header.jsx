import React from "react";
import "./Header.css";

const Header = ({ isLoggedIn, setLoggedIn }) => {
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="header">
      <p>dashboard</p>
      {isLoggedIn ? (
        <p>You are logged in</p>
      ) : (
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
