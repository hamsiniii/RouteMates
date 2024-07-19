import React, { useState, useEffect } from 'react';
import './createGroup.css'; 

export default function CreateGroup(props) {
  const [name, setName] = useState('');
  const [leader, setLeader] = useState('');
  const [location, setLocation] = useState('');
  const [college, setCollege] = useState('');

  const getDataFromLocalStorage = () => {
    const storedUsername = localStorage.getItem('username');
    const storedCollege = localStorage.getItem('college');

    if (storedUsername) {
      setLeader(storedUsername); 
    }

    if (storedCollege) {
      setCollege(storedCollege); 
    }
  };

  useEffect(() => {
    getDataFromLocalStorage(); 
  }, []);

  const collectData = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch('http://localhost:8080/api/groups', {
        method: 'POST',
        body: JSON.stringify({ name, leader, location, college }),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (result.ok) {
        alert('Group created successfully');
        setName('');
        setLeader('');
        setLocation('');
        setCollege('');
        props.handleCreateDone();
      } else {
        alert('Failed to create group');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the group');
    }
  };

  return (
    <div className='create-group-container'>
      <form onSubmit={collectData}>
        <h1 className='text-center pt-3'>Create Group</h1>
        <div className='mb-3 mt-3'>
          <label className='form-label'>Group Name</label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Group Leader</label>
          <input
            type='text'
            className='form-control'
            value={leader}
            onChange={(e) => setLeader(e.target.value)}
            readOnly
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Location</label>
          <input
            type='text'
            className='form-control'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>College</label>
          <input
            type='text'
            className='form-control'
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            readOnly
          />
        </div>
        <button type='submit' className='btn btn-success'>
          Create Group
        </button>
      </form>
    </div>
  );
}
