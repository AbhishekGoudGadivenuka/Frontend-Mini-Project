import "./Product.css";

function Product(props) {
  return (
    <div className="col">
      <div className="card">
        <img className="h" src={props.userdata.image} />
        <div className="card-body">
          <h6 className="lead">{props.userdata.id}</h6>
          <h6 className="lead">{props.userdata.title}</h6>
          <h6 className="lead">{props.userdata.description}</h6>
          <h6 className="lead">{props.userdata.price}</h6>
          <h6 className="lead">{props.userdata.category}</h6>
        </div>
      </div>
    </div>
  );
}
export default Product;
