import React, { useEffect, useState } from 'react';
import './styles.css'; 
import CreateGroup from './CreateGroup';
const MyGroups = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [groups, setGroups] = useState([]);
  const [showMyGroups, setShowMyGroups] = useState(true);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const collegeFilter = localStorage.getItem('college');

  const handleSearch = () => {
    const apiUrl = `http://localhost:8080/api/groups?search=${encodeURIComponent(searchTerm)}&college=${encodeURIComponent(collegeFilter)}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setGroups(data.groups || []);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  const handleCreateClick = () => {
    setShowCreateGroup(true);
    setShowMyGroups(false); 
  };
  const handleCreateDone = () => {
    setShowCreateGroup(false);
    setShowMyGroups(true); 
  };

  useEffect(() => {
    handleSearch();
  }, []); 

  const handleJoinGroup = (groupId) => {
    const memberName = localStorage.getItem('username');
    if (memberName) {
      fetch(`http://localhost:8080/api/add-member/${groupId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ memberName }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            alert(data.message);
          } else {
            alert('Joined Successfully!');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      {showMyGroups&&(
    <page>
      <div className="group">
        <h3>Join Groups</h3>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="entry"
          id="search-input"
          placeholder="Search by Group Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="searchbt" id="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div id="results-container">
        <br />
        {groups.length === 0 ? (
          <h1>What are you waiting for? Join a group Now!</h1>
        ) : (
          groups.map((group, index) => (
            <div className="group-result" key={index}>
              <h4>{group.name}</h4>
              <p>Leader: {group.leader}</p>
              <p>Location: {group.location}</p>
              <p>College: {group.college}</p>
              <p>Members: {group.members.join(', ')}</p>
              <button
                className="join-button"
                onClick={() => handleJoinGroup(group._id)} 
              >
                Join Group
              </button>
              <br />
              <br />
            </div>
          ))
        )}
      </div>
      <div className="create-group-prompt">
        <p>Not interested in current groups?</p>
        <button>
          <a  onClick={handleCreateClick}>Create one!</a>
        </button>
      </div>
      
    </page>)}
    {showCreateGroup&&<CreateGroup handleCreateDone={handleCreateDone}/>}
    </div>
  );
};

export default MyGroups;
