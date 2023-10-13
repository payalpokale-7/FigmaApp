// Product.js
import React, { useState } from 'react';

function Product() {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
    // Add product to cart data in local state or Redux store
  };

  const handleRemoveFromCart = () => {
    setIsInCart(false);
    // Remove product from cart data in local state or Redux store
  };

  return (
    <div className="product">
      <h3>Product Title</h3>
      <button onClick={isInCart ? handleRemoveFromCart : handleAddToCart}>
        {isInCart ? '-' : '+'}
      </button>
    </div>
  );
}

export default Product;
