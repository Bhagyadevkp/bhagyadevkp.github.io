import React from 'react'

const About = () => {
    return (
        <div className='px-5 max-w-[1560px] mx-auto min-h-screen flex items-center justify-center flex-wrap'>
            <div className='w-10/12 sm:w-8/12 mx-auto mt-20 lg:mt-0'>
                <h1 className='mb-3 font-semibold text-[32px] text-dark'>Hey, I'm <span className='text-[#c778DD]'>Bhagyadev</span>, A Python <span className='text-[#c778DD]'>Fullstack Developer</span></h1>
                <p className='text-[#ABB2BF]'>Crafts responsive websites where technologies meets creativity.</p>
            </div>
            {/* <div className='mx-auto'>
                <div className='border flex-items-cen border-[#ABB2BF] p-2 text-[#ABB2BF]'>
                    <div className='w-4 bg-[#C778EDD]'></div>
                    <div className=''>Currently working at <span className='text-white'>Cybrosys Technologies</span></div>
                </div>
            </div> */}
        </div>
    )
}

export default About