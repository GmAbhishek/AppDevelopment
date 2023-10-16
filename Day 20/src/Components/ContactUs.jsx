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

function ContactUs() {
  const[firstname,setFirstname]=useState(" ");
  const[lastname,setlastname]=useState(" ");
  const[mobile,setMobile]=useState(" ");
const[query,setQuery]=useState(" ");
const submitquery=(e)=>{
  e.preventDefault();

}

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
    <form className='submitqueryform'>
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
      <button>Submit</button>
    </form>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ContactUs