import React from 'react'
import { users } from './data'
import "./users.css"

const Users = () => {
  return (
    <>
    <h1>Users</h1>
    <div className='container'>
        {users.map((user , index) => (
            <div className='user'>
                <p>user number : <b>{index+1}</b></p>
                <p><b>User Name : </b>{user.username}</p>
                <p><b>Email : </b>{user.email}</p>
                <p><b>Interaction History : </b>{user.interactionHistory}</p>
                <p><b>Data : </b>{user.contextualData}</p>
                <p><b>Analystics : </b>{user.analytics}</p>
                <p><b>Password : </b>{user.password}</p>
                <div className='action'>
                 <button>Delete</button>
                 <button>Show</button>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Users