import React from "react";
import {useForm} from 'react-hook-form'
import {useNavigate,Link} from 'react-router-dom'
import { hashSync } from "bcryptjs";
function Register() {
  let {register,handleSubmit, formState: { errors } }=useForm()
  let navigate=useNavigate()
  function onRegisterFormSubmit(newUser){
    let hashedPassword=hashSync(newUser.password,5)
    newUser.password=hashedPassword
    fetch('http://localhost:4000/users', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
    .then(res=>{
      if(res.status===201){
        navigate('/login')
      }
    })
    .catch(err=>console.log("err in registration",err))
  }
  return (
    <div >
      <h1 className="display-3 text-info text-center">User Registration form</h1>
      <form action="" className="w-50 mx-auto mt-5 bg-light p-4" onSubmit={handleSubmit(onRegisterFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" {...register("username")} id="username" className="form-control mb-4" />
          {errors.username?.type === 'required' && <p className='text-danger'>Username is required</p>}
{errors.username?.type === 'minLength' && <p className='text-danger'>Min length should be 4</p>}
{errors.username?.type === 'maxLength' && <p className='text-danger'>Max length should be 8</p>}

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" {...register("password")} id="password" className="form-control mb-4" />
          {errors.password?.type === 'required' && <p className='text-danger'>Password is required</p>}
{errors.password?.type === 'minLength' && <p className='text-danger'>Min length should be 4</p>}
{errors.password?.type === 'maxLength' && <p className='text-danger'>Max length should be 8</p>}
        </div>
         <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" {...register("email")} id="email" className="form-control mb-4" />
          {errors.email?.type === 'required' && <p className='text-danger'>Email is required</p>}
        </div>

        <button type="submit" className="btn btn-success btn-info text-secondary d-block mx-auto fs-5">
          Register
        </button>
      </form>
      <p className="lead text-center">
        Already registered !
          <Link to='/login' className="fs-4 ps-3">Login</Link>
        </p>
    </div>
  );
}

export default Register;