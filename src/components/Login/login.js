import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const registeredUser = localStorage.getItem('registeredUser');
    const registeredPassword = localStorage.getItem('registeredPassword');

    if (email === registeredUser && password === registeredPassword) {
      localStorage.setItem('loggedInUser', email);
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <span onClick={() => navigate('/register')}>Register</span></p>
    </div>
  );
};

export default Login;