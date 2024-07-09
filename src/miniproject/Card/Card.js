import React from 'react'
import './Card.css'
import {useNavigate,Link} from 'react-router-dom'
function Card(props) {
    let navigate = useNavigate();
    return (
        <div className="eachprod">
<Link onClick={(product)=>{
    product.preventDefault();
    navigate(`/product/${props.product.id}`,{state:props.product});

}} style={{ textDecoration: 'none' }}>
            <div className="card product">
  <img className="card-img-top" src={props.product.image} alt=""/>
  <div className="card-body" >
      <div className="titlecov">
    <h5 className="card-title" style={{textDecoration: 'none'}}>{props.product.title}</h5>
    </div>
    <h3 className="card-text" style={{textDecoration: 'none'}}>${props.product.price}</h3>
    <p>Show more</p>
  </div>
</div>
</Link>
        </div>
    )
}

export default Card
