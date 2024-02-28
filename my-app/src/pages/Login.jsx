import React, { useState } from 'react';
import '../component/Form.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username) {
      setUsernameError('Please fill username');
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Please fill password');
    } else {
      setPasswordError('');
    }

    if (username && password) {
      // Save username and password to localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      navigate('/');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          value={username}
        />
        {usernameError && <span className="error">{usernameError}</span>}
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          value={password}
        />
        {passwordError && <span className="error">{passwordError}</span>}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
