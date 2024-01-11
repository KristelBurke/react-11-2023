import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
// import cartFromFile from '../../data/cart.json';
import styles from "../../css/Cart.module.css"

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify ([]));
    toast.success("Cart is empty");
    
  };

  const removeFromCart = (index) => {
    // const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    cart.splice(index,1);
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify (cart));
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
        <div key={cartItem.id} className={styles.product}>
        <img className={styles.image} src={cartItem.image} alt="" />
        <div className={styles.name}>{cartItem.name}</div>
        <div className={styles.price}>{cartItem.price}</div>
        <div className={styles.quantity}>
          <img className={styles.button} src = "/minus.png" alt="" />
          <div>7 pcs</div>
          <img className={styles.button} src = "/plus.png"alt="" />
        </div>
        
        <div className={styles.total}>hind*kogus€</div>
        <img className={styles.button} src="/remove.png" onClick={() => removeFromCart(index)} alt=""/>
      </div>
      ))}
      <br />
      <p>Total: ${calculateCartSum()}</p>

      <button onClick={emptyCart}>Empty Cart</button>

      <ToastContainer
       position="bottom-right"
       theme="dark"/>
    </div>
  );
}

export default Cart;
