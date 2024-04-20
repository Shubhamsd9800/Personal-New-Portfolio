import React from 'react'
import work from "../assets/workImg.jpeg";
import real from '../assets/realestate.jpg'
import { Link } from 'react-scroll';
import project1 from '../assets/project1.png'
import { FaGithub } from 'react-icons/fa';
import password from '../assets/password.png'
import meme from '../assets/meme.png'
import codeye from '../assets/codeye.png'
const Work = () => {
  return (
    <div name='work' className=' w-full bg-[#0a192f] md:h-full text-gray-300 '>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=' p-8 px-[15px]' data-aos="fade-right" data-aos-duration='1000'>
                <p className=' text-4xl font-bold inline border-b-4 text-gray-300 border-[#62609D]'>Work</p>
            </div>
            {/* container */}

            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            
            {/* grid item */}
                <div style={{backgroundImage: `url(${project1})`}}
                data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" 
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-10 group-hover:translate-y-0">
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Pocket Weather
                        </span>
                        <div className="pt-8 text-center flex justify-center items-center">
                            <a href="https://shubhamsd9800.github.io/Pocket-Weather/">
                                <button className="text-center rounded-lg px-8 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                    Live
                                </button>
                            </a>
                            <a href="https://github.com/Shubhamsd9800/Pocket-Weather" className="flex items-center justify-center">
                                <FaGithub className="text-[50px] text-white ml-4" />
                            </a>
                        </div>
                    </div>
                </div>

             {/* grid item */}
             <div style={{backgroundImage: `url(${password})`}}
                data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" 
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-10 group-hover:translate-y-0">
                        <div className="text-center flex justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                PassForge
                            </span>
                        </div>
                        <div className="pt-8 text-center flex justify-center items-center">
                            <a href="https://shubhamsd9800.github.io/Password-Generator/">
                                <button className="text-center rounded-lg px-8 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                    Live
                                </button>
                            </a>
                            <a href="https://github.com/Shubhamsd9800/Password-Generator" className="flex items-center justify-center">
                                <FaGithub className="text-[50px] text-white ml-4" />
                            </a>
                        </div>
                    </div>
                </div>     

                  {/* grid item */}
             <div style={{backgroundImage: `url(${meme})`}}
                data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" 
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-10 group-hover:translate-y-0">
                        <div className="text-center flex justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Meme-O-Matic
                                <br/>
                                React JS Application
                            </span>
                        </div>
                        <div className="pt-8 text-center flex justify-center items-center">
                            <a href="https://meme-o-matic.netlify.app/">
                                <button className="text-center rounded-lg px-8 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                    Live
                                </button>
                            </a>
                            <a href="https://github.com/Shubhamsd9800/Meme-o-Matic" className="flex items-center justify-center">
                                <FaGithub className="text-[50px] text-white ml-4" />
                            </a>
                        </div>
                    </div>
                </div>  


                 {/* grid item */}
                <div class="shadow-lg shadow-[#040c16]  p-6 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700"
                data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vision Vault</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Led development of RESTful API for blog functions: creating, updating, deleting articles. Designed real-time comments/likes system with moderation.</p>
                    <a href="https://github.com/Shubhamsd9800/BlogApp" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>

                {/* grid item */}
                <div class="shadow-[#040c16]  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TaskTrek</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Built backend for TaskTrek using Node.js and Express.js, RESTful API for tasks, and optimized MongoDB database design.</p>
                    <a href="https://github.com/Shubhamsd9800/ToDo-App" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>



                {/* grid item */}
                <div class="shadow-[#040c16]  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AuthzApp</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Implemented user sign-up and sign-in features with secure access control, enhancing authentication to prevent unauthorized access.</p>
                    <a href="https://github.com/Shubhamsd9800/AuthApp" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>

                

            </div>
        </div>
        <div className="mt-8 text-center text-xs">
        <p>© 2024 Shubham Das 🌟</p>
    </div>
    </div>
  )
}

export default Work