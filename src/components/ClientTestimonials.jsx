import React from 'react'
import ClientCard from './ClientCard'

const ClientTestimonials = () => {
  return (
    <div className='bg-[#f8f8f8] '>
        <div className='flex flex-col items-center justify-center py-20'>

            <div className='flex flex-col justify-center items-center max-w-[35rem]'> 
            <h3 className='text-2xl font-bold capitalize text-center'>Reviewed by People</h3>
            <h1 className='text-4xl font-extrabold capitalize text-center'>Client's Testimonials</h1>
            <p className='mt-6  text-center leading-5'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>


           <div>
          <div className='mt-20 flex justify-center flex-wrap gap-8'>
          <ClientCard text={`"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "`} image={"../../images/client1.webp"} name={"Parry Hotter"} location={"Belgrade"}/>
            <ClientCard text={`"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"`} image={"../../images/client2.jpeg"} name={"Ron Rizzly"} location={"Novi Sad"}/>
          </div>
           </div>

        </div>
    </div>
  )
}

export default ClientTestimonials