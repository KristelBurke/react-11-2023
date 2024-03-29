import React, { useRef, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import productsFromFile from "../../data/products.json";

function EditProduct() {
  const { product_id } = useParams();
  const [products, setProducts] = useState([]);
  // const leitud = tootedFailist[index];
  //                22676756 === "22676756" --> Number
  const found = products.find(product => product.id === Number(product_id));
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.REACT_APP_DB_URL_PRODUCTS)
    .then(res => res.json())
    .then(json => setProducts(json || []))
  }, []);

  //   0    1    2    3
  // [{1}, {2}, {3}, {4}]
  // .find() ---> {3}
  // .findIndex() ---> 2
  // .filter() ---> [{3}]

  const edit = () => {
    const index = products.findIndex(product => product.id === Number(product_id));
    products[index] = {
        "id": Number(idRef.current.value),
        "image": imageRef.current.value,
        "name": nameRef.current.value,
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "active": activeRef.current.checked
    }
    fetch(process.env.REACT_APP_DB_URL_PRODUCTS, { "method": 'PUT', "body" : JSON.stringify(products)})
    .then(() => navigate("/admin/products"));
  }

  if (found === undefined) {
    return <div>Toodet ei leitud</div>
  };

  return (
    <div>
      <label>ID </label><br />
      <input ref={idRef} type="number" defaultValue={found.id} /> <br /><br />
      <label>Name </label><br />
      <input ref={nameRef} type="text" defaultValue={found.name} /> <br /><br />
      <label>Price </label><br />
      <input ref={priceRef} type="number" defaultValue={found.price} /> <br /><br />
      <label>Image </label><br />
      <input ref={imageRef} type="text" defaultValue={found.image} /> <br /><br />
      <label>Category </label><br />
      <input ref={categoryRef} type="text" defaultValue={found.category} /> <br /><br />
      <label>Description </label><br />
      <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br /><br />
      <label>Active </label><br />
      <input ref={activeRef} type="checkbox" defaultChecked={found.active} /> <br /><br /><br />
      <button onClick={edit}>Muuda</button>
    </div>
  )
}

export default EditProduct