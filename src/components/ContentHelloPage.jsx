import React from 'react'
import Button from './Button'
import PointOfList from './PointOfList'

const ContentHelloPage = () => {
  const listData = [
    { id: '01', title: 'First title', info: 'Lorem ipsum dolor sit amet et amet ist ame.' },
    { id: '02', title: 'Second title', info: 'Lorem ipsum dolor sit amet et amet ist ame.' },
    { id: '03', title: 'Third title', info: 'Lorem ipsum dolor sit amet et amet ist ame.' },
  ]

  return (
    <>
      <div className='ml-64 mt-52 w-1/2 space-y-5'>
        <h1 className='font-roboto font-black text-8xl'>
          EXPLORE INDONESIA
        </h1>

        <Button width={200} height={65} text={'Start travelling'} targetId={'destinations'}/>
      </div>
      <div className="w-2/3 h-1/5 absolute left-[296px] bottom-0 flex justify-around gap-20 p-10">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        <div className="relative z-10 flex justify-around gap-20 w-full">
          {listData.map((item) => (
            <PointOfList key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ContentHelloPage
