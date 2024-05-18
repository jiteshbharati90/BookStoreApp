import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
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
   <dailog className='flex h-screen items-center justify-center  '>
   <div className="w-[600px] ">
  <div className="modal-box ">
    <form   onSubmit={handleSubmit(onSubmit)}  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Singup</h3>
    <div className='mt-4 space-y-2'>
      <span>Name</span>
      <br></br>
      <input
      type='text'
      placeholder='Enter your Name'
      className='input input-bordered w-full max-w-xs'
      {...register("name", { required: true })}></input>
      <br/>
       {errors.email && <span className='text-md text-red-500' >This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br></br>
      <input
      type='text'
      placeholder='Enter your Email'
      className='input input-bordered w-full max-w-xs'
      {...register("email", { required: true })}></input>
      <br/>

       {errors.email && <span className='text-md text-red-500' >This field is required</span>}
    </div>
    <br/>
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br></br>
      <input
      type='text'
      placeholder='Enter your Password'
      className='input input-bordered w-full max-w-xs' {...register("password", { required: true })}></input>
      <br/>
       {errors.email && <span className='text-md text-red-500' >This field is required</span>}
    </div>
   <div className='flex justify-around mt-4'>
   <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
   <p>Have account?{ " "} <button  className='text-blue-500 cursor-pointer underline'
    onClick={()=>
      document.getElementById("my_modal_3").showModal()
    
  }
  >
    Login</button>{ " "}
    <Login/>
    </p>
    
   </div>
   </form>
  </div>
  
</div>
</dailog>
   </>
  )
}

export default Signup
