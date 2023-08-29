import React, { useState } from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import {TbShoppingCart} from 'react-icons/tb'
import {MdClose} from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'

import { NavLink } from 'react-router-dom'
 
const Navbar = () => {
    const [activeSearch, setActiveSearch] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)
    const navigate = useNavigate()


  return (
    <div className='h-[6%] relative flex justify-between items-center bg-[#111111]' >

        <NavLink to="/"><h1 className='text-white pl-3'>Mimo Bakers</h1></NavLink>


        {/* Phone Design for search Panel only visisble for phone */}
     <div className={`absolute w-full h-full flex ${activeSearch ? "top-0" : "-top-96"} bg-[#111111] transition-all  duration-500 sm:hidden ` }>
          <input 
          type="text" 
          className='outline-none text-white w-5/6 bg-[#111111] px-6' 
          placeholder='Search' />

        <button 
        onClick={() => setActiveSearch(false)} 
        className=' text-white w-1/6 flex justify-center items-center'
        ><MdClose className='text-2xl'/></button>
     </div>


     <div className={`w-2/3 h-screen sm:hidden text-white bg-[#111111] absolute top-0 ${activeMenu ? "-right-1" : "-right-96"} transition-all duration-1000 `}>

        <div className='w-full flex justify-end mt-3 mr-2 '>
           <button 
           onClick={() => setActiveMenu(false)} 
           className= 'text-white w-1/6 flex justify-center items-center'
           ><MdClose className='text-2xl'/></button>
        </div>


     </div>



        {/* search  Panel for other screens except phone */}


    <div className=' w-[25%] flex justify-around text-white '>

          {/* navigation keys for bigger screens*/}
      <ul className='justify-center gap-4 items-center hidden' >
        <li>Home</li>
        <li>About</li>
      </ul>

        <div className=' flex justify-center gap-3'>
            {/* phone search button => only visible for phone */}
            
          <button onClick={() => setActiveSearch(true)} className='sm:hidden text-2xl'><HiOutlineSearch/></button>
          <button onClick={() => navigate("/cart") } className='text-2xl'><TbShoppingCart/></button>
          <button onClick={() => setActiveMenu(true)} className='text-2xl sm:hidden'><RxHamburgerMenu/></button>
       </div>

       </div>

    </div>
  )
}

export default Navbar
