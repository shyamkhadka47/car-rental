import React from 'react'
import { MdCall } from "react-icons/md";
import { LuMail } from "react-icons/lu";




const Footer = () => {
  return (
    <div className='max-w-[1280px] mx-auto my-20'>
        <div className='flex flex-col flex-wrap gap-5 md:flex-row md:justify-between  px-20'>
            <div > 
               <p className=' underline-offset-[10px] decoration-red-600 decoration-4 underline '> <span className='text-3xl text-start font-bold text-red-600'>Car </span><span className='text-2xl '>Rental</span></p>
                <p className='pt-5 w-[250px]'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
              <div className='flex gap-2 mt-4'>  <span><MdCall className='mt-1' size={20} /></span >   <a href='tel:9812136069'> (123) -456-789</a></div>
              <div className='flex gap-2 my-4'>  <span><LuMail className='mt-1' size={20} /></span >   something@gmail.com</div>
              Design by <span className='font-bold'>Shyam Khadka</span>

            </div>
            <div className='w-[250px]'>
                <p className='text-3xl text-start font-bold  underline-offset-[10px] decoration-red-600 decoration-4 underline'>Company </p>
                <ul className='mt-5'>
                    <li className=' capitalize cursor-pointer hover:text-[#ff4d30] duration-300 transition-all mb-4'>new york</li>
                    <li className=' capitalize cursor-pointer hover:text-[#ff4d30] duration-300 transition-all mb-4'>careers</li>
                    <li className=' capitalize cursor-pointer hover:text-[#ff4d30] duration-300 transition-all mb-4'>mobile</li>
                    <li className=' capitalize cursor-pointer hover:text-[#ff4d30] duration-300 transition-all mb-4'>blog</li>
                    <li className=' capitalize cursor-pointer hover:text-[#ff4d30] duration-300 transition-all mb-4'>how we work</li>
                </ul>
            </div>
            <div className='w-[250px]'>
                <p className='text-3xl text-start font-bold underline-offset-[10px] decoration-red-600 decoration-4 underline'>Working Hours </p>
                <ul className='mt-5'>
                    <li className=' capitalize cursor-pointer hover:text-[#ff4d30] duration-300 transition-all mb-4'>Mon - Fri: 9:00AM - 9:00PM</li>
                    <li className=' capitalize cursor-pointer hover:text-[#ff4d30] duration-300 transition-all mb-4'>Sat: 9:00AM - 19:00PM</li>
                    <li className=' capitalize cursor-pointer hover:text-[#ff4d30] duration-300 transition-all mb-4'>Sun: Closed
</li>
                  
                </ul>
            </div>
            <div className='w-[250px]'>
                <p className='text-3xl text-start font-bold underline-offset-[10px] decoration-red-600 decoration-4 underline'>Subscription </p>
               <div className='mt-5 '>
               <p>Subscribe your Email address for latest news & updates.</p>
               <input type="text" placeholder='Enter Email Address' className=' bg-[#ececec] pl-3 py-3 w-[250px] outline-none mt-4' />
               <button className="capitalize mt-2 w-full text-center hover:bg-transparent hover:text-black border-[2px] border-black transition-all duration-300 bg-[black] px-[2rem] py-[1rem] font-bold text-white  ">
              submit
                
              </button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer