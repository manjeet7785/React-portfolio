import React, { useState } from 'react'
import logo from "../assets/back.svg"
import { Link } from 'react-scroll';

import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

  const [menu, setmenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Experience" },
    { id: 4, text: "Project" },

    { id: 5, text: "Skill" },
    { id: 6, text: "Contact" }
  ];

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20  shadow-md'>
        <div className='flex flex-row justify-between items-center'>

          <div className="flex space-x-2 shadow-blue-400 ">
            <span>
              <h1 className='font-semibold cursor-pointer text-xl'>Man<span className='text-red-500 uppercase font-bold'>jeet </span>
                <p className=' uppercase'>Web Developer / full Stack</p>
              </h1>
            </span>
          </div>



          <div>
            <ul className='hidden md:flex space-x-8 font-bold'>
              {
                navItems.map(({ id, text }) => (
                  <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>

                    <Link to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}

                    >
                      {text}
                    </Link>

                  </li>
                ))
              }
            </ul>
            <div onClick={() => setmenu(!menu)} className='md:hidden' >
              {
                menu ? <RxCross2 /> : <FiMenu />
              }
            </div>
          </div>
        </div>


        {/* //mobile ke liye */}

        {
          menu && (
            <div>
              <ul className='md:hidden flex flex-col items-center gap-2 font-bold'>
                {
                  navItems.map(({ id, text }) => (
                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                      <Link to={text} onClick={() => setmenu(!menu)}>
                        {text}
                      </Link>
                    </li>
                  ))
                }
              </ul>


            </div>
          )
        }

      </div>
    </>
  )
}

export default Navbar