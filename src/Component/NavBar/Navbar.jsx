import React, { useContext, useState } from 'react'
import logo from '../images/logo.png';
import search from '../images/search.png';
import menu from '../images/menu.png'


const Navbar = () => {
    const [toggle,settoggle] = useState(false);

    const  handle=()=>{
     settoggle(!toggle);
      
    }
    
 
  return (
    <> 
    <div className='sticky w-[100%] h-[8vh] flex justify-between  bg-red-300 max-sm:justify-between max-sm:w-[100%] max-sm:h-[5%]'>
    <div className='w-[8vw] flex justify-center max-sm:ml-5 '>
    <img id='menu'  onClick={handle}
     className="mt-2 h-[5vh] pr-3 items-center cursor-pointer max-sm:mt-[0px]" src={menu} alt="logo" />
   
    <img className="mt-2 h-[5vh] items-center max-sm:h-[25px] max-sm:mt-[13px] max-sm:pr-2" src={logo} alt="logo" />
    </div>
    <div className="search mt-2 flex ">
        <input className='rounded-l-2xl w-[90vh] h-[80%] max-sm:w-[70%] max-sm:h-[80%] pl-3' placeholder='Search'></input>
        <img className='bg-green-400 w-[7vh] h-[80%] rounded-r-2xl' src={search} alt="search" />
    </div>
    <div className="info flex w-auto h-auto  gap-2 max-sm:mt-0 max-sm:h-[80%] ">
        <div className=" w-[5vw] h-[7vh] border-2 rounded-[50%]  max-sm:h-[100%]"></div>
        <div className="w-[5vw] h-[7vh] border-2 rounded-[50%] max-sm:h-[100%]" ></div>
        <div className="w-[5vw] h-[7vh] border-2 rounded-[50%] max-sm:h-[100%]"></div>
    </div>
    </div>
    </>
  )
}

export default Navbar
