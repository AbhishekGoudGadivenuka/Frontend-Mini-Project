import React from 'react';
import './ListItems.css'
import { useNavigate, Link } from 'react-router-dom';

function ListItems(props) {
  const navigate = useNavigate();

  const handleItemClick = (event) => {
    event.preventDefault();
    navigate(`/items/${props.product.id}`, { state: props.product });
  };

  return (
    <div>
      <Link to={`/items/${props.product.id}`} className='l text-decoration-none' onClick={handleItemClick}>
        <div className='prod'>
          <div className='card'>
            <img src={props.product.image} alt='' />
            <div className='card-body'>
              <h2>{props.product.title}</h2>
              <h3>{props.product.price}</h3>
              <p className='lead'>MoreDetails</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListItems;
