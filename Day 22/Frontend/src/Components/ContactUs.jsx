import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapIcon from '@mui/icons-material/Map';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import Layout from './Layout'
import '../Assert/css/ContactUs.css'
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assert/css/ContactUs.css'
import Leftbar from './Leftbar';
import axios, { Axios } from 'axios';

function ContactUs() {
  const [firstname, setFirstname] = useState(''); // Removed the space
  const [lastname, setlastname] = useState(''); // Removed the space
  const [mobile, setMobile] = useState(''); // Removed the space
  const [query, setQuery] = useState(''); // Removed the space

  const submitquery = (e) => {
    e.preventDefault();

    const formData = {
      firstname,
      lastname,
      mobile,
      query,
    };

    // Send a POST request to the backend
    axios
      .post('/auth/contactus/submit', formData)
      .then((response) => {
        console.log('Form submitted successfully:', response.data);
        // You can add code to handle a successful submission, e.g., show a success message or redirect
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // You can add code to handle errors, e.g., show an error message
      });
  };

  return (
    <>
    <div className='contactbody'>
    <div className='containercu'>
    <div className='ic'>
    <h1>CONTACT US ON:</h1>
    <li>
    <a class="generic-anchor footer-list-anchor"><FacebookIcon fontSize='medium'/></a>
    <a class="generic-anchor footer-list-anchor"><InstagramIcon fontSize='medium'/></a>
    <a class="generic-anchor footer-list-anchor"><LinkedInIcon fontSize='medium'/></a>
    <a class="generic-anchor footer-list-anchor"><PinterestIcon fontSize='medium'/></a>
    <a class="generic-anchor footer-list-anchor"><YouTubeIcon fontSize='medium'/></a>
    <a class="generic-anchor footer-list-anchor"><TelegramIcon fontSize='medium'/></a>
    <a class="generic-anchor footer-list-anchor"><TwitterIcon fontSize='medium'/></a>
    </li>
    <br/>
    <li>
    <a class="generic-anchor footer-list-anchor"><CallIcon fontSize='medium' className='icon'/>   +91 7895461230  </a>
    </li>
    <br/>
    <li>
    <a class="generic-anchor footer-list-anchor"><MapIcon fontSize='medium' className='icon'/>  SKCT, Kovaipudur, <br/>&nbsp; Coimbatore, TN 641042</a>
    </li>
    </div>
    <div className='line2'>
    <p></p>
    
    </div>
   
    <div className='cu'>
    <form className='submitqueryform' onSubmit={submitquery}>
    <center><h1>Message Us</h1></center>
    <br/>
    <br/>
    <label for="uname">Firstname</label>
      <div class="uname">
        <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}  required/>
      </div><br/>
     
      <label for="uname">Lastname</label>
      <div class="uname">
        <input type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} required/>
      </div><br/>
      <label for="uname">Mobile</label>
      <div class="uname">
        <input type="tel" value={mobile} onChange={(e)=>setMobile(e.target.value)} required/>
      </div><br/>
      <label for="query">Query</label>
      <div class="query">
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} required/>
      
      </div><br/>
      <button type='submit'>Submit</button>
    </form>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ContactUs