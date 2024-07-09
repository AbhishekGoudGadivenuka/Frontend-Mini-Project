
/*import './Child.css'
let Child = (props) => {
  return (
    <div className='Child-container'>
      <button onClick={props.Increment}>Increment</button>
      <button onClick={props.Decrement}>Decrement</button>
    </div>
  );
};

export default Child;*/
import './Child.css'
let Child = (props) => {
  return (
    <div>   <h2>Home</h2>
       <div className='col'>
      <div className='card'>
        <img src={props.u.image} alt=''></img>
        <div className='card-body'>
          <h6>Title:{props.u.id}</h6>
          <h6>Title:{props.u.id}</h6>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Child;

