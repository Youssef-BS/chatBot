import React, { useEffect, useState } from 'react';
import { Visibility } from '@material-ui/icons';
import "./witSm.css";
import axios from 'axios';

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8089/api/users');
        // Retrieve only the latest 5 users
        const latestUsers = response.data.slice(0, 5);
        setUsers(latestUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Latest Users</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.photo || "https://via.placeholder.com/150"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">{user.email}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
