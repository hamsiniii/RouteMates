import React, { useState } from 'react';
import './profile.css';
const Profile = () => {
  const [name] = useState(localStorage.getItem('username'));
  const [email] = useState(localStorage.getItem('email'));
  const [college] = useState(localStorage.getItem('college'));

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPassword = event.target.password.value;
    const currentPassword = event.target.currentPassword.value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = event.target.address.value;
    const emergencyContacts = event.target.emergencyContacts.value;

    fetch('http://localhost:3000/update-profile', {
      method: 'POST',
      body: new URLSearchParams({
        email,
        password: newPassword,
        currentPassword,
        gender,
        address,
        emergencyContacts,
      }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Handle success (e.g., show a success message)
          alert(data.message);
        } else {
          // Handle error (e.g., show an error message)
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while updating the profile.');
      });
  };

  return (
    <div className="profilewrap">
      <h2>Edit My Profile</h2>
      <p>Name: <span id="name">{name}</span></p>
      <p>Email: <span id="email">{email}</span></p>
      <p>College Name: <span id="college">{college}</span></p>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="password" id="password" name="password" placeholder="New Password" /><br />
        </div>
        <div className="input-box">
          <input type="password" id="currentPassword" name="currentPassword" placeholder="Current Password" required /><br />
        </div>
        <div className='input-select'>
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="Male" />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female" />
        <label htmlFor="female">Female</label>
        <input type="radio" id="other" name="gender" value="Other" />
        <label htmlFor="other">Other</label><br />
        </div>
        <div className="input-box">
          <input type="textbox" id="address" name="address" placeholder="Address" required /><br />
        </div>
        <div className="input-box">
          <input type="text" id="emergencyContacts" name="emergencyContacts" placeholder="Emergency Contacts" required /><br />
        </div>
        <div className="input-box button">
          <input type="submit" value="Update Profile" />
        </div>
      </form>
    </div>
  );
};

export default Profile;
