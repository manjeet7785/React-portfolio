import React from 'react'
import { motion } from 'framer-motion';
import manjeet from '../assets/manjeet.jpg'
import { ReactTyped } from "react-typed";
import CTAButton from '../btn/btn.jsx'
import { FaDownload } from "react-icons/fa6";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 5.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ scroll: true }}
      name="Home" className=' h-[80vh]  flex items-center container mx-auto px-4 md:px-20 my-20 shadow-2xl'>
      <div className='flex flex-col gap-3 md:flex-row'>
        <div className='md:w-[80%] order-2  md:mt-24 md:order-1'>
          <span className='text-xl'> Welcome To My Profile</span>
          <div className='flex gap-1 text-xl md:text-4xl md:font-semibold text-blue-500'>
            <h1 id='typed ' className='text-xl' >Hello I'm a </h1>


            <ReactTyped

              className='text-blue-500 font-bold '
              strings={[
                "Web Developer",
                "Frontend Developer",
                "Backend Developer",
                "Coder",
                "Full Stack Web Developer"
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            >
            </ReactTyped>

          </div>
          <br />
          <p className='text-xl md:text-md text-justify mb-2 '>
            Versatile Full Stack Developer with expertise in both frontend and backend technologies. Adept at creating complete web solutions from concept to deployment, integrating intuitive user interfaces with powerful backend services for end-to-end application development.
          </p>

          <CTAButton active={true} linkto={"/login"}>
            <div className='flex flex-row gap-2 items-center cursor-pointer'>
              Download <FaDownload />
            </div>
          </CTAButton>
          <br />

        </div>
        <div className='md:w-1/2 flex justify-center items-center order-1'>
          <motion.img
            initial={{
              opacity: 0, x: 100
            }}
            transition={{ duration: 5.5 }}
            whileInView={{
              opacity: 0.9, x: 0
            }}
            viewport={{ scroll: true }}
            className=" w-[300px] h-[300px] rounded-full md:w-[400px] md:h-[400px] object-center "

            src={manjeet} alt="" />
        </div>
      </div>
      <br />

    </motion.div>


  )
}

export default Home