import React from 'react'

const About = () => {
  return (
    <div id='about' className='mt-[750px] flex flex-col items-center gap-10'>
      <div className='w-1/4 space-y-5'>
        <p className='font-bold text-6xl text-center'>
          By The Numbers
        </p>
        <p className='text-lg text-gray-200 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et 
          libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='flex justify-center gap-20'>
        <div className='w-1/5 space-y-4'>
          <p className='font-bold text-5xl text-center text-red-600'>
            100+
          </p>
          <p className='text-lg text-gray-200 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.
          </p>
        </div>
        <div className='w-1/5 space-y-4'>
          <p className='font-bold text-5xl text-center text-red-600'>
            43,000+
          </p>
          <p className='text-lg text-gray-200 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.
          </p>
        </div>
        <div className='w-1/5 space-y-4'>
          <p className='font-bold text-5xl text-center text-red-600'>
            30+
          </p>
          <p className='text-lg text-gray-200 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
