import React, { useState} from 'react'
import productsFromFile from "../../data/products.json"

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
  const [cart, setCart] = useState([]);

  const addToCart = (clickedProduct) => {
    setCart([...cart, clickedProduct]);
  }

  const sortAZ = () => {
    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sortedProducts);
  }
  const sortZA = () => {
    const sortedProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
    setProducts(sortedProducts);
  }
  const sortPriceAsc = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  }
  const sortPriceDesc = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  }

  return (
    <div>
      <div>
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
        <button onClick={sortPriceAsc}>Sort Price Asc</button>
        <button onClick={sortPriceDesc}>Sort Price Desc</button>
        <br />
        <br />
        {products.map(product => 
          <div key={product.id}> 
            <img src={product.image} alt="" />
            <div> {product.name} </div>
            <div> {product.price} </div>
            <div> {product.description} </div>
            <div> {product.category} </div>
            <div> {product.active} </div>
            <button onClick={() => addToCart(product)}>Add to cart</button>

            <br />
            <br />
          </div>
          )}
      </div>
    </div>
  )
}

export default HomePage