import React, { useState, useEffect } from 'react'
import {Server} from 'miragejs'
import  MockAPIData from '../../MockData/MockAPIData.json'
import ProductCard from '../../Components/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import LayoutButtons from '../../Components/LayoutButtons';

import { add } from '../../Store_Redux/Slices/CartSlice';
import { useDispatch } from 'react-redux';



const SearchResultPage = () => {
  const [bakeryProducts, setBakeryProducts] = useState()
  const [filteredData, setFilteredData] = useState()
  const [listView, setListView] = useState(false)
  const [searchQuery, setSearchQuery] = useState()
  const dispatch = useDispatch()

  useEffect( () => {

    const server = new Server();
    server.get("/api/bakery", {data : MockAPIData})

    const DataAPICall = async() => {
      try{
        const response = await fetch("/api/bakery");
        const json = await response.json();
        setBakeryProducts(json.data)
      }catch(error){
        console.log(error)
      }
    }

    DataAPICall();

    return () => {
      server.shutdown();
    };
  },[]) 

  
    const filterBySearch = (searchQuery)=> {
      const newFilterData =  bakeryProducts?.filter((item) => item?.product_name?.toLowerCase()?.includes(searchQuery))
      setFilteredData(newFilterData);
    }


    const addToCart = (item) => {
      dispatch(add(item));
    }

  return (
    <div className='w-full h-[94%]  flex flex-col justify-between items-center gap-5'>

    <div className="w-full md:w-3/6 lg:w-2/6  h-14 flex justify-between bg-[#c0aa97] -mt-1 md:mt-4 md:rounded-md ">
          <input 
          type="text" 
          className='outline-none text-black w-5/6 bg-[#c0aa97] px-6 border-none md:rounded-md' 
          placeholder='Search your caffeine' 
          onChange={(e) => setSearchQuery(e.target.value.length>0? e.target.value : "")}
          onKeyDown={(e) => {if(e.key==="Enter") filterBySearch(searchQuery)}}
          />

          <button 
          onClick={() => filterBySearch(searchQuery)}
          className='text-white md:pr-6 pr-3'>Search</button>

     </div>


     { filteredData?.length>0 && 
     <div className='h-[93%] flex flex-col gap-3 mt'>
     <div className='flex flex-wrap justify-center gap-4'>
        { 
          filteredData?.map((item) => {
            return <ProductCard id={uuidv4()} key={uuidv4()} {...item} listView={listView} addToCart={() => addToCart(item)}/>
          })
        }
        </div>
        </div>}
    </div>
  )
}

export default SearchResultPage
