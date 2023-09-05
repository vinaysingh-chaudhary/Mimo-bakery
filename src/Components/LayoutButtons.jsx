import React from 'react'
import grid from '../assets/layout_buttons/grid.png'
import list from '../assets/layout_buttons/list.png'

const layoutbtns = [ 
    {id: "grid", img : grid},
    {id: "list", img : list }
]

const LayoutButtons = ({setListView, setSortBy, sortByPrice,sortBy}) => {
  return (
    <div className=' w-full flex justify-between items-center px-3' >

     <div>
           <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); sortByPrice(e.target.value);}}
              className='text-black bg-[#C8B6A6] border-2 rounded-md border-white pr-1 outline-none'
           >
                     <option className=' bg-transparent'  >Price</option>
                     <option value="lowtohigh" className=''>Low To High</option>
                     <option value="hightolow" className=''>High To Low</option>
           </select>
       </div>

      <div className='w-2/6 h-10 flex justify-end gap-1 items-center mt-2'>
          {
            layoutbtns?.map((button) => {
                return (
                <button 
                    key={button.id} 
                    onClick={() => setListView(button.id === "list" ? true : false)}
                    className=' w-10 h-full flex justify-center items-center bg-[#C8B6A6] rounded-md' 
                    >
                    <img 
                    src={button.img} alt=""
                    className='w-5' />
                </button>)
            })
          }
          </div>
    </div>
  )
}

export default LayoutButtons
