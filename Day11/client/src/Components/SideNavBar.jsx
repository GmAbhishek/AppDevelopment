import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown'
import { useNavigate } from 'react-router-dom';

export default function SideNavBar() {

  let navigate = useNavigate();
  return (
    <div className='container-fluid' >
      <div className='row'>
        <div className='col-auto col-sm-2  d-flex flex-column justify-content-between min-vh-100' style={{ backgroundColor: '#191970' }}>
          <div className='mt-3'>
            <a className='text-decoration-none d-flex align-items-center text-white d-none d-sm-inline' role='button'>
              <span className='f5-4'>CAMCRAFT</span>
            </a>
            <hr className='text-white d-none d-sm-block'></hr>
            <ul className="nav nav-pills flex-column" id='parent'>
              <li className="nav-item my-1">
                <button onClick={() => { navigate('/dashboard') }} className="nav-link text-white" aria-current="page">
                  <i className='bi bi-speedometer2'></i>
                  <span className='ms-2 d-none d-sm-inline'>DASHBOARD</span>
                </button>
              </li>

              <li className="nav-item my-1">
                <button onClick={() => { navigate('/home') }} className="nav-link text-white" aria-current="page">
                  <i className='bi bi-house'></i>
                  <span className='ms-2 d-none d-sm-inline'>HOME</span>
                </button>
              </li>
              <li className="nav-item my-1">
                <button onClick={() => { navigate('/mycourses') }} className="nav-link text-white" aria-current="page">
                  <i className='bi bi-book'></i>
                  <span className='ms-2 d-none d-sm-inline'>MY COURSES</span>
                </button>
              </li>

            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
