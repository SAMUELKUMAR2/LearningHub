import React,{useState} from 'react'

const MenuList = ({text,icons}) => {

  const [toggle, settoggle] = useState(false);

  return (
    <> 
    <div className={`' flex p-3  text-white hover:text-red-500 hover:bg-slate-50
     gap-1 mb-3 bg-gray-600 items-center rounded-lg '`}>

   <span className='text-xl'>{icons}</span>
   {toggle &&  <span className='font-semibold w-fit'> {text}</span>}
    </div>
    </>
  )
}

export default MenuList