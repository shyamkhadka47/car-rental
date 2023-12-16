import React from 'react'
import HeroOverlayImg from '../components/HeroOverlayImg'
import PlanYourTrip from '../components/PlanYourTrip'
import Saving from '../components/Saving'
import Banner from '../components/Banner'

const About = () => {
 
  return (
    <div >
      <HeroOverlayImg/>

        <div className='flex justify-center items-center flex-col md:flex-row max-w-[1280px] gap-20 mt-32 mx-auto '>
          <img src="../../images/about.jpg" width={400} alt="" />
          <div className='flex flex-col w-[250px] md:w-[400px]'>
            <h3 className='capitalize text-start text-2xl font-semibold'>about company</h3>
            <h1 className='capitalize text-start text-3xl font-extrabold'>You start the engine and your adventure begins</h1>
            <p className='mt-10'>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
              <div className='flex flex-wrap  gap-20'>
              <div className='mt-10'>
                <img src="../../images/van.png" alt="" />
                <div className='flex gap-2 mt-2'>
                  <h1 className='text-4xl font-extrabold'> 20</h1>
                  <div className='max-w-[10px] font-semibold mt-[-10px]'>
                    <p>Car Types</p>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <img src="../../images/carinhome.png" alt="" />
                <div className='flex gap-2 mt-2'>
                  <h1 className='text-4xl font-extrabold'> 20</h1>
                  <div className='max-w-[10px] font-semibold mt-[-10px]'>
                    <p>Rental Outlets</p>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <img src="../../images/garage.png" alt="" />
                <div className='flex gap-2 mt-2'>
                  <h1 className='text-4xl font-extrabold'> 20</h1>
                  <div className='max-w-[10px] font-semibold mt-[-10px]'>
                    <p>Repair Shop</p>
                  </div>
                </div>
              </div>
              </div>
          </div>

        </div>
      <PlanYourTrip/>
      <Banner/>
    </div>
  )
}

export default About