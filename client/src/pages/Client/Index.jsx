import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomeClient from './HomeClient'
import Profile from './Profile'

const IndexClient = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomeClient /></Layout>} />
      <Route path="/profile" element={<Layout><Profile /></Layout>} />
    </Routes>
  )
}

export default IndexClient
