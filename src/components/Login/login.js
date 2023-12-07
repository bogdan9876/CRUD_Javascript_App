import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

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
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <input className="login-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className="login-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button className="login-button" onClick={handleLogin}>Login</button>
      <p className='login-text'>Not a member? <span onClick={() => navigate('/register')}>Register</span></p>
    </div>
  );
};

export default Login;
