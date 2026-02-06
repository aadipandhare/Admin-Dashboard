import React from 'react'
import {assets} from '../assets/assets.js'
import { useNavigate } from 'react-router-dom';



export const Navbar = () => {

  const navigate = useNavigate()
  return (
    <>
    <div className='flex items-center justify-between w-full px-5 py-3 m-0 bg-linear-to-br from-gray-800 via-gray-700 to-gray-500 '>
        <img className='w-20 h-auto' src={assets.img} alt="" />
        <p className='text-4xl font-bold text-gray-300'>ADMIN PANEL</p>
        <button onClick={()=> navigate('/')} className='bg-gray-700 text-white px-3 py-2 rounded'>Logout</button>
        
    </div>
    <div className='border-b-2   border-gray-600'></div>
   </>
  )
}
