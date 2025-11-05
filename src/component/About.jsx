import { ul } from 'framer-motion/client';
import React from 'react'
import { motion } from 'framer-motion';

const About = () => {


  const currentActivities = [
    { label: 'Learning', value: 'Cloud Computing' },
    { label: 'Reading', value: 'Fundamental' },
    { label: 'Building', value: 'EV Charging Station' },
    { label: 'Exploring', value: 'AI' }
  ];


  return (
    <div name="About" className='overflow-hidden mt-4 mb-4'>

      <h1 className='text-6xl font-bold underline text-center m-2 text-white'>About</h1>

      <div
        className='  flex flex-col container mx-auto px-4 md:px-20 md:gap-10 md:flex-row   gap-5 justify-center p-6 rounded-xl backdrop-filter backdrop-blur-lg 
         border-blue-400 
                shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300
        '>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ scroll: true }}

          // 2. Text Block Color Change
          className='h-[fit] flex  text-2xl text-gray-200 justify-center text-justify '>

          I'm a final-year Computer Science student who values clean code, clear design, and honest communication. I’m always learning, growing, and looking for smart solutions.
          <br />
          <br />
          I’m stubborn with challenges—digging deep and not giving up until things work. I believe every project should be both useful and enjoyable.
          <br />
          <br />
          I like to keep things light, enjoy a good laugh, and love teaming up with others. Outside tech, you’ll find me on walks, having life talks, or playing video games.

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 3.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ scroll: true }}

          className=' mt-20 flex-col flex gap-3 md:mt-0  '>

          {/* 3. Philosophy Heading Color Change */}
          <h1 className='text-4xl text-green-400'>Philosophy</h1>

          {/* 4. Philosophy Text Color Change */}
          <p className='border-l-yellow-100 border-l-2 p-2 rounded-l-2xl text-gray-100'>"I believe the best solutions are simple and elegant. Whether I'm writing code or designing, I always aim for clarity and purpose."</p>

          {/* 5. Currently Heading Color Change */}
          <p className='text-4xl text-green-400'>
            Currently
          </p>

          {
            currentActivities.map((items, index) => (
              <ul key={index}>
                {/* 6. Activity List Item Text Color Change */}
                <li key={index} className='flex items-center justify-between border-b-2 border-b-blue-400 text-gray-200'>
                  <p>{items.label}</p>
                  <p className='font-semibold text-white'>{items.value}</p>

                </li>
              </ul>
            ))
          }
        </motion.div>

      </div>

    </div>
  )
}

export default About