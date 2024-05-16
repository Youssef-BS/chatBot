import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomeAdmin from './HomeAdmin'
import Users from './Users'

const IndexAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomeAdmin /></Layout>} />
      <Route path="/users" element={<Layout><Users /></Layout>} />
    </Routes>
  )
}

export default IndexAdmin
