import React from 'react'

const HeroOverlayImg = () => {
  return (
    <div className='relative mb-0'>
        <div className="w-full h-[402px] "><img className='w-full h-full object-contain' src="../../images/hero-img.png" alt="" /></div>
        <div className=" absolute w-full h-[402px] bg-white top-0 opacity-[.9] mb-0"></div>
    </div>
  )
}

export default HeroOverlayImg