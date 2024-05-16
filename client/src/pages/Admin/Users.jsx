import React , {useState , useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import "./users.css"

const Users = () => {

  const [users , setUsers] = useState([]);

  useEffect(()=> {
   const getUsers = async ()=> {
    const res = await axios.get("http://localhost:8089/api/users") ; 
    setUsers(res.data);
   }
   getUsers();
  }); 

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8089/api/users/${id}`);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
    <button className="addNewUserBtn">Add New User</button>
    <h1>Users</h1>
    <div className='container'>
        {users.map((user , index) => (
            <div className='user'>
                <p>User number : <b>{index+1}</b></p>
                <p><b>User Name : </b>{user.username}</p>
                <p><b>Email : </b>{user.email}</p>
                <p><b>Interaction History : </b>{user.interactionHistory}</p>
                <p><b>Data : </b>{user.contextualData}</p>
                <p><b>Analystics : </b>{user.analytics}</p>
                <p><b>Password : </b>{user.password}</p>
                <div className='action'>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
                <Link to={`/admin/userdetails/${user._id}`}><button>Show</button></Link>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Users