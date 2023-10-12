import React from 'react';
import '../Assets/Category.css'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice'; 
import ProductImage1 from '../Assets/dairy1.jpg'; 
import ProductImage2 from '../Assets/dairy2.jpg'; 
import ProductImage3 from '../Assets/dairy3.jpeg'; 
import ProductImage4 from '../Assets/dairy4.jpeg'; 

function Dairy() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className='category-page'>
      <h1>Dairy</h1>
      <div className='product-container'>
        {/* Product 1 */}
        <div className='product'>
          <img src={ProductImage1} alt='Product 1' />
          <div className='product-info'>
            <span className='product-symbol'>🥛</span>
            <span className='product-price'>$2.99</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 9, name: 'Milk', price: 2.99 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className='product'>
          <img src={ProductImage2} alt='Product 2' />
          <div className='product-info'>
            <span className='product-symbol'>🧀</span>
            <span className='product-price'>$5.49</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 10, name: 'Cheese', price: 5.49 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className='product'>
          <img src={ProductImage3} alt='Product 3' />
          <div className='product-info'>
            <span className='product-symbol'>🍦</span>
            <span className='product-price'>$4.79</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 11, name: 'Ice Cream', price: 4.79 })}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className='product'>
          <img src={ProductImage4} alt='Product 4' />
          <div className='product-info'>
            <span className='product-symbol'>🥚</span>
            <span className='product-price'>$3.79</span>
            <span className='liked-product-symbol'>❤️</span>
            <button onClick={() => handleAddToCart({ id: 12, name: 'Eggs', price: 3.79 })}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dairy;
