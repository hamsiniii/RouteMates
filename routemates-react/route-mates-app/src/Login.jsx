import React, { useState } from 'react';
import './login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Register from './Register'; 

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const handleSuccessfulRegister=()=>{
    setShowRegister(false);
    setShowLogin(true);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: new URLSearchParams({ email, password }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem('username', data.username);
          localStorage.setItem('college', data.college);
          localStorage.setItem('email', data.email);
          alert(data.message);
          props.handleSuccessfulLogin(data.username);
        } else {
          alert(data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while logging in.');
      });
  };

  const handleSignupClick = () => {
    setShowRegister(true);
    setShowLogin(false); // Hide login form when Signup is clicked
  };

  return (
        <div>
        {showLogin && ( // Conditionally render the login section
        <div className="container">
        <div className="loginwrapper"> 
        <div>
            <div className="title"><span>Login Form</span></div>
            <form onSubmit={handleFormSubmit}>
              <div className="row">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="row">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="row button">
                <input type="submit" value="login" />
              </div>
              <div className="signup-link">Not a member? <a href="#" onClick={handleSignupClick}>Signup now</a></div>
            </form>
          </div>
          </div>
          </div>
        )}
        {showRegister && <Register handleSuccessfulRegister={handleSuccessfulRegister} / >} {/* Render Register component if showRegister is true */}
        </div>
  );
};

export default Login;
