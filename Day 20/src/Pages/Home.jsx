import React from 'react'
import Navbar from '../Components/Navbar'
import Leftbar from '../Components/Leftbar'
import Footer from '../Components/Footer'
import deluxe from '../Assert/images/deluxe.jpg'
import standard from '../Assert/images/standard.webp'
import presidentalsuit from '../Assert/images/presidentalsuit.jpg'
import '../Assert/css/Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const nav=useNavigate();
  const details=()=>{
    nav("/roomdes")
  }
  const details1=()=>{
        nav("/roomdes2")
  }
  const details2=()=>{
        nav("/roomdes3")
  }
  return (
    <>
  <Navbar/>
  <Leftbar/>
  <div className='container-homepage'>
  <div className='roomtypes'>
  <div className='rooms'>
  <img src={deluxe}  width={300} height={200}/>
  <div className='des'>
  OYO Flagship 76687 Ramoji Kothapet 
  <h6>Parking, Reception, Free Wifi</h6><br/>
  Max Count : 3<br/><br/>
  Phone Number : 7894561230<br/><br/>
  Type : Non - Deluxe<br/>
  <p onClick={details}>View Details</p>
  <div>
  </div>
  </div>
  </div>
  <div className='rooms'>
  <img src={standard}  width={300} height={200}/>
  <div className='des'>
  OYO Flagship 16382 Metro International 
  <h6>Parking, Reception, Free Wifi</h6><br/>
  Max Count : 2<br/><br/>
  Phone Number : 4561279830<br/><br/>
  Type : Deluxe<br/>
  <p onClick={details1} >View Details</p>
  </div>
  </div>
  <div className='rooms'>
  <img src={presidentalsuit}  width={300} height={200}/>
  <div className='des'>
  OYO 8021 Collection O Sri Navya Grand
  <h6>Parking, Reception, Free Wifi</h6><br/>
  Max Count : 5<br/><br/>
  Phone Number : 987561230<br/><br/>
  Type : Super Deluxe<br/>
  <p onClick={details2}>View Details</p>
  </div>
  </div>
  </div>
  </div>
  <Footer/>
    </>
  )
}

export default Home