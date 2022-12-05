import React from 'react'
import { blackLogo } from '../assets/img'

const Footer = () => {
  return (
    <div className='w-full h-[15vh] bg-blue-300 mb-0 flex justify-center'>
      <div className='w-[80px] h-[80px] mx-auto my-auto'>
        <img className='object-cover' src={blackLogo} alt="" />
      </div>
      
    </div>
  )
}

export default Footer
