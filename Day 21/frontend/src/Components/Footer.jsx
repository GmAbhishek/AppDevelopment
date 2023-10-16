import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapIcon from '@mui/icons-material/Map';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import '../Assert/css/Footer.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
function Footer() {
  const nav=useNavigate();
  const feedback=()=>
  {
    nav("/feedback");
  }
  const faq=()=>{
    nav("/faq")
  }
  const contact=()=>
  {
    nav("/contact")
  }
  return (
    <div className='footer1'>
<footer class="flex-rw">
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">RESERVATIONS</h4></li>
    <li><a class="generic-anchor footer-list-anchor" >Retrieve Hotel Bill</a></li>
  </ul>
  <div className='line'></div>
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">CUSTOMER SERVICE</h4></li>
    <li><a class="generic-anchor footer-list-anchor" onClick={contact}>Contact Us</a></li>
    </ul>
    <div className='line'></div>
  <ul class="footer-list-top">
    <li id='help'>
      <h4 class="footer-list-header">PLEASE HELP ME</h4></li>
    <li><a class="generic-anchor footer-list-anchor" itemprop="significantLink" onClick={faq}>FAQs</a></li>
    <li><a class="generic-anchor footer-list-anchor" onClick={feedback}>Feedback</a></li>
  </ul>
  <div className='line'></div>
  <ul className='footer-list-top'>
  <li>
  <h4 class="footer-list-header">FOLLOW US ON:</h4></li>
  <li>
  <a class="generic-anchor footer-list-anchor" href='https://www.facebook.com/'><FacebookIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://www.instagram.com/'><InstagramIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://www.linkedin.com/feed/'><LinkedInIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://in.pinterest.com/'><PinterestIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://www.youtube.com/'><YouTubeIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://web.telegram.org/k/'><TelegramIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><TwitterIcon fontSize='medium'/></a>
  </li>
  <br/>
  <li>
  <a id='contact' class="generic-anchor footer-list-anchor"><CallIcon fontSize='small' className='icon'/>   +91 7550370306  </a>
  </li>
  <br/>
  <li>
  <a id='locator' class="generic-anchor footer-list-anchor"><MapIcon fontSize='small' className='icon'/>  SKCT, Kovaipudur, <br/>&nbsp; Coimbatore, TN 641042</a>
  </li>
  </ul>
</footer>
<section className='small'>
<p><Link to="/privacy">Privacy Policy</Link></p>
<div className='line1'></div>
<p><Link to="/terms">Terms & Conditions</Link></p>
<div className='line1'></div>
Cookie Center
<div className='line1'></div>
Security & Safety
<div className='line1'></div>
Dont sell Personal Information
<div className='line1'></div>
© 2023 ABC Corporation
</section>
    </div>
  )
}
export default Footer