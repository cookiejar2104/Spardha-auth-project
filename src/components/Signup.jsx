import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { database } from './FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
  const nav = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(database, email, password).then(data=>{
      console.log(data, "data");
      nav('/home')
    }).catch(err=>{
      alert(err.code)
    })
  }


  return (
    <div className='mx-10 my-[100px] md:m-auto md:my-[100px] max-w-[700px] justify-center p-10 shadow-slate-700 shadow-2xl bg-[#242424] rounded-2xl'>
    <div className='text-white justify-center text-3xl font-bold'>SIGNUP</div>
    <div>
      <form action="" className='flex flex-col pt-6' onSubmit={(e)=>handleSubmit(e)}>
        <input type="email" name="email" placeholder='E-mail' className='mt-10 p-4 rounded-lg'/>
        <input type="password" name="password" placeholder='Password' className='mt-4 p-4 rounded-lg'/>
        
        <button type='submit' className='mt-4 p-4 w-full bg-slate-800 border border-slate-600 hover:border hover:border-white rounded-full'>CREATE ACCOUNT</button>
        
      </form>
    </div>
    <div className='pt-6 mx-6 sm:text-2xl'>Have account? <span className='text-cyan-500  hover:text-white'><Link to='/'>Login</Link></span></div>
    </div>
    )
}

export default Signup