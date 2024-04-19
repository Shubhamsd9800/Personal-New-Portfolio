import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';
import lgo from '../assets/porti.png'

import { GoPerson } from "react-icons/go";
const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen relative flex flex-col'>
     {/* Container */}
     <div
            className=" block md:hidden w-[800px] -mt-1 mx-auto h-[350px] bg-cover bg-center filter blur-md"
            style={{
                backgroundImage: "url('https://media.istockphoto.com/id/1577713699/photo/holi-background.webp?b=1&s=170667a&w=0&k=20&c=i4qrAm49T20gzgLlr3nERgPIWdQQCCphcYQw3RQBdJ8=')",
            }}
        >
        </div>
        <div className="block top-[-99px] lg:hidden w-[200px] relative">
            <img
                src={lgo}
                alt="Your Image"
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg"
            />
        </div>

        <div className="block lg:hidden relative left-72 top-[-120px] w-[200px]">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="flex items-center space-x-2 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <span>Contact Me</span>
                    <GoPerson className='text-[20px]' />
                </span>
            </button>
        </div>
  
     <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full -mt-52 sm:mt-0'>
        <p className=' text-[#62609D] text-[20px]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Shubham Das</h1>
        <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
        <p className=' text-[#8892b0] py-4 max-w-[700px]'>Full stack developer with a knack for problem-solving and a passion for dynamic web applications. Delving into open source projects.  Let's collaborate!</p>
        
        <Link to='work'>
        <div>
            <button className=' text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#62609D] hover:border-[#62609D]' data-aos="fade-up-right" data-aos-duration="1000">View Work 
                <span className=' group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 text-2xl'/> 
                </span>
           </button>
        </div>
        </Link>
        
    
     </div>
    </div>
  )
}

export default Home