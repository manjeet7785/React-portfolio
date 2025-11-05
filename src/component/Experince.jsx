import React from 'react'
// Assuming these imports are correct based on your file structure
import msi from '../assets/msi.jpg'
import afa from '../assets/afa.png'
import { motion } from 'framer-motion'; // Added motion import for potential future use

const Experince = () => {

  const Exp = [
    {
      name: "Edunet Foundation",
      Title: "Foundation of AI",
      image: msi
    },
    {
      name: "Afame Technology",
      Title: "Web Development",
      image: afa
    }

  ]



  return (
    <div className='flex flex-col items-center justify-center mx-auto p-4'>
      {/* 1. Main Heading Color & Size Change */}
      <h1 className='text-5xl font-bold mb-8 text-white underline'>Experience</h1>

      <div className='w-full max-w-5xl flex flex-col items-center justify-center gap-6 md:flex-row md:flex-wrap'>
        {
          Exp.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='
                w-full sm:w-1/2 lg:w-1/3 p-6 flex flex-col justify-center items-center text-center 
                // 2. Card Styling for Dark Theme
                border-blue-400 rounded-xl 
                shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300
              '
            >
              {/* 3. Company Name Size & Color Change */}
              <h1 className='text-2xl font-bold mb-3 text-blue-300'>
                {item.name}
              </h1>
              <img
                src={item.image}
                alt={item.name}
                // Image container adjustments
                className='w-[100px] h-[100px] object-contain mb-4 rounded-lg'
              />
              {/* 4. Title/Course Color & Size Change */}
              <p className='text-xl font-medium text-gray-300'>{item.Title}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Experince