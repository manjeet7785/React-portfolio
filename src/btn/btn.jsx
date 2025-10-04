import React from 'react'


const Botton = ({ children, active, linkto }) => {
  return (

    <div className={`text-center text-[16px] px-6 py-3 rounded-md font-bold
        
        ${active ? "bg-yellow-500 text-black" : " bg-blue"}
        hover:scale-95 w-fit
        `}>

      {children}
    </div>

  )
}

export default Botton;