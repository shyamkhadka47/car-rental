import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle]=useState(false)
  return (
    <div className=' w-full bg-white shadow-sm'>
        <div className='max-w-[1280px] mx-auto'>

    <div className='flex justify-between py-3 px-12'>
        <Link to={"/"}><img src="../../images/logo.png" width={140} alt="" /></Link>
        <div className='hidden lg:block'>
            <ul className='flex gap-5 mt-[15px]'>
                <Link to={"/"} className='font-semibold capitalize hover:text-[#ff4d30] text-[15px] transition-all duration-300'>Home</Link>
                <Link to={"/about"} className='font-semibold capitalize hover:text-[#ff4d30] text-[15px] transition-all duration-300'>about</Link>
                <Link to={"/vehicle-models"} className='font-semibold capitalize hover:text-[#ff4d30] text-[15px] transition-all duration-300'>vehicle models</Link>
                <Link to={"/testimonials"} className='font-semibold capitalize hover:text-[#ff4d30] text-[15px] transition-all duration-300'>testimonials</Link>
                <Link to={"/our-team"} className='font-semibold capitalize hover:text-[#ff4d30] text-[15px] transition-all duration-300'>our team</Link>
                <Link to={"/contact"} className='font-semibold capitalize hover:text-[#ff4d30] text-[15px] transition-all duration-300'>contact</Link>
            </ul>
        </div>

        <div className='hidden lg:block'>
        <Link to={"/"} className='font-semibold mt-[15px] capitalize hover:text-[#ff4d30] text-[15px] transition-all duration-300 mr-[20px]'>sign in</Link>
        <button className="capitalize rounded-md bg-[#ff4d30] px-[1rem] transition-all duration-500 py-[.5rem] font-bold text-white shadow-[0px_10px_15px_0_rgba(255,83,48,.35)] hover:shadow-[0px_10px_15px_0_rgba(255,83,48,.6)]">
              register
                
              </button>
        </div>
        {!toggle && <FaBars className='lg:hidden mt-3 cursor-pointer' size={30} onClick={()=>setToggle(true)}/> }


    </div>
    
    <div className={`${toggle? " translate-x-0 ":" -translate-x-full "} lg:hidden w-full duration-300 transition-all ease-in-out  bg-white fixed top-0 h-screen z-[99999]`}>
    <IoClose className='cursor-pointer absolute top-4 right-10 lg:hidden' size={40} onClick={()=>setToggle(false)}/>
            <ul className='flex flex-col items-center justify-center gap-10 mt-[150px]'>
                <Link onClick={()=>{setToggle(false)}}   to={"/"} className='font-semibold  text-2xl capitalize hover:text-[#ff4d30]  transition-all duration-300'  >Home</Link>
                <Link  onClick={()=>{setToggle(false)}} to={"/about"} className='font-semibold text-2xl  capitalize hover:text-[#ff4d30]  transition-all duration-300'>about</Link>
                <Link  onClick={()=>{setToggle(false)}} to={"/vehicle-models"} className='font-semibold text-2xl  capitalize hover:text-[#ff4d30]  transition-all duration-300'>vehicle models</Link>
                <Link  onClick={()=>{setToggle(false)}} to={"/testimonials"} className='font-semibold text-2xl  capitalize hover:text-[#ff4d30]  transition-all duration-300'>testimonials</Link>
                <Link  onClick={()=>{setToggle(false)}} to={"/our-team"} className='font-semibold text-2xl  capitalize hover:text-[#ff4d30]  transition-all duration-300'>our team</Link>
                <Link  onClick={()=>{setToggle(false)}} to={"/contact"} className='font-semibold text-2xl  capitalize hover:text-[#ff4d30]  transition-all duration-300'>contact</Link>
            </ul>
        </div>


        </div>
    </div>
  )
}

export default Navbar