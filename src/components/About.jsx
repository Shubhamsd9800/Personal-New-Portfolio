import React from 'react'

const Abouts = () => {
  return (
    <div name='about' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className=' max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className=' sm:text-right pb-8 pl-4'>
                    <p className=' text-4xl font-bold inline border-b-4 border-[#62609D]'>About</p>
                </div>
                <div>
                </div>
            </div>
                <div className=' max-w-[1000px] w-full grid sm:grid-cols-2  gap-8 px-4'>
                    <div className=' sm:text-right text-3xl font-bold'>
                        <p>Hi, Shubhamm this side, nice to meet you, Please take a look around</p>
                    </div>
                    <div>
                         <p>Full-stack developer 🚀 striving to excel in the software industry through innovative ideas.
                         Well foundation in data structures and algorithms enables efficient and effective problem-solving.
                         Currently exploring DevOps to enhance software development processes and delving into the open-source ocean 🌊 for impactful contributions.
                         Continuously broadening expertise across diverse tech domains 💻 while actively seeking opportunities for impactful collaboration.
            
                         </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Abouts