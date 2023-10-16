import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Leftbar from './Components/Leftbar';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';
import Signup from'./Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Billing from './Pages/Billing';
import About from './Pages/About';
import ContactUs from './Components/ContactUs';
import Privacy from './Components/Privacy';
import Terms from  './Components/Terms';
import RoomDes from './Pages/RoomDes';
import FeedbackForm from './Components/FeedbackForm';
import AdminSidebar from './Components/AdminSidebar';
import AdminDashboard from './Pages/AdminDashboard';
import ReservedList from './Pages/ReservedList';
import Faq from './Components/Faq';
import RoomDes2 from './Pages/RoomDes2';
import RoomDes3 from './Pages/RoomDes3';
import Front from './Pages/Front';
import FrontNav from './Pages/FrontNav';
import BillingStatus from './Pages/BillingStatus';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/billing" element={<Billing/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/roomdes" element={<RoomDes/>}/>
    <Route path="/feedback" element={<FeedbackForm/>}/>
    <Route path="/admindash" element={<AdminDashboard/>}/>
    <Route path="/list" element={<ReservedList/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/roomdes2" element={<RoomDes2/>}/>
    <Route path="/roomdes3" element={<RoomDes3/>}/>
    <Route path="/" element={<Front/>}/>
    <Route path="/frontnav" element={<FrontNav/>}/>
    <Route path="/billstatus" element={<BillingStatus/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
