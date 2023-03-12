import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import WorkIcon from '@mui/icons-material/Work';

function Header() {
  return (
    <div className='header'>

    <div className='header__left'>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
          <div className='header__search'>
            <SearchIcon/>
            <input type='text'/>
          </div>
    </div>
    <div className='header__right'>
      <HeaderOption Icon={HomeIcon}title='home'/>
      <HeaderOption Icon={SupervisorAccountIcon}title='My Network'/>
      <HeaderOption Icon={WorkIcon}title='Jobs'/>
      <HeaderOption Icon={ChatIcon}title='Messaging'/>
      <HeaderOption Icon={NotificationsIcon}title='Notifications'/>
      <HeaderOption avatar='https://avatars.githubusercontent.com/u/73365349?v=4'title='me'/>

    </div>
    </div>
  )
}

export default Header