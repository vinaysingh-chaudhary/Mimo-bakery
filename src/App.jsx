import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"

function App() {


  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar/>
      <Outlet/>
     
    </div>
  )
}

export default App
