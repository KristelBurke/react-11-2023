import React, { useState } from 'react';
import productsFromFile from "../../data/products.json"

function MaintainProduct() {
  const [products, setProducts] = useState(productsFromFile);

  const emptyProducts = () => {
    setProducts([]); 
  };

  return (
    <div>
      <button onClick={emptyProducts}>Delete</button>
      {products.map(product => 
          <div key={product.id}>
            <img src={product.image} alt="" />
            <div> {product.name} </div>
            <div> {product.price} </div>
            <div> {product.description} </div>
            <div> {product.category} </div>
            <div> {product.active} </div>
            <br />
            <br />
          </div>
          )}
    </div>
  )
}

export default MaintainProduct