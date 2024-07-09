// Users.jsx
import './Users.css';

function Users(props) {
  return (
    <div className='col-md-3'>
      <div className='card mb-4'>
        <div className='card-body'>
          <p className='lead'>ID: {props.user.id}</p>
          <p className='lead'>Name: {props.user.name}</p>
          <p className='lead'>Username: {props.user.username}</p>
          <p className='lead'>Email: {props.user.email}</p>
          <button className='btn btn-success d-block mx-auto' onClick={props.add}>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}

export default Users;
