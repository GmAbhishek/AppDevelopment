// Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../Redux/userSlice';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Assets/Header.css';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const email = user.email;
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="header">
      <div className={`menu-toggle ${showSidebar ? 'open' : ''}`} onClick={toggleSidebar}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
      <div className="navigation-links">
        <button onClick={() => navigateTo('/')}>Home</button>
        <button onClick={() => navigateTo('/about')}>About</button>
        <button onClick={() => navigateTo('/contact')}>Contact</button>
      </div>
      <div className="center-content">
        <div className="logo">
          <h1>GoMart</h1>
        </div>
      </div>
      <div className="right-content">
        {email ? (
          <div className='user-info'>
            <p>Welcome, {email}</p>
            <IconButton onClick={handleLogout} style={{ color: '#fff' }}>
              <LogoutIcon />
            </IconButton>
          </div>
        ) : (
          <div>
            <button onClick={() => navigate('/login')} style={{ backgroundColor: 'transparent', border: 'none' }}>
              <IconButton style={{ color: '#fff' }}>
                <LoginIcon />
              </IconButton>
            </button>
          </div>
        )}
        <Link to="/cart">
          <IconButton style={{ color: '#fff' }}>
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </div>
      <Sidebar isOpen={showSidebar} onClose={toggleSidebar} />
    </div>
  );
}

export default Header;
