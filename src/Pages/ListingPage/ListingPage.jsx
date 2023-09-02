import React, { useEffect, useState } from 'react'
import {Server} from 'miragejs'
import  MockAPIData from '../../MockData/MockAPIData.json'
import Banner from '../../Components/Banner';
import Category from '../../Components/Category';
import LayoutButtons from '../../Components/LayoutButtons';
import ProductCard from '../../Components/ProductCard';
import { v4 as uuidv4 } from 'uuid';


const server = new Server();
server.get("/api/bakery", {data : MockAPIData})


const ListingPage = () => {

  const [bakeryProducts, setBakeryProducts] = useState()
  const [filteredData, setFilteredData] = useState()
  const [listView, setListView] = useState(false)
  const [category ,setCategory] = useState("all")

  useEffect( () => {
    const DataAPICall = async() => {
      try{
        const response = await fetch("/api/bakery");
        const json = await response.json();
        setBakeryProducts(json.data)
        setFilteredData(json.data)
      }catch(error){
        console.log(error)
      }
    }

    DataAPICall();
  },[])


  const filterByCategory = (category) => {
    setFilteredData(category ==="all" ? bakeryProducts : bakeryProducts?.filter((item) => item?.category === category))
  }


  return (


    <div className='h-[94%] relative bg-[#000000]' >
        <Banner/>
        <Category setCategory={setCategory} filterByCategory={filterByCategory}/>
        <LayoutButtons setListView={setListView} allButtons={[ "Grid", "List" ]}/>



            <div className='w-full h-[69%] flex flex-wrap justify-center gap-4 overflow-y-scroll mt-4 pb-3'>
              {
                filteredData?.map((item, index) => {
                  return <ProductCard id={uuidv4()} key={uuidv4()} {...item} listView={listView}/>
                })
              }
            </div>

   
    </div>
  )
}

export default ListingPage
