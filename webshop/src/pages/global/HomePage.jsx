import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
// import productsFromFile from "../../data/products.json";
import "../../css/HomePage.css"
// import cartFromFile from "../../data/cart.json";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_DB_URL_PRODUCTS)
    .then(res => res.json())
    .then(json => setProducts(json || []))
  }, []);

  const addToCart = (clickedProduct) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartLS.findIndex(product => product.toode.id === clickedProduct.id);
    if (index >= 0) {
      cartLS[index].kogus = cartLS[index].kogus + 1;
    } else {
      cartLS.push({"kogus": 1, "toode": clickedProduct});
    }
    toast.success("Item added to cart");
    localStorage.setItem('cart', JSON.stringify (cartLS));
  }
    // 1. võtame localStorage-st
  // 2. võtame jutumärgid maha (converdime sõnast array, et saaks pushida)
  // 3. lisame juurde .push() abil
  // 4. paneme jutumärgid tagasi (localStorage-sse array panemiseks)
  // 5. paneme localStorage-sse tagasi
  // localStorage.setItem("teema", "dark");
  

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
    // setProducts([...products]);
  }
  const sortPriceAsc = () => {
    // const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    // setProducts(sortedProducts);
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }
  
  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  return (
    <div>
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
        <button onClick={sortPriceAsc}>Sort Price Asc</button>
        <button onClick={sortPriceDesc}>Sort Price Desc</button>
        <br />
        <br />
      <div className="products">
        {products.map(product => 
          <div key={product.id} className="product"> 
          <Link to={"product/" + product.id}>
          <img className={product.active === true ? "image" : "image-not-active"} src={product.image} alt="" />
            <div> {product.name} </div>
            <div> {product.price} </div>
          </Link>
            
            <button disabled={product.active === false} onClick={() => addToCart(product)}>Add to cart</button>
            <br />
            <br />
          </div>
          )}
      </div>

      <ToastContainer
       position="bottom-right"
       theme="dark"/>

    </div>
  )
}

export default HomePage