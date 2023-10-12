import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/Sidebar.css';

function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    if (route === '/') {
      document.querySelector('.category-section').scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(route);
    }
    onClose();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Menu</h2> 
      <button onClick={() => navigateTo('/')}>Categories</button>
      <button onClick={() => navigateTo('/dashboard')}>Dashboard</button>
      <button onClick={() => navigateTo('/faq')}>FAQs</button>
    </div>
  );
}

export default Sidebar;
