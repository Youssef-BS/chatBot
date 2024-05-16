import React, { useState, useEffect , useContext} from 'react';
import './profile.css';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';

const Profile = ({ userId }) => {

  const {currentUser} = useContext(AuthContext);
  const [userData, setUserData] = useState({
    username: '',
    interactionHistory: '',
    contextualData: '',
    analytics: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8089/api/users/${currentUser._id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8089/api/users/${currentUser._id}`, userData);
      alert('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={userData.username}
        onChange={handleChange}
      />

      <label htmlFor="interactionHistory">Interaction History</label>
      <textarea
        id="interactionHistory"
        name="interactionHistory"
        value={userData.interactionHistory}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="contextualData">Contextual Data</label>
      <textarea
        id="contextualData"
        name="contextualData"
        value={userData.contextualData}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="analytics">Analytics</label>
      <textarea
        id="analytics"
        name="analytics"
        value={userData.analytics}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />

      <button type="submit">Update</button>
    </form>
  );
};

export default Profile;
