import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from "react-router-dom"

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('http://91.203.132.6/register', formData)
      .then(response => {
        console.log(response);
        navigate('/');
      })
      .catch(error => {
        setErrorMsg('Failed to register. Please try again later.');
      });
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
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
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" id="phone" onChange={handleInputChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
