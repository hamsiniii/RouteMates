import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS styles
import chatIcon from './chat-icon.png';
import Login from './Login'; // Import the Login component
import MyGroups from './MyGroups';
import Feedback from './Feedback';
import Profile from './Profile';
import ChatMain from './ChatMain'; // Import the Chat component
import FAQ from './FAQ';
import Maps from './Maps';
import ContactUs from './Contact';
const Homepage = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const [showMyGroups, setShowMyGroups] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMaps, setShowMaps] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [userName, setUserName] = useState('');

  const showAlert = () => {
    alert("Login to access.");
  };
  const handleLinkClick = (e) => {
    if (!userIsLoggedIn) {
      e.preventDefault();
      showAlert();
    }
  };

  const handleLoginLinkClick = () => {
    if (!userIsLoggedIn) {
      setShowLogin(true);
      setShowMyGroups(false);
      setShowFeedback(false);
      setShowChat(false);
      setShowProfile(false);
      setShowFAQ(false);
      setShowContact(false);

    }
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem('username');
    if (storedUserName) {
      setUserName(storedUserName);
      setUserIsLoggedIn(true);
    }
  }, []);
  const handleChatIconClick = (e) => {
    e.preventDefault();
    if (!userIsLoggedIn) {
      showAlert();
    } else {
      setShowChat(true);
      setShowOthers(true);
      setShowMyGroups(false);
      setShowFeedback(false);
      setShowLogin(false);
      setShowMaps(false);
      setShowContact(false);


    }
  };
  const handleSuccessfulLogin = (username) => {
    setUserName(username);
    setUserIsLoggedIn(true);
    setShowLogin(false);
    setShowChat(false);
    setShowProfile(false);
    setShowFeedback(false);
    setShowFAQ(false);
    setShowMaps(false);
    setShowContact(false);
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear local storage on logout
    setUserName('');
    setUserIsLoggedIn(false);
    setShowOthers(false);
  };
  const visibilitysetter = () => {
    setShowOthers(true);
    setShowMyGroups(true);
    setShowFeedback(false);
    setShowChat(false);
    setShowFAQ(false);
    setShowProfile(false);
    setShowMaps(false);
    setShowContact(false);
  };
  const visibilitysetter2 = () => {
    setShowOthers(true);
    setShowFeedback(true);
    setShowMyGroups(false);
    setShowChat(false);
    setShowFAQ(false);
    setShowProfile(false);
    setShowMaps(false);
    setShowContact(false);
  };
  const visibilitysetter3 = () => {
    setShowFAQ(true);
    setShowOthers(true);
    setShowMyGroups(false);
    setShowChat(false);
    setShowFeedback(false);
    setShowProfile(false);
    setShowMaps(false);
    setShowContact(false);
  };
  const visibilitysetter4 = () => {
    setShowProfile(true);
    setShowOthers(true);
    setShowMyGroups(false);
    setShowChat(false);
    setShowFeedback(false);
    setShowFAQ(false);
    setShowMaps(false);
    setShowContact(false);
  };
  const visibilitysetter5 = () => {
    setShowMaps(true);
    setShowOthers(true);
    setShowMyGroups(false);
    setShowChat(false);
    setShowProfile(false);
    setShowFeedback(false);
    setShowFAQ(false);
    setShowContact(false);
  };
  const visibilitysetter6 = () => {
    setShowContact(true);
    setShowOthers(true);
    setShowMyGroups(false);
    setShowChat(false);
    setShowProfile(false);
    setShowFeedback(false);
    setShowFAQ(false);
    setShowMaps(false);
  };
  const comehome = () => {
    setShowOthers(false);
    setShowMyGroups(false);
    setShowChat(false);
    setShowFeedback(false);
    setShowFAQ(false);
    setShowProfile(false);
    setShowLogin(false);
    setShowMaps(false);
    setShowContact(false);
  };
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">RouteMates</h1>
        <ul className="nav-links">
          <li><a href="#" onClick={comehome}>Home</a></li>
          {userIsLoggedIn ? (
            <li>
              <a onClick={visibilitysetter}>Join Groups</a>
            </li>
          ) : (
            <li>
              <a href="#" onClick={handleLinkClick}>My Groups</a>
            </li>
          )}
          {userIsLoggedIn ? (
            <li>
              <a onClick={visibilitysetter5}>Our Map</a>
            </li>
          ) : (
            <li>
              <a href="#" onClick={handleLinkClick}>Our Map</a>
            </li>
          )}
          {userIsLoggedIn ? (
            <li>
              <a onClick={visibilitysetter4}>My Profile</a>
            </li>
          ) : (
            <li>
              <a href="#" onClick={handleLinkClick}>My Profile</a>
            </li>
          )}
          {userIsLoggedIn ? (
            <li>
              <a onClick={visibilitysetter6}>Contact</a>
            </li>
          ) : (
            <li>
              <a href="#" onClick={visibilitysetter6}>Contact</a>
            </li>
          )}          {userIsLoggedIn ? (
            <li>
              <a onClick={visibilitysetter3}>FAQ</a>
            </li>
          ) : (
            <li>
              <a href="#" onClick={visibilitysetter3}>FAQ</a>
            </li>
          )}
          {userIsLoggedIn ? (
            <li>
              <a onClick={visibilitysetter2}>Feedback</a>
            </li>
          ) : (
            <li>
              <a href="#" onClick={handleLinkClick}>Feedback</a>
            </li>
          )}
          {userIsLoggedIn ? (
            <li className='login'>
              <a href="#" onClick={handleLogout}>{userName} (Logout)</a>
            </li>
          ) : (
            <li className='login'>
              <a href="#" onClick={handleLoginLinkClick}>Login</a>
            </li>
          )}
        </ul>
      </nav>
      <header>
        {!showOthers && (!showLogin && (
          <div className="headertext">
            <h2>Welcome to RouteMates!</h2>
            <p>Student Travel, Simplified!</p>
            <p>RouteMates is your go-to app for students seeking affordable, safe, and sociable travel.</p>
            <p>Connect, share costs, and embark on memorable journeys with fellow students.</p>
            <p>Join the community now and make every trip an adventure!</p>
          </div>
        ))}
        {showLogin && (
          <Login
            handleSuccessfulLogin={handleSuccessfulLogin} // Pass handleSuccessfulLogin as a prop
            showAlert={showAlert}
          />
        )}
        {userIsLoggedIn && showMyGroups && (
          <MyGroups />
        )}
        {userIsLoggedIn && showFeedback && (
          <Feedback />
        )}
        {showFAQ && (
          <FAQ />
        )}
        {userIsLoggedIn && showProfile && (
          <Profile />
        )}
        { showContact && (
          <ContactUs />
        )}
        {userIsLoggedIn && showMaps && (
          <div className='map'><Maps /></div>
        )}
        {userIsLoggedIn && showChat && (
          <div className="chat-container">
            <ChatMain userName={userName} />
          </div>
        )}
        <div className="chat-icon">
          <a href="#" onClick={(e) => handleChatIconClick(e)}>
            <img src={chatIcon} alt="chat" width="40" height="40" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Homepage;
