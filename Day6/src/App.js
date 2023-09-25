import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import MyCourses from './Pages/MyCourses';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AllCourses from './Pages/AllCourses';
import MyHome from './Pages/MyHome';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<AllCourses />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/mycourses' element={<MyCourses />} />
          <Route path='/home' element={<MyHome />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
    </div>
  );
}

export default App;
