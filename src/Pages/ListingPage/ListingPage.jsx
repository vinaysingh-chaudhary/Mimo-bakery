import React, { useEffect, useState } from 'react'
import {Server} from 'miragejs'
import  MockAPIData from '../../MockData/MockAPIData.json'


let server = new Server();
server.get("/api/bakery", {data : MockAPIData})

const ListingPage = () => {
  const [bakeryProducts, setBakeryProducts] = useState()
  
  useEffect(() => {
      fetchBakery();
  },[])

  const fetchBakery = async() => {
    const response = await fetch("/api/bakery");
    const jsonData = await response.json();
    setBakeryProducts(jsonData.data)
  }

  return (
    <div>
      
    </div>
  )
}

export default ListingPage
