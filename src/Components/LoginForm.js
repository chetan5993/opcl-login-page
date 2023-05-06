import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('http://91.203.132.6/login', formData)
      .then(response => {
        // handle successful login
        console.log(response);
        window.location.href = 'https://ocpl.tech/';
      })
      .catch(error => {
        setErrorMsg('Invalid email or password');
      });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {errorMsg && <div className="error-msg">{errorMsg}</div>}
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={handleInputChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="link-container">
        <Link to="/register">Don't have an account? Register here.</Link>
      </div>
    </div>
  );
};

export default LoginForm;
