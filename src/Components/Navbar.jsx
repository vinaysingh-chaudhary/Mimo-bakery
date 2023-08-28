import React, { useState } from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [activeSeaarch, setActiveSearch] = useState(false)
    const navigate = useNavigate()


  return (
    <div className='border-2 border-green-600 h-[6%] relative flex justify-around items-center bg-[#111111]' >


        {/* Phone Design for search Panel only visisble for phone */}
     <div className={`absolute w-full h-full border-2 border-orange-600 ${activeSeaarch ? "flex" : "hidden"} ` }>
          <input 
          type="text" 
          className='outline-none text-white w-5/6 bg-[#111111] px-2' 
          placeholder='Search' />

        <button 
        onClick={() => setActiveSearch(false)} 
        className='bg-black text-white w-1/6'
        >close</button>
     </div>


        {/* search  Panel for other screens except phone */}



      <ul className=' w-2/6 border-2 border-red-400 flex justify-center gap-3 text-white'>
        <li>Home</li>
        <li>About</li>
      </ul>

        <div className=' w-2/6 border-2 border-red-400 flex justify-center gap-3 text-white'>
            {/* phone search button => only visible for phone */}
          <button onClick={() => setActiveSearch(true)}><HiOutlineSearch className='text-white'/></button>
          <button onClick={() => navigate("/cart") } className='text-white'>Cart</button>
       </div>

    </div>
  )
}

export default Navbar
