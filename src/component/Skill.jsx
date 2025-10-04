import React from 'react'
import HTML5 from '../assets/logo/html.png'
import CSS3 from '../assets/logo/css.png'
import TailwindCSS from '../assets/logo/tailwindcss.png'
import JavaScript from '../assets/logo/javascript.png'
import ReactLogo from '../assets/logo/reactjs.png'
import Nodejs from '../assets/logo/nodejs.png'
import Express from '../assets/logo/express.png'
import Postman from '../assets/logo/postman.png'
import MySQL from '../assets/logo/mysql.png'
import MongoDB from '../assets/logo/mongodb.png'
import Java from '../assets/logo/java.png'
import GSAP from '../assets/logo/gsap.png'

const Skill = () => {
  const skills = [
    { id: 1, name: "HTML5", image: HTML5, description: "HTML5 is the standard markup language for creating web pages and web applications." },
    { id: 2, name: "CSS3", image: CSS3, description: "CSS3 is used for designing and styling web pages with advanced features and animations." },
    { id: 3, name: "Tailwind-CSS", image: TailwindCSS, description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces." },
    { id: 4, name: "JavaScript", image: JavaScript, description: "JavaScript is a versatile scripting language used to create dynamic and interactive web content." },
    { id: 5, name: "React", image: React, description: "React is a popular JavaScript library for building user interfaces, especially single-page applications." },
    { id: 6, name: "Nodejs", image: Nodejs, description: "Node.js is a JavaScript runtime built on Chrome's V8 engine for building fast and scalable server-side applications." },
    { id: 7, name: "Express", image: Express, description: "Express is a minimal and flexible Node.js web application framework for building APIs and web apps." },
    { id: 8, name: "Postman", image: Postman, description: "Postman is a collaboration platform for API development, testing, and monitoring." },
    { id: 9, name: "MySQL", image: MySQL, description: "MySQL is an open-source relational database management system for storing and managing data." },
    { id: 10, name: "MongoDB", image: MongoDB, description: "MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas." },
    { id: 11, name: "Java", image: Java, description: "Java is a high-level, class-based, object-oriented programming language used for building robust applications." },
    { id: 12, name: "GSAP", image: GSAP, description: "GSAP is a JavaScript library for building high-performance animations that work in every major browser." }
  ];

  return (
    <div name="Skill" className='max-w-screen-2xl mx-auto px-4 md:px-20 mt-20'>



      <h2 className='text-4xl font-bold text-center text-white mb-8 border-b-4 border-gray-500 inline-block mx-auto'>
        Skills
      </h2>

      {/* Main container with border and background blur */}
      <div className='flex flex-row flex-wrap gap-5 justify-center p-6 rounded-xl border border-gray-700 backdrop-filter backdrop-blur-lg bg-white/10'>

        {
          skills.map(({ id, image, name, description }) => (
            // Individual skill item with hover scale and border
            <div
              key={id}
              className='flex flex-col p-4 border border-gray-700 items-center hover:scale-110 duration-300 rounded-lg shadow-lg bg-gray-900/50 min-w-[150px] max-w-[200px]'
            >

              {/* Image and its container */}
              <div className='w-[120px] h-[120px] p-2 rounded-full border-2 border-amber-950 flex items-center justify-center bg-gray-800'>
                <img
                  className='w-full h-full object-contain'
                  src={image}
                  alt={name}
                />
              </div>

              {/* Skill Name Heading */}
              <div className='mt-4'>
                <h1 className='text-xl font-semibold text-white text-center'>{name}</h1>
              </div>

            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Skill