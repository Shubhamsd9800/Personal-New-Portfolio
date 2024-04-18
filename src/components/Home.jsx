import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
     {/* Container */}
     <div className='* max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-1'>
        <p className='* text-[#62609D] text-[20px]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Shubham Das</h1>
        <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
        <p className=' text-[#8892b0] py-4 max-w-[700px]'>Full stack developer with strong problem-solving abilities and a passion for open source contributions. I excel in creating dynamic web applications and user-centric solutions. Currently exploring the DevOps field to enhance my expertise and deliver seamless, end-to-end software experiences.Let's collaborate to create innovative, user-centric software that drives progress.</p>
        <div>
            <button className=' text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#62609D] hover:border-[#62609D]'>View Work 
                <span className=' group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 text-2xl'/> 
                </span>
           </button>
        </div>
    
     </div>
    </div>
  )
}

export default Home