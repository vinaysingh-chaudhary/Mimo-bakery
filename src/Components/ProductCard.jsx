import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  product_name,
  product_details,
  product_url,
  code,
  price,
  category,
  listView,
  addToCart
}) => {

  const [isDetailActive, setDetail] = useState(false)

  return (
    <div className={`${listView
      ? "w-[93%] h-[130px] rounded-md flex justify-center items-center gap-9 px-8 py-2 bg-gradient-to-br from-gray-900 via-gray-900 to-black"
      : "w-[180px] h-[250px] rounded-md flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-950 to-black "}`}
    >


      <img
        src={product_url}
        className={`h-[130px] aspect-square object-contain ${listView ? "py-2" : ""}`}
        alt=""
        onClick={() => setDetail(true)}
      />

      <div className={`flex flex-col gap- justify-center items-center ${listView ? "w-4/6" : ""}`} >
        <h1 className="text-white text-lg">{product_name}</h1>
        <p className="text-white">{price} INR</p>

        <button
          className="border-2 border-white w-24 rounded-2xl mt-3 text-white hover:bg-white hover:text-black"
          onClick={() => addToCart()}
        >Add Item</button>
      </div>




      <div className={`w-full h-full bg-[#000000b0] justify-center items-center ${isDetailActive? "flex" : "hidden"} absolute left-0 -top-1`}>
        <div 
        className='w-full h-full bg-inherit relative'
        onClick={() => setDetail(false)}
        >
        </div>

        <div className='w-2/3 h-[60%] border-2 py-4 border-gray-800 flex flex-col justify-around items-center absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black  rounded-md '>
              <img src={product_url} alt="" className="h-1/2 object-contain "/>

              <div className="h-1/2 w-full flex justify-center items-center px-2 flex-col gap-2 ">
                  <p className="text-white text-center">{product_details}</p>
                  <button
                    className="border-2 border-white w-24 rounded-2xl text-white mt-3 hover:bg-white hover:text-black "
                     onClick={() => addToCart()}
                   >Add Item</button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
