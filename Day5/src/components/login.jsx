import {  useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import '../App.css';
import Nav from './nav';

function Login() {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
      username: '',
      password: ''
    })
    const handleChange = (e) => {
      setFormdata({ ...formdata, [e.target.id]: e.target.value })
    }
    const submitHandler = (e) => {

      console.log(formdata.username,formdata.password)
      
      e.preventDefault;
      dispatch(login({
        username :formdata.username
      }))
      navigate('/Dashboard')
    }
    return (<>

<Nav/>
      <form className='' onSubmit={submitHandler}>
      <h1 className=''>Login</h1>
      <div className="mb-3">
      <input type="text" name="username" id="username" value={formdata.username} onChange={handleChange} placeholder='username' className='auth-field' required />
      </div> <div className="mb-3"><input type="password" name="password" id="password" value={formdata.password} onChange={handleChange} placeholder='password' className='auth-field' required />
</div>
      <button type='submit' className='auth-btn app-x-shadow'> Login </button>
    </form>
    <Link to='/signup' > Don&#39;t have an account?</Link>
    </>
    )
  }

export default Login;