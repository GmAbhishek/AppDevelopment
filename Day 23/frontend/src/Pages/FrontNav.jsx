import React from 'react'
import '../Assert/css/FrontNav.css'
import Delight from '../Assert/images/Delight.png'
export default function FrontNav() {
  return (
    <div>
    <div class="navbarfront">
    <div class="logo">
    <a>
      <img src={Delight} alt="Your Logo" height={50} width={50}/>
    </a>
  </div>
  <div class="menu">
    <ul>
      <li><a href="/login">Login</a></li>
      <li><a href="/signup">Register</a></li>
    </ul>
  </div>
</div>

    </div>
  )
}
