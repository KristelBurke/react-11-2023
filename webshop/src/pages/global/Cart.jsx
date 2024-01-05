import React, { useState } from 'react';
import { toast } from 'react-toastify';
import cartFromFile from '../../data/cart.json';

function Cart() {
  const [cart, setCart] = useState(cartFromFile);

  const emptyCart = () => {
    setCart([]);
    toast.success("Cart is empty");
  };

  const removeFromCart = (index) => {
    // const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    cart.splice(index,1);
    setCart(cart.slice);
    toast.success("Item removed");
  };

  const calculateCartSum = () => {
    // const sum = cart.reduce((total, item) => total + item.price, 0);
    let sum = 0;
    cart.forEach(item => sum = sum + item.price);
    return sum.toFixed(2);
  };

  return (
    <div>
      <h2>Cart</h2>
      {/* Display items in cart */}
      {cart.map((cartItem, index) => (
        <div key={cartItem.id}>
          <p>{cartItem.name}</p>
          <p>{cartItem.image}</p>
          <p>{cartItem.description}</p>
          <p>{cartItem.price}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
      <br />
      <p>Total: ${calculateCartSum()}</p>

      <button onClick={emptyCart}>Empty Cart</button>
    </div>
  );
}

export default Cart;
