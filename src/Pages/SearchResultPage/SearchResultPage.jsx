import React, { useState, useEffect } from 'react'
import {Server} from 'miragejs'
import  MockAPIData from '../../MockData/MockAPIData.json'
import {useParams} from 'react-router-dom'
import ProductCard from '../../Components/ProductCard';
import { v4 as uuidv4 } from 'uuid';


const server = new Server();
server.get("/api/bakery", {data : MockAPIData})


const SearchResultPage = () => {

  const {query} = useParams()
  // console.log(query);

  const [bakeryProducts, setBakeryProducts] = useState()
  const [filteredData, setFilteredData] = useState()
  const [listView, setListView] = useState(false)



  useEffect( () => {
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
  },[])



  const filterBySearch = (searchQuery)=> {
    const newFilterData =  bakeryProducts?.filter((item) => item?.product_name.toLowerCase()?.includes(searchQuery))
    setFilteredData(newFilterData);
  }

  

console.log(filteredData);


  return (
    <div>

      <button onClick={() => filterBySearch(query)}>search</button>
        { 
          filteredData?.map((item) => {
            return <ProductCard id={uuidv4()} key={uuidv4()} {...item} listView={listView}/>
          })
        }
    </div>
  )
}

export default SearchResultPage
