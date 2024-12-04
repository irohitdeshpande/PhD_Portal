import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/dashboard'
           element={
            <div style={{ display: 'flex', height: '100vh' }}>
              <div style={{ width: '350px', background: '#f0f0f0' }}>
                <Sidebar />
              </div>
              <div style={{ flex: 1, padding: '20px' }}>
                <Dashboard />
              </div>
            </div>
          }></Route>
      

        </Routes>
      </Router>
    </>
  )
}

export default App
