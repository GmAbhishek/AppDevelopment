import React from 'react'
import '../Assert/css/About.css'
import Navbar from '../Components/Navbar'
import Leftbar from '../Components/Leftbar'
import logo1 from '../Assert/images/logo1.png'
import Footer from '../Components/Footer'
import abtbg from'../Assert/images/abtbg.png'

function About() {
  return (
    <>
    <div className='abtpage'>
    <div classname='abtbody'>
    <div className='containerbg'>
    <div className='containerabt'>
    <div className='abtus'>About Us</div>
    <br/>
    
    <img src={abtbg} width={400} height={200} /></div>
    </div>
    <div className='abt'>
    <h4>Hotel Management has been the hospitality industry’s magazine of record for <br/>
    more than 140 years. Today, it covers hotel investment, development, <br/>
    operations, design, technology, brand strategies and the sharing economy for<br/>
     the new generation of hotel owner, developer, operator, broker and financier. <br/>
     Our editorial staff provides the very latest news and insight for the hospitality <br/>
     community and boasts a masthead brimming with sought-after thought leaders <br/>
     in the industry</h4><div className='imgs'>
     </div>
     <br/>
     <div className='teamname'>Our Team</div>
     <div className='team'>
     <div>
     <img src={logo1} width={80} />
     <br/>
     Hemaharshini K J<br/>IT<br/>3 Yr
     </div>
     <div>
     <img src={logo1} width={80} />
     <br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Akshaya D<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IT<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 Yr
     </div>
     <div>
     <img src={logo1} width={80} />
     <br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Abhishek P<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IT<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 Yr
     </div>
     </div>
     </div>
     </div>
     </div>
     <Footer/>
    </>
  )
}

export default About