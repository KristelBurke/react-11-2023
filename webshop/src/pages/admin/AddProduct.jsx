import React, { useRef, useState, useEffect } from 'react';
// import productsFromFile from "../../data/products.json";
import FileUpload from '../../components/FileUpload.jsx';

function AddProduct() {
  const [message, setMessage] = useState("Add new product");
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  // const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [imageUrl, setImage] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_DB_URL_PRODUCTS)
    .then(res => res.json())
    .then(json => setProducts(json || []))
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_DB_URL_CATEGORIES)
    .then(res => res.json())
    .then(json => setCategories(json || []))
  }, []);

  

    function add() {
      if (nameRef.current.value === "") {
          setMessage("Item cannot be added without name");

      } else {
          setMessage("Item successfully added");
          const newProduct = {
            "id": Number(idRef.current.value),
            "image": imageUrl,
            // "image": imageRef.current.value,
            "name": nameRef.current.value,
            "price": Number(priceRef.current.value),
            "description": descriptionRef.current.value,
            "category": categoryRef.current.value,
            "active": activeRef.current.checked
      }
          products.push(newProduct);
          fetch(process.env.REACT_APP_DB_URL_PRODUCTS, { "method": 'PUT', "body" : JSON.stringify(products)})
          
      }    
  }

  return (
    <div>
      <div>{message}</div>
      <label>ID </label><br />
      <input ref={idRef} type="number" /> <br /><br />
      <label>Name </label><br />
      <input ref={nameRef} type="text" /> <br /><br />
      <label>Price </label><br />
      <input ref={priceRef} type="number" /> <br /><br />
      <label>Image </label><br />
      {/* <input ref={imageRef} type="text"  /> <br /><br /> */}
      <FileUpload onSendPictureUrl={setImage} />
      <label>Category </label><br />
      {/* <input ref={categoryRef} type="text" /> <br /><br /> */}
        <select ref={categoryRef} name="" id="">
          {categories.map(category => <option key={category.name}>{category.name}</option>)}
        </select><br />
      <label>Description </label><br />
      <input ref={descriptionRef} type="text" /> <br /><br />
      <label>Active </label><br />
      <input ref={activeRef} type="checkbox" /> <br /><br /><br />

      <button onClick={() => add()}>Add product</button> <br/>
    </div>
  )
}

export default AddProduct