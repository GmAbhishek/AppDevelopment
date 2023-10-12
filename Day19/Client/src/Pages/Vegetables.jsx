import React from 'react';
import '../Assets/Category.css'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice'; 
import ProductImage1 from '../Assets/vegetable1.jpg'; 
import ProductImage2 from '../Assets/vegetable2.jpg'; 
import ProductImage3 from '../Assets/vegetable3.jpg'; 
import ProductImage from '../Assets/vegetable4.jpg'; 

function Vegetables() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch the addItem action with the product details
    dispatch(addItem(product));
  };

  return (
    <div className='category-page'>
      <h1>Vegetables</h1>
      <div className='product-container'>
        {/* Product 1 */}
        <div className='product'>
          <img src={ProductImage1} alt='Product 1' />
          <div className='product-info'>
            <span className='product-symbol'>🧅</span>
            <span className='product-price'>$3.99</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 5, name: 'Onion', price: 3.99 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className='product'>
          <img src={ProductImage2} alt='Product 2' />
          <div className='product-info'>
            <span className='product-symbol'>🥕</span>
            <span className='product-price'>$2.49</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 6, name: 'Carrot', price: 2.49 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className='product'>
          <img src={ProductImage3} alt='Product 3' />
          <div className='product-info'>
            <span className='product-symbol'>🍅</span>
            <span className='product-price'>$5.99</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 7, name: 'Tomato', price: 5.99 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className='product'>
          <img src={ProductImage} alt='Product 4' />
          <div className='product-info'>
            <span className='product-symbol'>🥔</span>
            <span className='product-price'>$4.99</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 8, name: 'Potato', price: 4.99 })}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Vegetables;
