import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Items() {
  let { state } = useLocation();

  return (
    <div className='container'>
      <div className='col'>
        <div className='card'>
          <img src={state.image} alt='' />
        </div>
        <div className='card-body'>
          <button className='btn btn-warning text-white'>Add to cart</button>
          <button className='btn btn-danger text-white'>Buy Now</button>
        </div>
        <div>
          <h3>{state.title}</h3>
          <h5>Product Details</h5>
          <p className='lead'>{state.description}</p>
          <h3>${state.price}</h3>
        </div>
        <div>
        <Link to="/" className="link p-1 mx-2">
          <button className="btn btn-warning" type="button">
            Go Home
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Items;
