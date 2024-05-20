import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./users.css";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("http://localhost:8089/api/users");
      setUsers(res.data);
    };
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8089/api/users/${id}`);
      setUsers(users.filter(user => user._id !== id)); // Update state after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleNavigate = (id) => {
    navigate(`/admin/userdetails/${id}`);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Users</h1>
      <div className="row">
        {users.map((user, index) => (
          <div className="col-md-4 mb-4" key={user._id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">User number: <b>{index + 1}</b></h5>
                <p className="card-text"><b>User Name: </b>{user.username}</p>
                <p className="card-text"><b>Email: </b>{user.email}</p>
                <p className="card-text"><b>Interaction History: </b>{user.interactionHistory}</p>
                <p className="card-text"><b>Data: </b>{user.contextualData}</p>
                <p className="card-text"><b>Analytics: </b>{user.analytics}</p>
                <p className="card-text"><b>Password: </b>{user.password}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                  <button className="btn btn-primary" onClick={() => handleNavigate(user._id)}>Show</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
