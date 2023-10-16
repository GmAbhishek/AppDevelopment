import React from 'react'
import "../Assert/css/Faq.css"
import Navbar from '../Components/Navbar'
import Leftbar from '../Components/Leftbar'
import Footer from '../Components/Footer'

export default function Faq() {
  return (
    <>
    <Navbar/>
    <Leftbar/>
   <div className="faqfull">
   <h1><br/>FAQ</h1><br/>
   <div className='faq'>
  <input id="faq-a" type="checkbox" />
  <label htmlFor="faq-a">
    <p className="faq-heading">How do I request an early check-in or late check-out with the hotel?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
     <br />
      <br />
      Since hotel policies regarding early check-in (generally before 2:00 pm) or late checkout (generally after 12:00 pm) vary by location and by hotel, 
      please call the hotel directly prior to your arrival to make any necessary arrangements.
       Direct hotel phone numbers can be found on your confirmation email or on the hotel information page
      </p>
  </label>
  <input id="faq-b" type="checkbox" />
  <label htmlFor="faq-b">
    <p className="faq-heading">
      What is your policy regarding cancellations?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
  
      <br />
      <br />
      If your travel plans change, you can cancel or modify your reservation in accordance 
      with the hotel's cancellation policy as stated during the reservation process.
    </p>
  </label>
  <input id="faq-c" type="checkbox" />
  <label htmlFor="faq-c">
    <p className="faq-heading">Will I be charged for extra guests occupying in my room?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
     
      <br />
      <br />
      Hotel room rates vary by date and by the number of adults occupying a single room. To accommodate more guests, you need to change
       your reservation. You will be notified of any additional charges prior to confirming your updated reservation
    </p>
  </label>
  <input id="faq-d" type="checkbox" />
  <label htmlFor="faq-d">
    <p className="faq-heading">
      Is there a minimum age requirement to reserve a hotel room?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
       <br />
      <br />
      Although individual hotel policies may vary, most hotels have a minimum age requirement of 21 
      years old. Please call the hotel directly prior to your arrival to make any necessary arrangements. 
      Direct hotel phone numbers can be found in your confirmation email or on the respective hotel information page
    </p>
  </label>
  <input id="faq-e" type="checkbox" />
  <label htmlFor="faq-e">
    <p className="faq-heading">Am I required to enter my credit card number online to book a reservation? Is your reservation process secure?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
       <br />
      <br />
      Yes. A credit card number is required to book a reservation online for those hotels that accept credit cards. 
      For your security, any personal information such as your credit card number or phone number will be 
      encrypted before being transmitted over the internet.
    </p>
  </label>
  <input id="settings" type="checkbox" />
  <input id="faq-f" type="checkbox" />
  <label htmlFor="faq-f">
    <p className="faq-heading">
      How do I indicate a special request with my reservation?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
       <br />
      <br />
      Please note all preferences and requests in the “Add comment” area when making a reservation. 
      The hotel will do everything possible to accommodate your request.
    </p>
  </label>
</div>
</div>
<Footer/>
</>
)
}