import React from 'react'

const CartProductCard = ({
    product_name,
    product_url,
    category,
    price,
    removeCart,
}) => {

    // console.log(id);

  return (
    <div className='w-[95%] h-[130px] rounded-md flex justify-around items-center bg-gradient-to-br from-[#F1DEC9] via-[#A4907C] to-[#8D7B68]'>
         
           <img src={product_url} className="h-[110px] aspect-square object-contain py-2" alt="" />
            
            <div className="h-full flex flex-col justify-center items-center text-white" >
                 <p className="text-lg text-center">{product_name}</p>
                 <p className="text-lg text-center">({category})</p>
            </div>

            <div className='h-full flex justify-center items-center flex-col pr-1'>
            <p   className="text-center text-white">{price} INR</p>
            <button
                     className="border-2 border-white w-24 rounded-2xl mt-3  text-white hover:bg-white hover:text-black"
                     onClick={() => removeCart()}
                 >Remove</button>
            </div>
    </div>
  )
}

export default CartProductCard
