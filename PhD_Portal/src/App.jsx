import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './LoginPage/LoginPage.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
