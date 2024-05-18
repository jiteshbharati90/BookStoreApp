import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (ev) => {
    console.log(ev);
    
    
  }
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="get" action='/api/login'>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_model_3").closest()}>✕</Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br></br>
              <input
                type='text'
                placeholder='Enter your Email'
                className='input input-bordered w-full max-w-xs'
                {...register("email", { required: true })}
              ></input>
              <br />
              {errors.email && <span className='text-md text-red-500' >This field is required</span>}
            </div>
            <br />
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br></br>
              <input
                type='text'
                placeholder='Enter your Password'
                className='input input-bordered w-full max-w-xs'
                {...register("password", { required: true })}
              ></input>
              <br />
              {errors.password && <span className='text-md text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
              
              <p>Not registered?{" "} <Link to="/Signup" className='text-blue-500 cursor-pointer underline' >Singup</Link>{" "}</p>
            </div>
            </form> 
          </div>

        </dialog>
      </div>

    </>
  )
}

export default Login
