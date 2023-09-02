import React from 'react'
import grid from '../assets/layout_buttons/grid.png'
import list from '../assets/layout_buttons/list.png'

const layoutbtns = [ 
    {id: "grid", img : grid},
    {id: "list", img : list }
]

const LayoutButtons = ({setListView}) => {
  return (
    <div className=' w-full h-10 flex justify-end gap-1 items-center mt-2 px-2' >
          {
            layoutbtns?.map((button) => {
                return (
                <button 
                    key={button.id} 
                    onClick={() => setListView(button.id === "list" ? true : false)}
                    className=' w-10 h-full flex justify-center items-center bg-[#171717] rounded-md' 
                    >
                    <img 
                    src={button.img} alt=""
                    className='w-5' />
                </button>)
            })
          }
    </div>
  )
}

export default LayoutButtons
