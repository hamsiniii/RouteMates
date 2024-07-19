import React, { useState } from 'react';
import './register.css'; // Import your CSS styles

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [collegeID, setCollegeID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    fetch('http://localhost:3000/register', {
      method: 'POST',
      body: new URLSearchParams({ name, email, phone, collegeName, collegeID, password }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(data.message);
          props.handleSuccessfulRegister(); 
        } else {
          alert(data.message); 
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during registration.');
      });
  };

  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-box">
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-box">
          <input type="tel" placeholder="Enter Your Phone Number" pattern="[0-9]{10}" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="input-box">
          <select id="collegeName" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} required>
            <option value="" disabled selected>Select College</option>
            <option value="PESU RR">PESU RR</option>
            <option value="BMSCE">BMSCE</option>
            <option value="PESU EC">PESU EC</option>
            <option value="RVCE">RVCE</option>
          </select>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter College ID" value={collegeID} onChange={(e) => setCollegeID(e.target.value)} required />
        </div>
        <div className="input-box">
          <input type="password" id="createpass" placeholder="Create password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="input-box">
          <input type="password" id="confirmpass" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <div className="policy">
          <input type="checkbox" required />
          <h3>I accept all terms & condition</h3>
        </div>
        <div className="input-box button">
          <input type="submit" value="Register Now" />
        </div>
        <div className="text">
          <h3>Already have an account? <a onClick={props.handleSuccessfulRegister}>Login now</a></h3>
        </div>
      </form>
    </div>
  );
};

export default Register;
