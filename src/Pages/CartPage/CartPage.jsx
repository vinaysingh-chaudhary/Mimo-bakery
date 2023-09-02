import React from 'react'
import { useSelector } from 'react-redux'
import CartProductCard from '../../Components/CartProductCard';
import { v4 as uuidv4 } from 'uuid';
import {TbShoppingCart} from 'react-icons/tb'

import {remove} from '../../Store_Redux/Slices/CartSlice'
import { useDispatch } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector(store => store.cartSlice)
  const dispatch = useDispatch()

  console.log(cartItems);

  const removeCart =(index) => {
      dispatch(remove(index))
  }



  return (

    <div className='h-[94%]'>
        <div className='h-[90%] flex items-center flex-col gap-3 bg-black overflow-y-scroll py-4'>
           { cartItems?.length > 0 
           ? (cartItems?.map((item, index) => {
              return <CartProductCard key={uuidv4()} {...item} removeCart={() =>removeCart(index)}/>
            })) 
            : (<div className=' h-full w-2/3 flex justify-center items-center text-xl text-white'><p className='text-center'>{`Dude add something =( your cart is empty`}</p></div>)
           }
        </div>

       { cartItems?.length > 0 && <div className='w-full h-[10%] border-2'>

        </div>}

    </div>
  )
}

export default CartPage
