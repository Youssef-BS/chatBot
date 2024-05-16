import React, { useState } from 'react';
import axios from 'axios';
import './addUserForm.css'; 

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    interactionHistory: '',
    contextualData: '',
    analytics: '',
    password: '',
    admin: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNewUser({ ...newUser, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8089/api/users', newUser);
      console.log('User added successfully');
      setNewUser({
        username: '',
        email: '',
        interactionHistory: '',
        contextualData: '',
        analytics: '',
        password: '',
        admin: false
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="container-user mt-5">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-user">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" name="username" value={newUser.username} onChange={handleInputChange} />
        </div>
        <div className="form-group-user">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={newUser.email} onChange={handleInputChange} />
        </div>
        <div className="form-group-user">
          <label htmlFor="interactionHistory">Interaction History</label>
          <input type="text" className="form-control" id="interactionHistory" name="interactionHistory" value={newUser.interactionHistory} onChange={handleInputChange} />
        </div>
        <div className="form-group-user">
          <label htmlFor="contextualData">Contextual Data</label>
          <input type="text" className="form-control" id="contextualData" name="contextualData" value={newUser.contextualData} onChange={handleInputChange} />
        </div>
        <div className="form-group-user">
          <label htmlFor="analytics">Analytics</label>
          <input type="text" className="form-control" id="analytics" name="analytics" value={newUser.analytics} onChange={handleInputChange} />
        </div>
        <div className="form-group-user">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={newUser.password} onChange={handleInputChange} />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="admin" name="admin" checked={newUser.admin} onChange={handleCheckboxChange} />
          <label className="form-check-label" htmlFor="admin">Admin</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
