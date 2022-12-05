import React from 'react'
import { Cd } from '../assets/img'

const HeroTest = () => {
  return (
    <div className='w-full bg-zinc-100 h-[50vh] flex justify-center items-center shadow-lg'>
        <img className='w-[150px] h-[120px] sm:w-[200px] sm:h-[180px]' src={Cd} alt="" />
        <h1><span className='font-serif border-b-2 border-b-blue-900'> Welcome to</span> <br /> <span className='font-serif text-blue-900 font-semibold'>TEST</span></h1>
    </div>
  )
}

export default HeroTest