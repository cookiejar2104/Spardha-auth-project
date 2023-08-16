import React from 'react'
import { Link } from 'react-router-dom'
import { database } from './FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'


export const Home = () => {
  const nav = useNavigate();

  const handleClick = () => {
    signOut(database).then(val => {
      console.log(val);
      nav('/')
    })
    console.log("hello");
  }

  return (
    <div className='mx-10 my-[100px] md:m-auto md:my-[100px] max-w-[700px] justify-center p-10 shadow-slate-700 shadow-2xl bg-[#242424] rounded-2xl border border-md border-slate-600'>
      <div className='text-white text-2xl justify-center sm:text-3xl font-bold '>Welcome to <span className='text-cyan-500 sm:text-4xl'>Spardha'23</span></div>

      <div className='pt-6 sm:text-2xl'>Spardha, IIT (BHU) Varanasi's annual sports fest, boasts 36+ years of glory. A premier Northern India event, it hosts 1000+ athletes competing in diverse sports, showcasing exceptional talent and fervor.</div>
      <div>

        <button className='p-4 my-10 bg-slate-800  border border-slate-500 rounded-lg hover:border-white' onClick={handleClick}>LOGOUT</button>

      </div>
    </div>
  )
}
