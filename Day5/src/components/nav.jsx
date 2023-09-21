
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import { logout } from '../redux/userSlice';
function Nav() {
  const user=useSelector(selectUser)
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const logoutHandler = () =>{
    dispatch(logout())
    navigate('/Login')
}
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/login'}>
          <span className="plus-icon">
              <FaPlus className="text-danger" /> </span>
            Polo Pharm
          </Link>
          <div className="ml-auto" onClick={logoutHandler}>
            <Link to={'/login'}>
            <FaUserCircle style={{ fontSize: '2rem' }} />  {user ? user.username : 'Guest'}
            </Link>
            

          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
