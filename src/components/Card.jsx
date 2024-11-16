import React from 'react'
import Button from './Button'

const Card = ({ title, info, img, isReversed }) => {
  return (
    <div className={`w-3/4 flex gap-32 items-center ${isReversed ? 'flex-row-reverse' : ''}`}>
      <img 
        src={img} 
        alt={img} 
        className='w-[650px] h-[450px]'
      />
      <div className='w-1/2 flex flex-col gap-10'>
        <p className='font-bold text-6xl'>
          {title}
        </p>
        <p className='font-normal text-xl text-[#b1afaf] w-3/4'>
          {info}
        </p>
        <Button text={'Learn More'} targetId={'helloPage'}/>
      </div>
    </div>
  )
}

export default Card
