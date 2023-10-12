import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Fruits from './Pages/Fruits'; // Import your Fruits component
import Vegetables from './Pages/Vegetables'; // Import your Vegetables component
import Dairy from './Pages/Dairy'; // Import your Dairy component
import { Provider } from 'react-redux';
import store from './Redux/store';
import Faq from './Pages/Faq';
import Dashboard from './Pages/Dashboard';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}/> 
      <Route path="/services" element={<Services />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/fruits" element={<Fruits/>} />
      <Route path="/vegetables" element={<Vegetables/>} />
      <Route path="/dairy" element={<Dairy/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      </Routes>
      <Navbar/>
      </Router>
      </Provider>
  );
}

export default App;
