import React from 'react'

const PlanYourTrip = () => {
  return (
    <div className='mt-[200px] mb-10'>
    <div className='flex flex-col max-w-[1280px] mx-auto'>
            <div className='flex flex-col items-center gap-4 mb-10'>
            <h3 className='font-semibold text-center text-2xl capitalize '>plan your trip</h3>
            <h1 className='font-bold text-center capitalize text-5xl'>Quick & easy car rental</h1>
            </div>
            <div className='flex lg:px-10 gap-15 justify-center items-center flex-wrap'>
                <div className='flex flex-col max-w-[400px] justify-center items-center'>
                    <img src="../../images/3.png" width={170} alt="" />
                    <h1 className='font-bold text-3xl capitalize text-center'>select car</h1>
                    <p className='mt-10 text-center leading-8  '>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div className='flex flex-col max-w-[400px] items-center'>
                    <img src="../../images/6.png" width={170} alt="" />
                    <h1 className='font-bold text-3xl capitalize text-center'>Contact Operator</h1>
                    <p className='mt-10 text-center leading-8 '>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div className='flex flex-col max-w-[400px] items-center'>
                    <img src="../../images/5.png" width={170} alt="" />
                    <h1 className='font-bold text-3xl capitalize text-center'>Let's Drive</h1>
                    <p className='mt-10 text-center leading-8 '>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlanYourTrip