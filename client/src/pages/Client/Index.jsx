import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomeClient from './HomeClient'

const IndexClient = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout><HomeClient /></Layout>} />
      </Routes>
    </Router>
  )
}

export default IndexClient
