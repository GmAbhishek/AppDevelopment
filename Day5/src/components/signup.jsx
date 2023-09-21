import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Signup() {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate('/Login')
  }
    return (<>
      <form className='' onSubmit={submitHandler}>
      <h1 className=''>Sign Up</h1>
      <div className="mb-3">
      <input type="text" name="username" id="username"  placeholder='username' className='auth-field' required />
      </div> 
      <div className="mb-3"><input type="password" name="password" id="password"   placeholder='password' className='auth-field' required />
</div>
      <div className="mb-3"><input type="password" name="password" id="password"   placeholder=' confirm password' className='auth-field' required />
</div>
      <button type='submit' className='auth-btn app-x-shadow'> SignUp</button>
    </form>
    <Link to='/login' > Already registered? </Link>
    </>
    )
  }

export default Signup;
{/* <p className="forgot-password text-right">
          Already registered? <Link to='/login' >Login</Link>
        </p> */}