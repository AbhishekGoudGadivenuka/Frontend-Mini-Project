import { useForm } from 'react-hook-form';
import './FormDemo.css';

function FormDemo() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // handle form submit
  function handleFormSubmit(userobj) {
    console.log(userobj);
  }

  return (
    <div>
      <h1 className="display-1 text-center bg-warning text-light">Form-Submission</h1>
      <form className=" form-container w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" id="firstName" className="form-control" {...register('firstName', { required: true, minLength: 4, maxLength: 8 })} />
            {errors.firstName?.type === 'required' && <p className='text-danger'>First Name is required</p>}
            {errors.firstName?.type === 'minLength' && <p className='text-danger'>Min length should be 4</p>}
            {errors.firstName?.type === 'maxLength' && <p className='text-danger'>Max length should be 8</p>}
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" id="lastName" className="form-control" {...register('lastName', { required: true, minLength: 4, maxLength: 8 })} />
            {errors.lastName?.type === 'required' && <p className='text-danger'>Last Name is required</p>}
            {errors.lastName?.type === 'minLength' && <p className='text-danger'>Min length should be 4</p>}
            {errors.lastName?.type === 'maxLength' && <p className='text-danger'>Max length should be 8</p>}
          </div>
        </div>

        <div className="form-row mb-3">
          <div className="col">
            <label htmlFor="date" className="form-label">Birthday</label>
            <input type="date" id="date" className="form-control" {...register('date', { required: true })} />
            {errors.date?.type === 'required' && <p className='text-danger'>Phone number is required</p>}
          </div>
          <div className="col">
            <label>Gender</label>
            <div className="form-check">
              <input type="radio" id="male" className="form-check-input" {...register('gender',{ required: true })} />
              <label htmlFor="male" className="form-check-label">Male</label>
              
            </div>
            <div className="form-check">
              <input type="radio" id="female" className="form-check-input" {...register('gender')} />
              <label htmlFor="female" className="form-check-label">Female</label>
            </div>
          </div>
        </div>

        <div className="form-row mb-3">
          <div className="col">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" {...register('email', { required: true})} />
            {errors.email?.type === 'required' && <p className='text-danger'>Email is required</p>}
          </div>
          <div className="col">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="number" id="phoneNumber" className="form-control" {...register('phoneNumber', { required: true, maxLength: 10 })} />
            {errors.phoneNumber?.type === 'required' && <p className='text-danger'>Phone number is required</p>}
            {errors.phoneNumber?.type === 'maxLength' && <p className='text-danger'>Max length should be 10</p>}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="sub">Subject</label>
          <select
            id="sub"
            className="form-select"
            defaultValue=""
            {...register("sub", { required: true })}
          >
            <option value="" disabled>
              Choose a Subject
            </option>
            <option value="html">html</option>
            <option value="css">Css</option>
            <option value="Bootstrap">BootStrap</option>
            <option value="React js">react js</option>
            <option value="Node js">Node js</option>
          </select>
          {errors.sub?.type === "required" && (
            <p className="text-danger">Required</p>
          )}
        </div>

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default FormDemo;
