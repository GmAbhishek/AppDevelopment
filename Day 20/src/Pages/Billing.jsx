import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Assert/css/Billing.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import Leftbar from '../Components/Leftbar';

export default function Billing() {
  const [value, setValue] = useState('cash');
  const nav = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const user = useSelector(selectUser);
  const name = user.user && user.user.username ? user.user.username : 'Guest';
  const totalPrice = localStorage.getItem("price");
  const [mobilenumber, setMobileNo] = useState('');
  const [phoneError, setPhoneError] = useState('');
  let isValid = true;
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const success = async () => {
    const data = {
      mobilenumber,
      paymentmethod: value,
      totalPrice: Number(totalPrice),
      username: name,
      paymentstatus: "success",
    };

    

    try {
      const response = await axios.post("http://localhost:8080/auth/postbill", data);

      if (response.status === 200) {
        setIsRegistered(true);
      }
      if (mobilenumber.trim() === '' || !/^\d{10}$/.test(mobilenumber)) {
        setPhoneError('Phone number is invalid.');
        isValid = false;
      }
    } catch (error) {
      console.error('Error while sending data to the backend:', error);
    }
  };

  const admindash = () => {
    nav('/roomdes');
  };

  const back = () => {
    nav('/home');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    success();
  };

  return (
    <>
      <Navbar />
      <Leftbar />
      <div className='bill'>
        <div className='bill-container'>
          <div className='billform'>
            <div className='billhead'>
              <h1>BILLING</h1>
            </div>
            <br />
            <form onSubmit={handleSubmit}>
            MobileNo: <input type="number" value={mobilenumber} placeholder="mobile no" maxLength={10} onChange={(e) => setMobileNo(e.target.value)} /><br /><br />
            <div>
              <center>
                {phoneError && mobilenumber.length === 0 ?(
                  <label style={{ color: 'Red',fontSize:'20px' }}>{phoneError}</label>) : ""}
              </center></div>
              <label>
                PAYMENT TYPE:
                <select value={value} onChange={handleChange}>
                  <option value='cash'>Cash</option>
                  <option value='card'>Card</option>
                </select>
              </label>
              <br />
              <label>
                AMOUNT: <input type='number' placeholder='amount' value={totalPrice} />
              </label>
              <br />
              <br />
              <Button className='list1' type='submit'>
                <div className='button1'>BOOK</div>
                <div className='popup'>
                  {isRegistered && (
                    <div className='success-popup'>
                      <div className='success-popup-content'>
                        <h3>Booking Confirmed</h3>
                        <Link to='/home'>
                          <button className='btn1'>Done</button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <br />
                <div className='button2' onClick={admindash}>
                  CANCEL
                </div>
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
