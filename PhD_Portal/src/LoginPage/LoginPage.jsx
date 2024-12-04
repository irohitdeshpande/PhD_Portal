import React from 'react'
import './LoginPage.css'
import SomaiyaLogo from '../assets/SomaiyaLogo.jpg';
import Ganesh from '../assets/Ganesh.png'
const LoginPage = () => {
  return (
    <>
      <div className='LoginPage'>
        <div className='LoginSide'>
            <img src={SomaiyaLogo} alt="Somaiya Logo" className='SomaiyaLogo'/>
            Login to Portal!
            <button className='LoginBtn'>Login</button>
        </div>
        <div className='ImageSide'>
          <img src={Ganesh} alt="Ganesh img" className='GaneshImg'/>
        </div>

      </div>
    </>
  )
}

export default LoginPage
