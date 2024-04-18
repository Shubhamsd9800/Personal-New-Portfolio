import React from 'react'
import html from '../assets/HTML5.png'
import css from '../assets/CSS3.png'
import docker from '../assets/Docker.png'
import node from '../assets/Node.js.png'
import mongo from '../assets/icons8-mongodb-48.png'
import js from '../assets/JavaScript.png'
import sql from '../assets/MySQL.png'
import react from '../assets/React.png'
import tailwind from '../assets/Tailwind CSS.png'
import github from '../assets/g2.png'
import express from '../assets/Express.png'
import java from '../assets/Java.png'
import Tilt from 'react-parallax-tilt';


const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300 uppercase'>
        {/* Container */}
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className=' text-4xl inline font-bold border-b-4 border-[#62609D] '>Skills</p>
            </div>

            <div className=' w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8 '>
            
            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>              
            <Tilt className="background-stripes parallax-effect hover:background-stripes hover:parallax-effect" perspective={500}>         
                    <img className=' w-11 sm:w-20 mx-auto py-4' src={html} alt="html" />
                    <p className=' pb-2 text-xs sm:text-[18px]'>HTML</p>
            </Tilt>
            </div>

            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>
            <Tilt className="background-stripes parallax-effect" perspective={500}>
                    <img className='w-11 sm:w-20 mx-auto py-4' src={css} alt="html" />
                    <p className=' pb-2 text-xs sm:text-[18px]'>CSS</p>
            </Tilt>
            </div>

            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>
            <Tilt className="background-stripes parallax-effect" perspective={500}>
                    <img className='w-11 sm:w-20 mx-auto py-4' src={js} alt="html" />
                    <p className='pb-2 text-xs sm:text-[18px]'>JavaScript</p>
            </Tilt>
            </div>

            <Tilt className="background-stripes parallax-effect" perspective={500}>
            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-11 sm:w-20 mx-auto py-4' src={tailwind} alt="html" />
                    <p className=' pb-2 text-xs sm:text-[18px]'>Tailwind</p>
            </div>
            </Tilt>

            <Tilt className="background-stripes parallax-effect" perspective={500}>
            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-11 sm:w-20 mx-auto py-4' src={react} alt="html" />
                    <p className=' pb-2 text-xs sm:text-[18px]'>React</p>
            </div>
            </Tilt>

            <Tilt className="background-stripes parallax-effect" perspective={500}>
            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-11 sm:w-20 mx-auto py-4' src={node} alt="html" />
                    <p className=' pb-2 text-xs sm:text-[18px]'>Node js</p>
            </div>
            </Tilt>

            <Tilt className="background-stripes parallax-effect" perspective={500}>
            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-11 sm:w-20 mx-auto py-4' src={express} alt="html" />
                    <p className=' pb-2 text-xs sm:text-[18px]'>Express Js</p>
            </div>
            </Tilt>

            <Tilt className="background-stripes parallax-effect" perspective={500}>
            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-11 sm:w-20 mx-auto py-4' src={mongo} alt="html" />
                    <p className=' pb-2 text-xs sm:text-[18px]'>mongo db</p>
            </div>
            </Tilt>

            <Tilt className="background-stripes parallax-effect" perspective={500}>
            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-11 sm:w-20 mx-auto py-4' src={sql} alt="html" />
                    <p className=' pb-2 text-xs sm:text-[18px]'>MySql</p>
            </div>
            </Tilt>

            <Tilt className="background-stripes parallax-effect" perspective={500}>
            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-11 sm:w-20 mx-auto py-4' src={docker} alt="html" />
                    <p className=' pb-2 text-xs sm:text-[18px]'>Docker</p>
            </div>
            </Tilt>
            <Tilt className="background-stripes parallax-effect" perspective={500}>
            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-11 sm:w-20 mx-auto py-4' src={java} alt="html" />
                    <p className=' pb-2 text-xs sm:text-[18px]'>Java</p>
            </div>
            </Tilt>

            <Tilt className="background-stripes parallax-effect" perspective={500}>
            <div className=' shadow-md rounded-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-11 sm:w-20 mx-auto py-4' src={github} alt="html" />
                    <p className=' pb-2 text-xs sm:text-[18px]'>github</p>
            </div>
            </Tilt>
            
            </div>
        </div>

    </div>
  )
}

export default Skills