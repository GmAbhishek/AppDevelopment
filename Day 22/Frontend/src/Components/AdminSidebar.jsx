import React from 'react'
import '../Assert/css/AdminSidebar.css'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/userSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import PaymentIcon from '@mui/icons-material/Payment';
function AdminSidebar() {
  const dispatch=useDispatch();
  const nav=useNavigate();
  
  const logouthandler=()=>{
    dispatch(logout())
    nav("/")
  }
  const dashboard1=()=>{
    nav("/admindash")
  }


  const reservedlist=()=>{
    nav("/list")
  }
  const billing=()=>{
    nav("/billstatus");
  }
  return (
    <>
    <Navbar/>
    <div className='left-bar1'>
    <div className='left-bar-container1'>
    <Button className='left-bar-btn1' onClick={dashboard1}> <SpaceDashboardIcon sx={{color:blue[900]}} fontSize='large'/></Button>
   <div className='dashboard'>Dashboard</div>
   <Button className='left-bar-btn' onClick={billing}> <PaymentIcon sx={{color:blue[900]}} fontSize='large' /></Button>
   <div className='travel'>Billing</div>
    <Button className='left-bar-btn1' onClick={reservedlist}> <ReceiptIcon sx={{color:blue[900]}} fontSize='large' /></Button>
    <div className='travel'>Reservation</div>
    <Button className='left-bar-btn1' onClick={logouthandler}><LogoutIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='logout'>Logout</div>
    </div>
    </div> 
    </>
    )
}

export default AdminSidebar