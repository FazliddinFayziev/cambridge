import React from 'react'
import { NavLink } from 'react-router-dom'
import { cambridgeArray } from '../cambridgeArray'


const Main = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>Cambridge Materials</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
            {
                cambridgeArray.map((array) => {
                    return (
                        <Cambridge {...array}></Cambridge>
                    )
                })
            }
        </div>
        
    </section>
  )
}

const Cambridge = ({img, title, category, start}) => {
    return (
        <div className='w-[160px] h-[269px] border-[2px] mx-auto border-purple-900 hover:scale-[1.05] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-5 flex flex-col '>
            <div className='flex justify-center'>
                <div className='w-[150px] h-[199px] mt-[1px]'>
                    <img className='object-cover' src={img} alt="" /> 
                </div>
            </div> 
            <h1 className='text-center font-serif font-semibold'>{title}</h1>
            <p className='text-[10px] text-gray-500 text-center font-serif'>{category}</p>
            <NavLink to={`/${start}`}>
                <div className='flex justify-center w-full h-6 bg-blue-900'>
                    <button className='font-serif text-[10px] text-white font-semibold'>START</button>
                </div>
            </NavLink>
        </div>
       
    )
}

export default Main