import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <LoginForm />
      <RegistrationForm />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
