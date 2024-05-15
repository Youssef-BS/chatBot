import React, { useState } from 'react';
import './profile.css'; 

const Profile = ({ userData, onUpdate }) => {
  const [formData, setFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="interactionHistory">Interaction History</label>
      <textarea
        id="interactionHistory"
        name="interactionHistory"
        value={formData.interactionHistory}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="contextualData">Contextual Data</label>
      <textarea
        id="contextualData"
        name="contextualData"
        value={formData.contextualData}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="analytics">Analytics</label>
      <textarea
        id="analytics"
        name="analytics"
        value={formData.analytics}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Update</button>
    </form>
  );
};

export default Profile;
