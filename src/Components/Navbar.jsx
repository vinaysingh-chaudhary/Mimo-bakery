import React, { useState } from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import {TbShoppingCart} from 'react-icons/tb'
import {MdClose} from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'
import logo from '../../public/logo.png'

import { NavLink } from 'react-router-dom'
 
const Navbar = () => {
  

    const [activeMenu, setActiveMenu] = useState(false)
    const navigate = useNavigate()

    // const [searchQuery, setSearchQuery] = useState("")





  return (
    <div className='h-[6%] relative flex justify-between items-center bg-[#C8B6A6] mb-0' >

        <NavLink to="/"><p className='text-black text-3xl pl-3 flex gap-2 justify-center items-center'><img src={logo} alt="Logo"  className='h-[30px]'/> Mimo Bakers </p></NavLink>




     <div className={` z-50 w-2/3 h-screen justify-start text-white bg-[#111111] absolute top-0 right-0 ${activeMenu ? "flex" : "hidden"} transition-all duration-1000 `}>

        <div className='w-full h-9 flex justify-end mt-3 border-2'>
           <button 
           onClick={() => setActiveMenu(false)} 
           className= 'text-white w-1/6 flex justify-center items-center'
           ><MdClose className='text-2xl'/></button>
        </div>



     </div>



        {/* search  Panel for other screens except phone */}


    <div className=' w-[25%] flex justify-around text-white xl:justify-center gap-7 '>

          {/* navigation keys for bigger screens*/}
      <ul className='justify-center gap-4 items-center hidden xl:flex' >
        <li className=' cursor-pointer text-black text-lg hover:underline' onClick={() => navigate("/")}>Home</li>
        <li className=' cursor-pointer text-black text-lg hover:underline' onClick={() => navigate("about")}>About</li>
      </ul>

        <div className=' flex justify-center gap-3 lg:-mr-40'>
            {/* phone search button => only visible for phone */}
            
          <button onClick={() => navigate("search")} className='text-2xl text-black'><HiOutlineSearch/></button>
          <button className='text-2xl text-black'> <NavLink to="cart"><TbShoppingCart/></NavLink></button>
          <button onClick={() => setActiveMenu(true)} className='text-2xl sm:hidden text-black'><RxHamburgerMenu/></button>
       </div>



       </div>

    </div>
  )
}

export default Navbar
