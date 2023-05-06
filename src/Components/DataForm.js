import React, { useState } from 'react';
import axios from 'axios';

const DataForm = () => {
  const [formData, setFormData] = useState({
    property1: '',
    property2: ''
  });
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('http://91.203.132.6/handleData', {data: formData})
      .then(response => {
        setSuccessMsg('Data submitted successfully.');
        setFormData({property1: '', property2: ''});
      })
      .catch(error => {
        setErrorMsg('Failed to submit data. Please try again later.');
      });
  };

  return (
    <div className="form-container">
      <h2>Submit Data</h2>
      {successMsg && <div className="success-msg">{successMsg}</div>}
      {errorMsg && <div className="error-msg">{errorMsg}</div>}
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="property1">Property 1:</label>
          <input type="text" name="property1" id="property1" onChange={handleInputChange} value={formData.property1} required />
        </div>
        <div className="form-group">
          <label htmlFor="property2">Property 2:</label>
          <input type="text" name="property2" id="property2" onChange={handleInputChange} value={formData.property2} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DataForm;
