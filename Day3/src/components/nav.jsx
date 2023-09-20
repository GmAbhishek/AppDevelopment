import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaPlus } from 'react-icons/fa';

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/login'}>
          <span className="plus-icon">
              <FaPlus className="text-danger" /> </span>
            Polo Pharm
          </Link>
          <div className="ml-auto">
            <Link to={'/login'}>
            <FaUserCircle style={{ fontSize: '2rem' }} /> 
            </Link>
            

          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
