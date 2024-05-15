import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomeClient from './HomeClient'

const IndexClient = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout><HomeClient /></Layout>} />
    </Routes>
  )
}

export default IndexClient
