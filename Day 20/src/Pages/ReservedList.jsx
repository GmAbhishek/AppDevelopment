import React, { useEffect, useState } from 'react'
import '../Assert/css/ReservedList.css'
import Navbar from '../Components/Navbar'
import AdminSidebar from '../Components/AdminSidebar'
import AdminFooter from '../Components/AdminFooter'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
function ReservedList() {
  const [reservedlist, setReservedList] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/auth/get');
        setReservedList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
    <AdminSidebar/>
    <div className='reservelist'>
    <div className='containers'>
    <center><h2>Reserved List</h2></center>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>MOBILE NO</th>
          <th>EMAIL ID</th>
          </tr>
      </thead>
      <tbody>
        {reservedlist.map((item) => (
          <tr key={item.listId}>
            <td>{item.listId}</td>
            <td>{item.name}</td>
            <td>{item.mobileno}</td>
            <td>{item.emailid}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
    <AdminFooter/>
    </>
  )
}

export default ReservedList