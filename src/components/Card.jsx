import React from 'react'
import Button from './Button'

const Card = ({ title, info, img, isReversed }) => {
  return (
    <div className={`px-10 xl:px-20 2xl:px-40 min-[1750px]:px-60 flex gap-8 lg:gap-20 xl:gap-32 items-center ${isReversed ? 'flex-row-reverse' : ''}`}>
      <img 
        src={img} 
        alt={title} 
        className='w-1/2 h-1/2'
      />
      <div className='w-1/2 flex flex-col gap-10'>
        <p className='font-bold text-3xl lg:text-5xl xl:text-6xl'>
          {title}
        </p>
        <p className='font-normal text-base lg:text-xl text-[#b1afaf] w-3/4'>
          {info}
        </p>
        <Button text={'Learn More'} targetId={'about'}/>
      </div>
    </div>
  )
}

export default Card
