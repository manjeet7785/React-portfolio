import React from 'react'
import msi from '../assets/msi.jpg'
import afa from '../assets/afa.png'
import { div } from 'framer-motion/client'

const Experince = () => {

  const Exp = [
    {
      name: "Edunet Foundation",
      Title: "Foundation of AI",
      image: msi
    },
    {
      name: "Afame Technology",
      Title: "Foundation of AI",
      image: afa
    }

  ]



  return (
    <div className='flex flex-col items-center justify-center mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Experience</h1>

      <div className='w-full max-w-5xl flex flex-col items-center justify-center gap-6 md:flex-row md:flex-wrap'>
        {
          Exp.map((item, index) => (
            <div
              key={index}
              className='w-full sm:w-1/2 lg:w-1/3  p-6
                     flex flex-col justify-center items-center text-center 
                     bg-white border-2 border-gray-200 rounded-xl 
                     shadow-2xl hover:shadow-lg transition-shadow duration-300'
            >
              <h1 className='text-xl font-semibold mb-2'>
                {item.name}
              </h1>
              <img
                src={item.image}
                alt={item.name}
                className='w-[50%] h-[50%] object-cover  mb-4'
              />
              <p className='text-gray-600'>{item.Title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Experince