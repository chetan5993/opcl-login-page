import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import './App.css';

import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegistrationForm';
import DataForm from './Components/DataForm';

const App = () => {
  const [data, setData] = useState({
    property1: '',
    property2: ''
  });

  const handleDataSubmit = (e) => {
    e.preventDefault();
    axios.post('http://91.203.132.6/handleData', {data})
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  const handleDataInputChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  return (
    <Router>
  <Routes>
    <Route path="/" element={<LoginForm />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/data" element={<DataForm onSubmit={handleDataSubmit} onChange={handleDataInputChange} data={data} />} />
  </Routes>
</Router>
  );
};

export default App;
