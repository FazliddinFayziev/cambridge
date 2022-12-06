import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutTest = ({ id, img, title, start }) => {
  return (
    <div className='w-[160px] h-[269px] border-[2px] mx-auto border-purple-900 hover:scale-[1.05] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-5 flex flex-col '>
      <div className='flex justify-center'>
        <div className='w-[150px] h-[199px] mt-[1px]'>
          <img className='object-cover' src={img} alt='' />
        </div>
      </div>
      <h1 className='text-center font-serif font-semibold'>{title}</h1>
      <div className='flex justify-center w-full h-6 bg-blue-900'>
        <NavLink to={`${window.location.pathname}/test/${id}`}>
          <div className='flex justify-center w-full h-6 bg-blue-900'>
            <button className='font-serif text-[10px] text-white font-semibold'>
              START
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default AboutTest
