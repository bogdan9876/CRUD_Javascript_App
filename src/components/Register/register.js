import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleRegister = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    
    if (password !== retypePassword) {
      alert("Passwords don't match");
      return;
    }

    localStorage.setItem('registeredUser', email);
    localStorage.setItem('registeredPassword', password);
    navigate('/home');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className='register-container2'>
        <input className="register-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="register-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="register-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className="register-input" type="password" placeholder="Retype Password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
      </div>
      <button className="register-button" onClick={handleRegister}>Register</button>
      <p className='register-text'>Already a member? <span onClick={() => navigate('/')}>Login</span></p>
    </div>
  );
};

export default Register;
