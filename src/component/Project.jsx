import { link } from 'framer-motion/client'
import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'
import { FaGithub } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";



const Project = () => {

  const project = [

    {
      Heading: "Bubble Hit Game",
      link: "https://6909e4c35618fb04ec50103f--playbubble.netlify.app/",
      git: "https://github.com",
      dec: "Bubble Hit Game is a classic, interactive web game developed using HTML, CSS, and pure JavaScript. The objective is to hit the randomly generated target bubble and score points within a time limit. The project focuses on DOM manipulation, event handling, game logic implementation, and creating a fun, responsive gaming experience.",
      // 🚀 ADDED TOOLS
      tools: ['HTML', 'CSS', 'JavaScript']
    },
    {
      Heading: "RKM Health",
      link: "https://rkmhealth.netlify.app/",
      git: "https://github.com",
      dec: "RKM Health is a responsive web application built with HTML, CSS, and JavaScript. It provides users with health tips, wellness resources, and easy navigation. The project emphasizes clean design, accessibility, and a user-friendly interface for sharing health-related information.",
      // 🚀 ADDED TOOLS
      tools: ['HTML', 'CSS', 'JavaScript']
    },
    {
      Heading: "Portfolio",
      link: "https://manjeet7785.github.io/Manjeet-/",
      git: "https://github.com",
      dec: "This is a personal portfolio website created using HTML, CSS, and JavaScript. It showcases my projects, skills, and background in a clean, interactive, and visually appealing format. The site is fully responsive and designed to provide visitors with an engaging overview of my work and experience.",
      // 🚀 ADDED TOOLS
      tools: ['HTML', 'CSS', 'JavaScript']

    }
  ]

  return (
    <div name="Project" className='max-w-screen-2xl mx-auto px-4 md:px-20 mt-20'>
      <div>
        <h1 className='text-6xl text-center pb-2 text-white'>Project</h1>
        {
          project.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={index}
              className='
                flex flex-col text-justify p-5 mb-8 
                backdrop-blur-lg rounded-xl transition-shadow 
                hover:shadow-2xl hover:scale-[1.01] duration-300

                 border-blue-400 
                shadow-2xl hover:shadow-blue-500/50 
              '
            >
              <h1 className='text-4xl m-1.5 text-green-500 font-bold'> {item.Heading}</h1>

              <h1 className='m-1.5 text-xl text-gray-300'>{item.dec}</h1>


              <div className='flex flex-wrap gap-2 m-1.5 mt-3'>
                {item.tools && item.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className='
                      px-3 py-1 text-sm font-medium rounded-full 
                      bg-blue-600 text-white shadow-md
                    '
                  >
                    {tool}
                  </span>
                ))}
              </div>


              <div className='flex flex-row gap-3 m-1.5 mt-4'>
                <a href={item.link} target="_blank" rel="noopener noreferrer">

                  <div >
                    <button className='items-center rounded-2xl flex gap-2 px-5 py-2 bg-blue-700 hover:bg-blue-800 transition-colors cursor-pointer text-white'> Live <FaArrowUpRightFromSquare />
                    </button>
                  </div>
                </a>

                <a href={item.git} target="_blank" rel="noopener noreferrer">
                  <div>
                    <button className='rounded-2xl cursor-pointer items-center flex gap-2 px-5 py-2 bg-blue-700 hover:bg-blue-800 transition-colors text-white'> Code <FaGithub />
                    </button>
                  </div>
                </a>
              </div>


            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Project