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

  const onSubmit = (data) => console.log(data);
  return (
    <>
    
    <div className='text-white flex h-screen items-center justify-center '>
    
    <div className= "w-[600px] ">
  <div className=" modal-box text-black">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link 
      to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    {/* name */}
    <div className='mt-4 space-y-2'>
        <span className='text-black'>Name</span>
        <br/>
        <input type="text" placeholder='Enter your full name' className='w-80 px-3  py-1 border rounded-md outline-none'
        {...register("name", { required: true })}
        />
        <br />
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* name */}
    <div className='mt-4 space-y-2'>
        <span className='text-black'>Email</span>
        <br/>
        <input type="text" placeholder='Enter your email' className='w-80 px-3  py-1 border rounded-md outline-none'
        {...register("email", { required: true })}
        />
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* password */}
    <div className='mt-4 space-y-2'>
        <span className='text-black'>Password</span>
        <br/>
        <input type="text" placeholder='Enter your password' className='w-80 px-3  py-1 border rounded-md outline-none'
        {...register("password", { required: true })}
        />
        <br />
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* button */}
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-200'>Sign up</button>
        <p className='text-sm'>Already have an account?
            {''}
             <button className='underline text-blue-500 cursor-pointer text-sm mx-1' onClick={()=> document.getElementById('my_modal_3').showModal()}>
                Login
             </button>{''}<Login/></p>
        
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
