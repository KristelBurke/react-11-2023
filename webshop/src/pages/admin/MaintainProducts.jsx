import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
// import productsFromFile from "../../data/products.json";
import "../../css/MaintainProducts.css";
import { Spinner } from 'react-bootstrap'

function MaintainProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_DB_URL_PRODUCTS)
    .then(res => res.json())
    .then(json => setProducts(json || []))
  }, []);

  // const emptyProducts = () => {
  //   setProducts([]); 
  // };

 const deleteProduct = (i) => {
  products.splice(i,1);
  setProducts(products.slice());
  fetch(process.env.REACT_APP_DB_URL_PRODUCTS, { "method": 'PUT', "body" : JSON.stringify(products)})
 };

 if (products.length === 0 ) {
  return <Spinner />
 }

  return (
    <div>
      {/* <button onClick={emptyProducts}>Delete</button> */}
      <table>
        <thead>
          <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product, index )=>

          <tr className={product.active === true ? "active" : "notactive"} key={product.id}>
            <td>
              <img className="image" src={product.image} alt="" />
            </td>
            <td> {product.name} </td>
            <td> {product.price} </td>
            <td> {product.description} </td>
            <td> {product.category} </td>
            <td>
            <button onClick={() => deleteProduct(index)}>x</button>
            <Link to={"/admin/edit/" + product.id}>
              <button>Muuda</button>
            </Link>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MaintainProduct