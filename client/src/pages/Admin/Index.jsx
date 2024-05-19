import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomeAdmin from './HomeAdmin'
import Users from './Users'
import UserDetails from './UserDetails'
import AddUser from './AddUserForm'
import Chat from './Chat'

const IndexAdmin = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Layout><HomeAdmin /></Layout>} />
      <Route path="/users" element={<Layout><Users /></Layout>} />
      <Route path="/userdetails/:id" element={<Layout><UserDetails /></Layout>} />
      <Route path="/adduser" element={<Layout><AddUser /></Layout>} />
      <Route path="/chat" element={<Layout><Chat /></Layout>} />
    </Routes>
  )
}

export default IndexAdmin
