import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom';
import { Button } from '@mui/material';
import '../Assert/css/login.css';
import { login } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
export default function Login() {
  const nav=useNavigate("");
  const[username,setUsername]= useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState(false);
  const dispatch=useDispatch();
  
  const formHandler=async(event)=>
  {
    event.preventDefault();
    try{ if (username === "admin" && password === "admin@123") {
      dispatch(login(username));
      nav("/admindash");
    }
    else if (username.length === 0 && password.length === 0) {
      setError(true);
    } else if (password.length < 8) {
      setError(true);
    } else if (username && password) {
      dispatch(login(username));
      const Response=await axios.post("http://localhost:8080/auth/authenticate",{username,password});
      localStorage.setItem("token", Response.data.token)
      nav("/home");
    }}
    catch(error)
    {
      alert("Incorrect Username and Password.");
    }
    
  
  }
   
return (
  <>
  <div className='body'>
  <div className='layout'>
  <div className='rectangle'></div>
  <div className='login'>
  <b>LOGIN</b></div> 
  <br/>
  <div className='form'>
  <form onSubmit={formHandler}>
  
  Username: <input type="text100" value={username} placeholder="Username" onChange={e=>setUsername(e.target.value)}/><br/>
  <div>
      <center>
      {error && username.length ===0?
      <label style={{color:'Red'}}>
        Username is required
      </label>:""}
      </center>  
      </div>

  <br/>
  Password: <input type="password" value={password} placeholder="Password" minLength={8} maxLength={16} onChange={e=>setPassword(e.target.value)}/><br/>
  <div>
  <center>
  {error && password.length==0?
    <label style={{color:'Red'}}>
    Password is required
    </label>:""}
    </center>
  </div>
  <br/>
  <h5><Button type="submit" class='but'>LOGIN</Button></h5><br/><br/>
  <h5><center>Don't have an account?</center></h5><br/>
 <Link to="/signup"> <h5><Button type="submit" class='but'>SIGNUP</Button></h5></Link><br/>
 <br/>
  </form></div>
  </div>
  </div>
  </>



  
)
}