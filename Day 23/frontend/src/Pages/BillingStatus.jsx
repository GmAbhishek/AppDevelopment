import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import AdminSidebar from '../Components/AdminSidebar'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import axios from 'axios';
import "../Assert/css/BillingStatus.css"


export default function BillingStatus() {
    const user = useSelector(selectUser);
    const [data, setData] = useState([]);
    const username = user.user && user.user.username ? user.user.username : "Guest";
    const isLoggedIn = user.user && user.user.username;
    const nav = useNavigate();
  
    useEffect(() => {
      if (!isLoggedIn || user.user.username !== "admin") {
        nav("/");
      }
    }, [isLoggedIn, user.user.username, nav]);
  
    useEffect(() => {
      // Fetch data from the backend when the component mounts
      async function fetchData() {
        try {
          const response = await axios.get('http://localhost:8080/auth/getbill');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);
  return (
    <div>
    <Navbar/>
    <AdminSidebar/>
    <div className='billingstatus'>
    <div className='containers'>
    <h2>Billing Status</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>          
          <th>Bill Amount</th>
          <th>Mobile No</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.userid}>
            <td>{item.userid}</td>
            <td>{item.username}</td>
            <td>{item.totalPrice}</td>
            <td>{item.mobilenumber}</td>
            <td>{item.paymentstatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
  <Footer/>
    </div>

  )
}
