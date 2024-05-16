import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './userDetails.css'; 

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const [message , setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8089/api/users/${id}`);
        setUser(res.data);
        setEditedUser(res.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    getUser();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8089/api/users/${id}`, editedUser);
      setUser(editedUser);
      setMessage('User updated successfully');
      console.log('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const { username, email, interactionHistory, contextualData, analytics, password, admin } = user;

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <form className="user-details-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" name="username" value={editedUser.username} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={editedUser.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="interactionHistory">Interaction History</label>
          <input type="text" className="form-control" id="interactionHistory" name="interactionHistory" value={editedUser.interactionHistory} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="contextualData">Contextual Data</label>
          <input type="text" className="form-control" id="contextualData" name="contextualData" value={editedUser.contextualData} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="analytics">Analytics</label>
          <input type="text" className="form-control" id="analytics" name="analytics" value={editedUser.analytics} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={editedUser.password} onChange={handleInputChange} />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="admin" name="admin" checked={editedUser.admin} onChange={handleInputChange} />
          <label className="form-check-label" htmlFor="admin">Admin</label>
        </div>
        <p style={{color : "green"}}>{message}</p>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default UserDetails;
