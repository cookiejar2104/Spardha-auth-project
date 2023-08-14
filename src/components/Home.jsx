import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='m-auto my-[100px] max-w-[700px] justify-center p-10'>
      <div className='text-white text-2xl justify-center sm:text-3xl font-bold '>WELCOME TO MY PAGE</div>

      <div className='pt-6 sm:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis odio fugit illum, asperiores dolorum aliquid pariatur quam. Minus, quos placeat? </div>
      <div>
        <button className='p-4 my-10 bg-slate-800  border border-slate-500 rounded-lg hover:border-white'><Link to='/'>LOGOUT</Link></button>
      </div>
    </div>
  )
}
