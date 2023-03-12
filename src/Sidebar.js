import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
const recentItem = (topic) => {
  <div className='sidebar__recentItem'>
    <span className='sidebar__hash'>#</span>
    <p>{topic}</p>
  
  </div>
};


  return (
    <div className='sidebar'>    
        <div className='sidebar__top'>
          <img src="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt=""/>
          <Avatar className='sidebar__Avatar'/>
          <h2>Ahmet Yanık</h2>
          <h4>Full stack developer</h4>
        </div>

        <div className='sidebar__stats'>
          <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'> 2,543 </p>
          </div>
          <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>   2,448   </p>
          </div>
          </div>



          <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem('python')}
            {recentItem('django')}
            {recentItem('front-end')}
            {recentItem('back-end')}
        </div>
        </div>
  )
}

export default Sidebar