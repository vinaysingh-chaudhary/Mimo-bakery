import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"

function App() {


  return (
    <div className="w-screen h-screen overflow-x-hidden font-poppins  bg-[#F5E8E4]">
      <Navbar/>
      <Outlet/>
     
    </div>
  )
}

export default App
