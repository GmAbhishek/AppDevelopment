import React from 'react';
import '../Assets/Services.css'; // Import the specific CSS file for Services
import Header from '../Components/Header';

function Services() {
  return (
    <div className='services'>
      <h1>Our Services</h1>
      <p>This is the Services page content.</p>
      <p>We provide a wide range of grocery items to meet your daily needs. From fresh fruits and vegetables to dairy products and meats, we have it all.</p>
      <p>Our goal is to make your grocery shopping experience convenient and hassle-free. Browse through our categories and place your order online.</p>
      <Header/>
    </div>
  );
}

export default Services;
