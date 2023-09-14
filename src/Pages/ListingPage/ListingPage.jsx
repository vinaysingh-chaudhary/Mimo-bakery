import React, { useEffect, useState } from 'react'
import { Server } from 'miragejs'
import MockAPIData from '../../MockData/MockAPIData.json'
import Banner from '../../Components/Banner';
import Category from '../../Components/Category';
import LayoutButtons from '../../Components/LayoutButtons';
import ProductCard from '../../Components/ProductCard';
import { v4 as uuidv4 } from 'uuid';

import { add } from '../../Store_Redux/Slices/CartSlice';
import { useDispatch } from 'react-redux';
import ShimmerEffect from '../../Components/ShimmerEffect';




const ListingPage = () => {

  const [bakeryProducts, setBakeryProducts] = useState()
  const [filteredData, setFilteredData] = useState()
  const [listView, setListView] = useState(false)
  const [category, setCategory] = useState("all")
  const [sortBy ,setSortBy] = useState("")
  const dispatch = useDispatch()
  const [loading, setloading] = useState(true);


console.log(sortBy);

  useEffect(() => {
    const server = new Server();
    server.get("/api/bakery", { data: MockAPIData })

    const DataAPICall = async () => {
      try {
        setloading(true)
        const response = await fetch("/api/bakery");
        const json = await response.json();
        setBakeryProducts(json.data)
        setFilteredData(json.data)
        setloading(false)
      } catch (error) {
        console.log(error)
      }
    }

    DataAPICall();

    return () => {
      server.shutdown();
    };
  }, [])


  const filterByCategory = (category, sortBy) => {
    let newFilteredData = category === "all" ? bakeryProducts : bakeryProducts?.filter((item) => item?.category === category);
    setFilteredData(newFilteredData)
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
    <div className='h-[94%] relative bg-[#F5E8E4] flex flex-col items-center lg:gap-1' >
      <Banner />
      <Category setCategory={setCategory} filterByCategory={filterByCategory} category={category}/>
      <LayoutButtons setListView={setListView} setSortBy={setSortBy} sortByPrice={sortByPrice} sortBy={sortBy}/>
      <div className='w-full h-[69%] lg:h-[90%] flex flex-wrap justify-center gap-4 overflow-y-scroll mt-4 pb-3 scroll-smooth'>
        { loading ? (<ShimmerEffect/>) : 
          filteredData?.map((item, index) => {
            return <ProductCard id={uuidv4()} key={uuidv4()} {...item} listView={listView} addToCart={() => addToCart(item)}/>
          })
        }
      </div>
    </div>
  )
}

export default ListingPage
