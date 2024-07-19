import React, { useState } from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4040/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred.');
      });
  };

  return (
    <div className="contcontainer">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Route Mates Inc.</div>
            <div className="text-two">Whitefield, Bangalore</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+91 7892789166</div>
            <div className="text-one">+91 8660050438</div>
            <div className="text-two">+91 9686854213</div>
            <div className="text-two">+91 7204378242</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">diyaryahande@gmail.com</div>
            <div className="text-two">hamsixhamsi44@gmail.com</div>
            <div className="text-two">abinaya.arun3@gmail.com</div>
            <div className="text-two">chinmayirm.04@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <p>Let us know if you are having any troubles logging in or registering.</p>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box message-box">
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="Enter your message"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button">
              <input type="submit" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;