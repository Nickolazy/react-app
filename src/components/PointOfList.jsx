import React from 'react'

const PointOfList = ({ data }) => {
  return (
    <div className='space-y-2'>
      <div className='font-black text-red-600'>
        {data.id}
      </div>
      <div className='text-2xl font-bold'>
        {data.title}
      </div>
      <div className='2xl:w-1/2 text-base font-normal text-gray-500'>
        {data.info}
      </div>
    </div>
  )
}

export default PointOfList
