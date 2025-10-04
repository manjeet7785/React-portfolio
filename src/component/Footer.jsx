import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (

    <footer className=" text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-wrap justify-between gap-8 pb-8 border-b border-gray-700">


          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>


          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Get In Touch</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Lucknow Uttar Pradesh</p>
              <p>Email: <a href="manjeetmaurya7785@gmail.com" className="hover:text-white transition duration-300">manjeetmaurya7785@gmail.com</a></p>
              <p>Phone: <a href="tel:+000000000" className="hover:text-white transition duration-300">+917785963322</a></p>
            </address>
          </div>


          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Follow Us</h4>
            <div className="flex space-x-4 text-2xl">





              <a href="https://www.linkedin.com/in/manjeet-kumar-maurya-2427141b0/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin />
              </a>


              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
                aria-label="Instagram">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>


        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} Manjeet Kumar Maurya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;