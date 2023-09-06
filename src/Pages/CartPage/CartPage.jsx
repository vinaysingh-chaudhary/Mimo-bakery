import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartProductCard from '../../Components/CartProductCard';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../../public/vite.png'
import {remove} from '../../Store_Redux/Slices/CartSlice'
import { useDispatch } from 'react-redux';



const loadRazerpayScript  = (src) => {
  return new Promise( (resolve => {
    const script = document.createElement('script');
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script) 
  }))}


const CartPage = () => {

  const cartItems = useSelector(store => store.cartSlice)
  const dispatch = useDispatch()
  const [totalPrice, setTotalPrice] = useState(0)
  const razorpay_key = import.meta.env.VITE_RAZORPAY_API_KEY;



    const displayRazorpay = async() => {
        const result = await loadRazerpayScript("https://checkout.razorpay.com/v1/checkout.js")

        if(!result){
          alert("Payment gatway failed to load");
          return
        }

      const options = {
        "key":  razorpay_key, 
        "amount": (totalPrice*100).toString(), 
        "currency": "INR",

        "name": "Mimo Bakery", 
        "description": "Thankyou for becoming our bakery's customer",
        "image": logo,
        "receipt" : uuidv4(),
        "prefill": { 
            "name": "Ashwry", 
        },
    };

    const paymentObject = new Razorpay(options);
    paymentObject.open()
    }



  const removeCart =(index) => {
      dispatch(remove(index))
  }


  useEffect(() => {
    setTotalPrice(cartItems?.reduce((sum, current) => sum + current.price, 0))
},[cartItems])


  return (

    <div className='h-[94%] bg-[#F5E8E4]'>
        <div className='h-[90%] flex items-center flex-col gap-3 overflow-y-scroll py-4'>
           { cartItems?.length > 0 
           ? (cartItems?.map((item, index) => {
              return <CartProductCard key={uuidv4()} {...item} removeCart={() =>removeCart(index)}/>
            })) 
            : (<div className=' h-full w-2/3 flex justify-center items-center text-xl text-white'><p className='text-center'>{`Dude add something =( your cart is empty`}</p></div>)
           }
        </div>

       { cartItems?.length > 0 && 
       <div className='w-full h-[10%] text-black flex justify-center items-center bg-gradient-to-br from-[#F1DEC9] via-[#A4907C] to-[#8D7B68]'>
                <div className='h-[100%] w-1/2 flex justify-center items-center flex-col'>
                    <p>Item  <span className='text-2xl'>{cartItems?.length}</span>x</p>
                    <p className='text-black'>Total Price : <span>{totalPrice}</span></p>
                </div>

          <div className='w-1/2 h-[100%] flex justify-center items-center'>
                <button
                      className=" w-3/4 h-1/2 rounded-3xl text-xl bg-green-500 text-black hover:bg-white hover:text-black"
                      onClick={() =>displayRazorpay()}
                 >Pay</button>
          </div>
              
        </div>}

    </div>
  )
}

export default CartPage
