import React from 'react'
import './Dashboard.css'
import noti from '../../assets/noti.png'
import prof from '../../assets/prof.png'

const Dashboard = () => {
  return (
    <>
      <div className='navBar'>
        <div className='hero'>
          Student Dashboard
        </div>
        <div className="buttons">
          <button className='notiBtn'><img src={noti} alt="noti" /></button>
          <button className='profBtn'><img src={prof} alt="prof" /></button>
        </div>
      </div>

      <div className='noticeBoard'>
        <p><b>Notice Board</b></p>
        <p>Sample Text</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, temporibus.</p>
     </div>

      <div className='dashBoardMain'>
        <div className='Thesis'>
          <div className='mainThesis'>
            Thesis
          </div>

          <div className='progress'>
            Progress Report
          </div>
        </div>


        <div className='Mentors'>
          <p>Mentors</p>
          <div className='teachers'>
            <div className='newTeach'>
              <img src={prof} alt="profile pic" />
              <p>Mentor</p>
            </div>

            <div className='newTeach'>
              <img src={prof} alt="profile pic" />
              <p>Mentor</p>
            </div>

            <div className='newTeach'>
              <img src={prof} alt="profile pic" />
              <p>Mentor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
