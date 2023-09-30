import React from 'react'
import { Link, useNavigate } from 'react-router-dom/dist'
import '../CSS/SignUp.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signup } from '../Features/user';

export default function SignUp() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSingup = (e) => {

    e.preventDefault();
    if (email.trim() && username.trim() && password.trim()) {

      console.log("IN");
      navigate("/dashboard")
    }
    else {

      console.log("OUT");
    }
  }

  return (
    <div className='container'>
      <div className='signup-container'>
        <div className="signup-credentials">
          <h3 style={{ padding: '2%' }}>CamCraft</h3>
          <form
            className="signup-form"
            onSubmit={handleSingup}
          >
            <fieldset>
              <div className="form-group name optional user_name" style={{ padding: '2%' }}>
                <input
                  className="form-control string name optional form-control-xl js-name-field"
                  placeholder="Username"
                  type="text"
                  onChange={(e) => { setUsername(e.target.value) }}
                  required
                />
              </div>
              <div className="form-group email optional user_email" style={{ padding: '2%' }}>
                <input
                  className="form-control string email optional form-control-xl js-email-field"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => { setEmail(e.target.value) }}
                  required
                />
              </div>
              <div className="a-input-group js-show-password mb-1" style={{ padding: '2%' }}>
                <input
                  className="form-control form-control-xl js-password-field"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => { setPassword(e.target.value) }}
                  required
                />
                {/* <span className="a-input-group__action js-show-password-action" role="button">
                  <i className="a-icon-eye a-input-group__action-icon js-show-password-icon"></i>
                  <i className="a-icon-eye-slash a-input-group__action-icon d-none js-show-password-icon">
                    ::before
                  </i>
                </span> */}
              </div>

            </fieldset>
            <div className="btn-toolbar form-actions t-login-button" style={{ padding: '2%' }}>
              <button name="button" className="a-button" 
              onClick={() => dispatch(signup({username:username, email:email, password:password}))}>
                SIGN UP
              </button>
            </div>
          </form>
          <div className='signup-footer'>
            Already a User?
            <Link to={'/login'}> Login</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
