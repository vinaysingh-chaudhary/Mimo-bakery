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
  const [sortBy ,setSortBy] = useState("")
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


    const sortByPrice = (sortBy) => {
      let sortedData = [...filteredData]; // create a new array
      if(sortBy ==="lowtohigh"){
        sortedData.sort((a,b) => a.price - b.price)
      }else if (sortBy ==="hightolow"){
        sortedData.sort((a,b) => b.price - a.price)
      }
    
      setFilteredData(sortedData) // set the state with the new sorted array
    }

    const addToCart = (item) => {
      dispatch(add(item));
    }

  return (
    <div className='w-full h-[94%] bg-black flex flex-col justify-between'>

    <div className="w-full  h-14 flex bg-[#111111] -mt-1 ">
          <input 
          type="text" 
          className='outline-none text-white w-5/6 bg-[#111111] px-6 border-none' 
          placeholder='Search' 
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {if(e.key==="Enter") filterBySearch(searchQuery)}}
          />

          <button 
          onClick={() => filterBySearch(searchQuery)}
          className='text-white'>Search</button>

     </div>


     { filteredData?.length>0 && 
     <div className='h-[93%] flex flex-col gap-3'>
     <LayoutButtons setListView={setListView} setSortBy={setSortBy} sortByPrice={sortByPrice} sortBy={sortBy}/>
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
