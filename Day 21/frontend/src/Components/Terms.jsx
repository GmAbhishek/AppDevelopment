import React from 'react'
import '../Assert/css/Terms.css'
import Layout from '../Components/Layout'
import Navbar from '../Components/Navbar'
import Leftbar from '../Components/Leftbar'
import Footer from '../Components/Footer'
function Terms() {
  return (
    <>
    <Navbar/>
    <Leftbar/>
    <div className='terms'>
    <div className='containertc'>
    <div className='tch'>
    <center>Terms and Conditions</center></div>
    <div className='tcc'><li>
    The amount received as donation will be used for the specified charitable causes. We will donate the collected amount to “Sewa Mandir” &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to help create a social impact in India.<br/></li><br/>
    <li>The contributions once made will not be refunded or cancelled.<br/></li>
    <br/>
    <li> 
    Guests will voluntarily choose to contribute to the social cause and by proceeding to donate the money, they do so at their own risk and &nbsp;&nbsp;&nbsp;&nbsp;expressly 
    waive all the claims, rights of action and/or remedies (under law or otherwise) that they may have against Sarovar hotels  arising &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;out of or in
    connection with the contribution made.</li><br/>
    <li> No certificate under section 80G of the Income Tax Act, 1961 will be issued to Guests.<br/></li><br/>
    <li> By proceeding to donate the money, Guests understand and confirm that this donation is not from any foreign source as defined under &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Foreign 
    Contribution Regulation Act, 2010 and that you are a resident Indian.</li><br/>
    <li>Funds collected through this initiative will go to “Sewa Mandir” directly to be used for “Offsetting Carbon Footprint through &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Afforestation”.</li><br/>
    <li>This initiative will also be extended to guests, who are booking themselves directly and who would be requested to contribute Rs.5/- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;towards the
     cause. However, this will be restricted to guest contribution only and is optional. Guests will be charged additional Rs.5/- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;only when they agree to participate.
    </li>
    </div>  
    </div>
    </div>
    <Footer/>
   
    
    </>
  )
}

export default Terms