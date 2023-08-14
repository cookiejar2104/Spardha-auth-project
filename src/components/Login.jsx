import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='m-auto my-[100px] max-w-[700px] justify-center p-10'>
    <div className='text-white justify-center text-3xl font-bold'>LOGIN</div>
    <div>
      <form action="" className='flex flex-col pt-6'>
        <input type="email" placeholder='E-mail' className='mt-10 p-4 rounded-lg'/>
        <input type="password" placeholder='Password' className='mt-4 p-4 rounded-lg'/>
        <button className='mt-4 p-4 bg-slate-800 border border-slate-600 hover:border hover:border-white rounded-full'><Link to='/home'>ENTER</Link></button>
      </form>
    </div>
    <div className='pt-6 text-2xl mx-4'>New here? <span className='text-cyan-500 underline underline-offset-2 hover:text-white'><Link to='/signup'>Create account</Link></span></div>
    </div>
  )
}

export default Login