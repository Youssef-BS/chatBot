import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomeAdmin from './HomeAdmin'
import Users from './Users'
import UserDetails from './UserDetails'

const IndexAdmin = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Layout><HomeAdmin /></Layout>} />
      <Route path="/users" element={<Layout><Users /></Layout>} />
      <Route path="/userdetails/:id" element={<Layout><UserDetails /></Layout>} />
    </Routes>
  )
}

export default IndexAdmin
