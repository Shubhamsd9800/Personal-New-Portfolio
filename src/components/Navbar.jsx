import React, { useState } from 'react'
import Logo from '../assets/p4.png'
import { RiMenuSearchFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitterX } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { GrResume } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import { GoPerson } from 'react-icons/go';
const Navbar = () => {

    const[nav,setNav]=useState(false);
    const handleClick=()=>{setNav(!nav)
    document.body.style.overflow= nav? 'auto' : 'hidden';
    };
  return (
    <div className='fixed z-50 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
       
        <div className=' md:ml-16 mt-3 cursor-pointer' data-aos="fade-right" data-aos-duration="950">
        <Link to='home'
         smooth={true} 
         offset={50} 
         duration={500} >
            <img src={Logo} alt="Logo" className='w-[80px] md:w-[100px]' />    
       </Link>
        </div>
       
       
       


        {/* menu */}
        <ul className='hidden md:flex gap-6 ' data-aos="fade-left" data-aos-duration="950">

            <li className='ease-linear transform hover:scale-110 transition duration-300 hover:border-b-2'>
            <Link to='home' smooth={true} duration={500}>
            Home
            </Link>
            </li>
            
            <li className='ease-linear transform hover:scale-110 transition duration-300 hover:border-b-2'>
            <Link 
            to="about" 
            smooth={true} 
            offset={50} 
            duration={500} 
            >
            About
            </Link>
            </li>

            <li className='ease-linear transform hover:scale-110 transition duration-300 hover:border-b-2'>
            <Link 
            to="skills" 
            smooth={true} 
            offset={50} 
            duration={500} 
            >
            Skills
            </Link>
            </li>

            <li className='ease-linear transform hover:scale-110 transition duration-300 hover:border-b-2'>
            <Link 
            to="work"
            smooth={true} 
            offset={50} 
            duration={500} 
            >
            Work
            </Link>
            </li>

        </ul>

        <a href="mailto:subhamdas9800@gmail.com">
        <button
            className="hidden md:inline-flex relative items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
            <span className="flex items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <span>Contact Me</span>
                <GoPerson className="ml-2 text-[20px]" />
            </span>
        </button>
        </a>
        
       


        {/* Hamburger */}
       <div onClick={handleClick} className='md:hidden z-10 '>
            {
                !nav ? <IoMenu className='text-[30px] cursor-pointer'  data-aos="fade-left" data-aos-duration="1000"/> : <RxCross2 className='text-[30px] cursor-pointer'  data-aos="fade-down" data-aos-duration="1000"/>
            }
           
       </div>

       {/* Mobile Menu */}
       <div  className={ !nav ? 'hidden'  : 'absolute z-100 top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-5' } data-aos="fade-right" data-aos-duration='400'>
       <ul className=''>
            <li className='py-5 text-2xl ease-linear transform hover:scale-125 transition duration-300'> <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
            </Link></li>
            <li className='py-5 text-2xl ease-linear transform hover:scale-125 transition duration-300 '><Link 
            to="about" 
            onClick={handleClick}
            smooth={true} 
            offset={50} 
            duration={500} 
            >
            About
            </Link></li>
            <li className='py-5 text-2xl ease-linear transform hover:scale-125 transition duration-300'><Link 
            to="skills" 
            onClick={handleClick}
            smooth={true} 
            offset={50} 
            duration={500} 
            >
            Skills
            </Link></li>
            <li className='py-5 text-2xl ease-linear transform hover:scale-125 transition duration-300'><Link 
            to="work"
            onClick={handleClick}
            smooth={true} 
            offset={50} 
            duration={500} 
            >
            Work
            </Link></li>
        </ul>
           <ul className='flex mb-52'>
           <li className='animate-bounce'>
            <a href="https://www.linkedin.com/in/shubham-das-562834221/">
                <FiLinkedin className='text-[#05689d]' size={25}/>
                </a>
            </li>
            <li className='animate-bounce'>
            <a href="https://github.com/Shubhamsd9800">
            <LuGithub  className=' text-[#2a9d8f]' size={25} />
                </a>
            </li>
            <li className='animate-bounce'>
                <a href="https://leetcode.com/subhamdas9800/">
                <SiLeetcode className=' text-[#f19916]' size={25}/>
                </a>
            </li>
            
            
            <li className='animate-bounce'>
            <a href="https://twitter.com/Shubhammmmm444">
            <RiTwitterXLine size={25}/>
                </a>
            </li>
           
            <li className='animate-bounce'>
            <a href="https://drive.google.com/file/d/1Z6tFd0aoZpbk_P0cbjXBgHmSObiwwmtZ/view?usp=sharing">
             <GrResume className='text-[#344955]' size={25}/>
                </a>
            </li>
           </ul> 

       </div>
     
       
        

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[30%] left-0'  data-aos="fade-right" data-aos-duration="950">
        <ul>
        <li className='w-[160px] h-[60px] flex 0px 5px 15px; rounded-md justify-between items-center ml-[-100px] hover:bg-blue-600 hover:ml-[-10px] duration-300 bg-blue-500 hover:shadow-custom-hover'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="https://www.linkedin.com/in/shubham-das-562834221/">
                LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex 0px 5px 15px; rounded-md justify-between items-center ml-[-100px] hover:bg-[#2c2929] hover:ml-[-10px] duration-300 bg-[#2d2c2c] hover:shadow-custom-hover'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="https://github.com/Shubhamsd9800">
                GitHub <FaGithub size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex 0px 5px 15px; rounded-md justify-between items-center ml-[-100px] hover:bg-[#30394b] hover:ml-[-10px] duration-300 bg-[#445069] hover:shadow-custom-hover'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="https://leetcode.com/subhamdas9800/">
               Leetcode<SiLeetcode className='text-[#f19916]' size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex 0px 5px 15px; rounded-md justify-between items-center ml-[-100px] hover:bg-[#040D12] hover:ml-[-10px] duration-300 bg-[#040D12] hover:shadow-custom-hover'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="https://twitter.com/Shubhammmmm444">
               Twitter<BsTwitterX size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex 0px 5px 15px; rounded-md justify-between items-center ml-[-100px] hover:bg-[#2a9387] hover:ml-[-10px] duration-300 bg-[#3da095] hover:shadow-custom-hover'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="https://drive.google.com/file/d/1Z6tFd0aoZpbk_P0cbjXBgHmSObiwwmtZ/view?usp=sharing">
                Resume<BsFillPersonLinesFill size={30}/>
            </a>
        </li>
        </ul>
        </div>
            


    </div>
  )
}

export default Navbar