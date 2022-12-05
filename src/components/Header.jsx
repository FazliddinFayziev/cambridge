import React, { useState } from 'react'
import { Logo } from '../assets/img'
import { MdMenuBook } from "react-icons/md"
import { FaWindowClose } from "react-icons/fa"

const Header = () => {
    const [nav, setNav] = useState();
    const handleNav =() => {
        setNav(!nav)
    };

  return (
    <header>
        <nav>
            <div className='flex justify-between bg-blue-300 w-full h-[64px] px-[10%]'>
                <a href="">
                    <img className='w-[75px] h-[62px] py-3 px-3' src={Logo} alt="" />
                </a>
                <div className='hidden md:flex'>
                    <ul className='flex justify-end py-5 px-5 font-semibold'>
                        <li className='inline-block mx-2 hover:border-b-blue-900 hover:border-b-2'>
                            <a href="">Home</a>
                        </li>
                        <li className='inline-block mx-2 hover:border-b-blue-900 hover:border-b-2'>
                            <a href="">About Us</a>
                        </li>
                        <li className='inline-block mx-2 hover:border-b-blue-900 hover:border-b-2'>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
                
                {/* HAMBURGER */}
                <div onClick={handleNav} className='block md:hidden justify-end py-5 px-5 mx-[-10%] cursor-pointer'>
                    {nav ? <FaWindowClose className='text-blue-900 text-[30px]' /> : <MdMenuBook className='text-blue-900 text-[30px]' />}
                </div>

                {/* MOBILE */}
                 <div className={nav ? 'md:hidden w-full h-[150px] bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-50 text-white absolute top-[64px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
                    <ul className='my-8 font-serif'>
                        <li className='text-[15px] hover:border-b-white hover:border-b-2 my-2'>
                            <a href="">Home</a>
                        </li>
                        <li className='text-[15px] hover:border-b-white hover:border-b-2 my-2'>
                            <a href="">About Us</a>
                        </li>
                        <li className='text-[15px] hover:border-b-white hover:border-b-2 my-2'>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>
  )
}

export default Header