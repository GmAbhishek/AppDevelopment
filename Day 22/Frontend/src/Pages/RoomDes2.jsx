import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Leftbar from '../Components/Leftbar'
import Footer from '../Components/Footer'
import '../Assert/css/RoomDes.css'
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import standard from '../Assert/images/standard.webp'
import { useNavigate } from 'react-router-dom'


function RoomDes2() {
    const nav=useNavigate();
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [difference, setDifference] = useState('');

  const calculateDifference = () => {
      const d1 = new Date(date1);
      const d2 = new Date(date2);
      const diff = Math.abs(d1 - d2);
      const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDifference(diffDays);
  };
  const bill = () => {
    localStorage.setItem("price",difference * 999)
    nav("/billing");
  };

  return (
    <>
    <Navbar/>
    <Leftbar/>
    <div className='room'>
    <div className='containerrd'>
    <div className='desimgs'>
    <img src={standard} height={300} width={600}/>

    </div>
    <div className='descontent'>
    <p>Get upto 15% Lower Prices</p>
    <div className='linebill'>
    </div>

    <br/>
    <b>₹999</b> &nbsp; &nbsp;<span>₹2999</span>
    <h6>Inclusive of all taxes</h6>
    <br/>
   <label>CheckIn Date</label>&nbsp;&nbsp;&nbsp; <input type="date" value={date1} onChange={e => setDate1(e.target.value)} />
   <br/><br/>
    <label>CheckOut Date</label>&nbsp;&nbsp;<input type="date" value={date2} onChange={e => setDate2(e.target.value)} />
    <br/>
    <button onClick={calculateDifference}>Calculate</button>
    <br/><br/>
    <h3>Total price: {difference*999}</h3>
    <button className='booknow' onClick={bill}>Book Now</button>
    </div>
    </div>


    <div className='containercc'>
    <h2>OYO Flagship 76687 Ramoji Kothapet</h2><br/>
    <h4>611, Aruljothi Complex, Sathy Rd, C K Colony, B K R Nagar, New Siddhapudur,<br/> Coimbatore</h4><br/>
    <h3>Amenities</h3><br/>
    <AcUnitIcon fontSize='small'/>
    &nbsp;AC &nbsp;&nbsp;&nbsp;&nbsp;
    <TvIcon fontSize='small'/>&nbsp; Tv&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <WifiIcon fontSize='small'/>&nbsp; Free Wifi<br/>
    <br/>
    <div className='hotelpolicy'>
    <h3>Hotel Policy</h3>
    <div className='timetable'>
    <div className='checkin'>
    <div className='checkin1'>
    Checkin Time
    </div>
    
    <div className='checkin1'>
    Checkout Time
    </div>
    
    </div>
    <div className='checkout'>
    <div className='checkout1'>
    12.00 am
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div className='checkout1'>
    11.00 pm
    </div>
    </div>
    </div>
    </div>
    <div className='roomlist'>
<li>Check-in allowed for guests aged 21 years and above only  </li>
<li> Guests can check in using any local or outstation ID proof (PAN card not accepted).
</li>
<li> Only Indian Nationals allowed</li>
<li>As a complimentary benefit, your stay is now insured by Acko.
</li>
<li>Couples are Welcome</li>
</div>
    </div>
    <br/><br/><br/>
    </div>
    <Footer/>
    </>
  )
}

export default RoomDes2