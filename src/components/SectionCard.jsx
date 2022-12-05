import React from 'react';
import { NavLink } from 'react-router-dom';

const SectionCard = ({img}) => {
  return (
    <div className='w-[160px] h-[240px] border-[2px] mx-auto border-purple-900 hover:scale-[1.05] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-5 flex flex-col '>
        <div className='flex justify-center'>
            <div className='w-[150px] h-[199px] mt-[1px]'>
                <img className='object-cover' src={img} alt="" /> 
            </div>
        </div> 
        <div className='flex justify-center w-full h-6 bg-blue-900 mt-2'>
            <NavLink>
                <button className='font-serif text-[10px] text-white font-semibold'>START</button>
            </NavLink>
        </div>
    </div>
  )
}

export default SectionCard