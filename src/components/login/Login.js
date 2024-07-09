import React from "react";
import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import {compareSync} from 'bcryptjs'

function Login() {
  let { register, handleSubmit, formState: {errors}  } = useForm();
  let navigate=useNavigate()
  function onLoginFormSubmit(userobj) {
    fetch(
      `http://localhost:4000/users?username=${userobj.username}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((userObjArray) =>{
        if(userObjArray.length===0){
          alert("Invalid Username")
        }
        else{
          let result=compareSync(userobj.password,userObjArray[0].password)
          if (result === true) {
            navigate(`/user-dashboard/${userobj.username}` ,{state:userObjArray[0]});
          } else {
            alert("Invalid password");
          }
        }
      } );
  }

  return (
    <div>
      <h1 className="display-3 text-info text-center">User Login form</h1>
      <form
        action=""
        className="w-50 mx-auto mt-5 bg-light p-4"
        onSubmit={handleSubmit(onLoginFormSubmit)}
      >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            {...register("username", { required: true, minLength: 4, maxLength: 8 })}
            id="username"
            className="form-control mb-4"
          />
           {errors.username?.type === 'required' && <p className='text-danger'>Username is required</p>}
{errors.username?.type === 'minLength' && <p className='text-danger'>Min length should be 4</p>}
{errors.username?.type === 'maxLength' && <p className='text-danger'>Max length should be 8</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            className="form-control mb-4"
          />
          {errors.password?.type === 'required' && <p className='text-danger'>Password is required</p>}
{errors.password?.type === 'minLength' && <p className='text-danger'>Min length should be 4</p>}
{errors.password?.type === 'maxLength' && <p className='text-danger'>Max length should be 8</p>}
        </div>

        <button
          type="submit"
          className="btn btn-info text-secondary d-block mx-auto fs-5"
        >
          Login
        </button>
      </form>

      <p className="lead text-center">
        New User !
        <Link to="/register" className="fs-4 px-3">
          Register
        </Link>
        here
      </p>
    </div>
  );
}

export default Login;