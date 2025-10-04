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
    <div name="About" className='overflow-hidden'>
      <h1 className='text-6xl font-bold underline text-center m-2'>About</h1>

      <div
        className='  flex flex-col container mx-auto px-4 md:px-20 md:gap-10 md:flex-row   gap-5 justify-center p-6 rounded-xl border border-gray-700 backdrop-filter backdrop-blur-lg bg-white/10 '>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 3.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ scroll: true }}

          className='h-[fit] flex  text-2xl  justify-center text-justify '>

          I'm a final-year Computer Science student who values clean code, clear design, and honest communication. I’m always learning, growing, and looking for smart solutions.
          <br />
          <br />
          I’m stubborn with challenges—digging deep and not giving up until things work. I believe every project should be both useful and enjoyable.
          <br />
          <br />
          I like to keep things light, enjoy a good laugh, and love teaming up with others. Outside tech, you’ll find me on walks, having life talks, or playing video games.

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 3.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ scroll: true }}

          className=' mt-20 flex-col flex gap-3 md:mt-0  '>

          <h1 className='text-4xl  text-green-600'>Philosophy</h1>
          <p className='border-l-yellow-100 border-l-2 p-2 rounded-l-2xl'>"I believe the best solutions are simple and elegant. Whether I'm writing code or designing, I always aim for clarity and purpose."</p>

          <p className='text-4xl  text-green-600'>
            Currently
          </p>

          {
            currentActivities.map((items, index) => (
              <ul key={index}>
                <li key={index} className='flex  items-center justify-between border-b-2 border-b-blue-400 opacity-[2px]'>
                  <p>{items.label}</p>
                  <p>{items.value}</p>

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