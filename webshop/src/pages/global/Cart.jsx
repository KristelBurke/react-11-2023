import React, { useState } from 'react';
import cartFromFile from '../../data/cart.json';

function Cart() {
  const [cart, setCart] = useState(cartFromFile);

  const emptyCart = () => {
    setCart([]);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  const calculateCartSum = () => {
    const sum = cart.reduce((total, item) => total + item.price, 0);
    return sum.toFixed(2); // Display total with 2 decimal places
  };

  return (
    <div>
      <h2>Cart</h2>
      {/* Display items in cart */}
      {cart.map((cartItem) => (
        <div key={cartItem.id}>
          <p>{cartItem.name}</p>
          <p>{cartItem.description}</p>
          <p>{cartItem.price}</p>
          <button onClick={() => removeFromCart(cartItem)}>Remove</button>
        </div>
      ))}

      {/* Show cart total */}
      <p>Total: ${calculateCartSum()}</p>

      {/* Button to empty cart */}
      <button onClick={emptyCart}>Empty Cart</button>
    </div>
  );
}

export default Cart;
