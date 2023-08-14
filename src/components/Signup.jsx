import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='m-auto my-[100px] max-w-[700px] justify-center p-10'>
    <div className='text-white justify-center text-3xl font-bold'>SIGNUP</div>
    <div>
      <form action="" className='flex flex-col pt-6'>
        <input type="email" placeholder='E-mail' className='mt-10 p-4 rounded-lg'/>
        <input type="password" placeholder='Password' className='mt-4 p-4 rounded-lg'/>
        <button className='mt-4 p-4 bg-slate-800 border border-slate-600 hover:border hover:border-white rounded-full'><Link to='/home'>CREATE ACCOUNT</Link></button>
      </form>
    </div>
    <div className='pt-6 mx-4 sm:text-2xl'>Already have account? <span className='text-cyan-500 underline underline-offset-2 hover:text-white'><Link to='/'>Login</Link></span></div>
    </div>
    )
}

export default Signup