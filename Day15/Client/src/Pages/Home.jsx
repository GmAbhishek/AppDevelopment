import React, { useRef } from 'react';
import '../Assets/Home.css';
import FruitsImage from '../Assets/fruits.jpeg';
import VegetablesImage from '../Assets/vegetables.jpg';
import DairyImage from '../Assets/dairy.jpg';
import GroceryImage1 from '../Assets/grocery1.jpeg';
import GroceryImage2 from '../Assets/grocery2.jpeg';
import GroceryImage3 from '../Assets/grocery3.jpeg';
import AdvertisementImage from '../Assets/advertisement.jpg'; 
import { Link } from 'react-router-dom';

function Home() {
  const categoriesRef = useRef(null); 

  return (
    <div className='home'>
      <div className='welcome-section'>
        <h1>Welcome!</h1>
        <h1>GoMart Online Grocery Shopping</h1>
      </div>

      {/* Fixed Advertisement Banner */}
      <div className='advertisement'>
        <img src={AdvertisementImage} alt='Advertisement' />
      </div>

      {/* Featured Products */}
      <div className='featured-products'>
        <h2>Featured Products</h2> 
        <div className='featured-product'>
          <img src={GroceryImage1} alt='Grocery 1' />
          <h3>Fruits & Vegetables</h3>
        </div>
        <div className='featured-product'>
          <img src={GroceryImage2} alt='Grocery 2' />
          <h3>Dairy Products</h3>
        </div>
        <div className='featured-product'>
          <img src={GroceryImage3} alt='Grocery 3' />
          <h3>Cooking Products</h3>
        </div>
      </div>

      {/* Categories */}
      <div className='category-section' ref={categoriesRef} >
        <h2>Categories</h2>
        <div className='category-container'>
          {/* Fruits Category */}
          <Link to='/fruits' className='category'>
            <img src={FruitsImage} alt='Fruits' />
            <h3>Fruits</h3>
          </Link>

          {/* Vegetables Category */}
          <Link to='/vegetables' className='category'>
            <img src={VegetablesImage} alt='Vegetables' />
            <h3>Vegetables</h3>
          </Link>

          {/* Dairy Category */}
          <Link to='/dairy' className='category'>
            <img src={DairyImage} alt='Dairy' />
            <h3>Dairy</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
