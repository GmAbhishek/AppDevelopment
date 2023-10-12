import React from 'react';
import '../Assets/Category.css'; 
import ProductImage1 from '../Assets/product1.jpg';
import ProductImage2 from '../Assets/product2.jpeg';
import ProductImage3 from '../Assets/product3.jpeg';
import OrangeImage from '../Assets/product4.jpg';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice'; // Import the addItem action

function Fruits() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch the addItem action with the product details
    dispatch(addItem(product));
  };

  return (
    <div className='category-page'>
      <h1>Fruits</h1>
      <div className='product-container'>
        {/* Product 1 */}
        <div className='product'>
          <img src={ProductImage1} alt='Product 1' />
          <div className='product-info'>
            <span className='product-symbol'>🍎</span>
            <span className='product-price'>$5.99</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 1, name: 'Apple', price: 5.99 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className='product'>
          <img src={ProductImage2} alt='Product 2' />
          <div className='product-info'>
            <span className='product-symbol'>🍌</span>
            <span className='product-price'>$3.99</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 2, name: 'Banana', price: 3.99 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className='product'>
          <img src={ProductImage3} alt='Product 3' />
          <div className='product-info'>
            <span className='product-symbol'>🍇</span>
            <span className='product-price'>$4.49</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 3, name: 'Grapes', price: 4.49 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 4 (Orange) */}
        <div className='product'>
          <img src={OrangeImage} alt='Orange' />
          <div className='product-info'>
            <span className='product-symbol'>🍊</span>
            <span className='product-price'>$2.99</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 4, name: 'Orange', price: 2.99 })}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruits;
