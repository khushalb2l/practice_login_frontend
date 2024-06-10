import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/login`, { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
    } catch (error) {
      console.log('Error while logging in:', error);
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  if (isLoggedIn) {
    return <p>You are already logged in!</p>;
  }

  return (
    <div>
      <h2>Welcome to the Login page!</h2>
      <input placeholder="Enter Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Enter Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
    </div>
  );
};

export default Login;
