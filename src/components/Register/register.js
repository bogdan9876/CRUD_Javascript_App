import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    localStorage.setItem('registeredUser', email);
    localStorage.setItem('registeredPassword', password);
    navigate('/home');
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p>Already have an account? <span onClick={() => navigate('/')}>Login</span></p>
    </div>
  );
};

export default Register;