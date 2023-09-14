import React from 'react'
import banner from '../assets/banner_image/banner.jpg'

const Banner = () => {
  return (
    <div className='w-full h-40 md:h-52  bg-white ' >
      <img src={banner} alt=""  className='w-full h-full object-cover object-center'/>
    </div>
  )
}

export default Banner
