import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'
import { selectUser } from '../Redux/userSlice'
import { PieChart } from '@mui/x-charts/PieChart';
import '../Assert/css/Dashboard.css'
import Layout from '../Components/Layout'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Leftbar from '../Components/Leftbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Dashboard() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
    //const user=useSelector(selectUser)
    const [datavacant, setDatavacant] = useState([]);
    const [roomsbooked,setRoomsbooked]=useState([]);
    const [totalamount,setTotalamount]=useState([]);
    const fetchData = async () => {
      try {
        setDatavacant( (await axios.get('http://localhost:8080/auth/difference')).data);
        setRoomsbooked((await axios.get("http://localhost:8080/auth/booked")).data);
        setTotalamount((await axios.get("http://localhost:8080/auth/total")).data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData(); // Call the GET request when the component mounts
    }, []);
   
    return (
      <>
      <Navbar/>
      <Leftbar/>
      <div className='board'>
      <div className='dash'>
      <h1>Dashboard</h1>
      <div className='nor'>
      <div className='bor'>
      <h5>200<br/>
      <br/>
      No.of Rooms</h5>
      </div>
      <div className='bor'>
      <h5>{datavacant}<br/>
      <br/>
      Vacant Rooms</h5>
      </div>
      <div className='bor'>
      <h5>{roomsbooked}<br/>
      <br/>
      Rooms booked</h5>
      </div>
      <div className='bor'>
      <h5>{totalamount}<br/>
      <br/>
      Total Earning</h5>
      </div>
  
      </div>
      <div className='bar'>
      <h3>Booking Status</h3>
    </div>
   </div>
   </div>
  <Footer/>
  
      </>
    )
}

export default Dashboard