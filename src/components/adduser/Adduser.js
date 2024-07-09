import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Adduser.css'
function Adduser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let [field, setField] = useState([]);

  function handleFormSubmit(userobj) {
    setField([...field, userobj]);
  }
  return (  
    <div>
      <h1 className='text-info text-center display-3'>User Registration</h1>
      <form className='form-container w-50 mx-auto' onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" id="username" className="form-control" {...register('username', { required: true, minLength: 4, maxLength: 8 })} />
          {errors.username?.type === 'required' && <p className='text-danger'>Username is required</p>}
          {errors.username?.type === 'minLength' && <p className='text-danger'>Min length should be 4</p>}
          {errors.username?.type === 'maxLength' && <p className='text-danger'>Max length should be 8</p>}
        </div>
        <div>
          <label htmlFor="date" className="form-label">Date of Birth</label>
          <input type="date" id="date" className="form-control" {...register('date', { required: true })} />
          {errors.date?.type === 'required' && <p className='text-danger'>DOB is required</p>}
        </div>
        <div>
          <label htmlFor="city" className="form-label">Select a city</label>
          <input type="text" id="city" className="form-control" {...register('city', { required: true })} />
          {errors.city?.type === 'required' && <p className='text-danger'>City is required</p>}
        </div>
        <button type="submit" className="btn btn-success d-block mx-auto">Add User</button>
      </form>
    <h1 className='text-warning text-center display-3'>List of Users</h1>
      <table className='table text-center w-50 mx-auto'>
        <thead>
          <tr>
            <th>Username</th>
            <th>Date</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {field.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.date}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Adduser;
