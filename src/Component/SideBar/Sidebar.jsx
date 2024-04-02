import React, { createContext, useState } from 'react'
import { categories } from './Menu.jsx'
import MenuList from './MenuList.jsx'
 


const Sidebar = () => {
 
 

  return (
    <>
 
    <div className='mt-1 h-[90vh]  p-3 overflow-hidden bg-blue-500   hover:overflow-y-scroll'>
    {categories.map((item)=>{
        return(
            <>
            <MenuList
            
            text = {item.type==="home"?"home":item.name}
            icons = {item.icon}

            />       
            </>
        )

    })}
    </div>


    </>
  )
}

export default Sidebar