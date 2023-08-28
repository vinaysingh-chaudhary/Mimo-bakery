import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"

function App() {


  return (
    <div className="w-screen h-screen border-pink-500 border-2">
      <Navbar/>
      <Outlet/>
     
    </div>
  )
}

export default App
