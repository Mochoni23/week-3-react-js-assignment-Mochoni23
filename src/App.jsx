import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Tasks from './pages/tasks';
import ApiData from './pages/apiData';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/tasks" element={<tasks />} />
          <Route path="/api" element={<apiData />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;