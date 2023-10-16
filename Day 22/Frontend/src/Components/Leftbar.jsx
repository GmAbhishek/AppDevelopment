import { Button } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Assert/css/Leftbar.css';
import { blue } from '@mui/material/colors';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import '../Assert/css/Leftbar.css'
import RoomIcon from '@mui/icons-material/Room';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';

import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
function Leftbar() {
  const dispatch=useDispatch();
  const nav=useNavigate("");
  const logout=()=>{
   
    nav("/")
  }
  const dashboard=()=>{
    nav("/dashboard")
  }
  const about=()=>{
    nav("/about")
  }
  const contact=()=>{
    nav("/contact")
  }
  const home=()=>{
    nav("/home")
  }
  return (
    <div className='left-bar'>
    <div className='left-bar-container'>
    <Button className='left-bar-btn' onClick={home}> <HomeIcon sx={{color:blue[900]}} fontSize='large'/></Button>
   <div className='dashboard'>Home</div>
    <Button className='left-bar-btn' onClick={dashboard}> <SpaceDashboardIcon sx={{color:blue[900]}} fontSize='large'/></Button>
   <div className='dashboard'>Dashboard</div>
   
    <Button className='left-bar-btn' onClick={contact}> <ContactSupportIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='contact'>Contact Us</div>
    <Button className='left-bar-btn' onClick={about}><InfoIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='about'>About</div>
    <Button className='left-bar-btn' onClick={logout}><LogoutIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='logout'>Logout</div>
    </div>
    </div>
  )
}
export default Leftbar