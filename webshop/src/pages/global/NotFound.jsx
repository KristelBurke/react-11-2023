import React from 'react';
import { Link } from 'react-router-dom'; 

function NotFound() {
  return (
    <div>
      <h2>Lost your way?</h2>
      <img className="notfound_img" src="/notFound.jpg" alt="" />
      <br />
      <br />
      <Link to="/">
        <button>Go back to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;