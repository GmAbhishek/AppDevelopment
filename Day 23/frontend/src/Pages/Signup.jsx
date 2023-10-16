import React, { useState } from 'react'
import { Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import '../Assert/css/Signup.css';
import { login } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const formHandler = async(e) => {
    e.preventDefault();
    // Reset all previous error messages
    setNameError('');
    setPhoneError('');
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (username.trim() === '') {
      setNameError('Name is required.');
      isValid = false;
    }

    if (mobileno.trim() === '' || !/^\d{10}$/.test(mobileno)) {
      setPhoneError('Phone number is invalid.');
      isValid = false;
    }
    if (emailid.trim() === '' || !/\S+@\S+\.\S+/.test(emailid)) {
      setEmailError('Email is invalid.');
      isValid = false;
    }

    if (password.trim() === '' || password.length < 8 || password.length > 16) {
      setPasswordError('Password must be between 8 and 16 characters.');
      isValid = false;
    }

    if (username && mobileno && emailid && password && isValid) {
      await axios.post("http://localhost:8080/auth/register",{username,emailid,mobileno
      ,password});
      dispatch(login(username));
      navigate('/login');

    }

  }
  return (
    <>
    <div className='body1'>
    <div className='layer1'>
      <div className='rectangle1'></div>
      <div className='signup'>
        <b>SIGNUP</b></div>

      <div className='form1'>
        <form onSubmit={formHandler}>

          UserName: <input Type="text30" value={username} placeholder="Name" onChange={(e) => setUserName(e.target.value)} /><br /><br />
          <div>
            <center>
              {nameError && username.length === 0 ?(
                <label style={{ color: 'Red', fontSize:'20px'}}>{nameError}</label> ): ""}
            </center></div>
          MobileNo: <input type="text15" value={mobileno} placeholder="mobile no" maxLength={10} onChange={(e) => setMobileNo(e.target.value)} /><br /><br />
          <div>
            <center>
              {phoneError && mobileno.length === 0 ?(
                <label style={{ color: 'Red',fontSize:'20px' }}>{phoneError}</label>) : ""}
            </center></div>
          Email Id: <input type="text100" value={emailid} placeholder="Email-id" onChange={(e) => setEmailid(e.target.value)} /><br /><br />
          <div>
            <center>
              {emailError && emailid.length === 0 ?(
                <label style={{ color: 'Red',fontSize:'20px' }}>{emailError}</label>) : ""}
            </center></div>
          Password: <input type="password" value={password} placeholder="Password" minLength={8} maxLength={16} onChange={(e) => setPassword(e.target.value)} /><br />
          <div>
          <center>
              {passwordError && password.length === 0 ?(
                <label style={{ color: 'Red',fontSize:'20px' }}>{passwordError}</label>) : ""}
          </center></div>
          <br />
          <h5><Button type="submit" class='but'>REGISTER</Button></h5><br />
        </form></div>
        </div>
    </div>
    </>

  )
}