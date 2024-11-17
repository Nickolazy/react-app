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
      <div className='ml-5 md:ml-52 xl:ml-64 mt-20 lg:mt-20 2xl:mt-40 w-1/2 flex flex-col gap-6'>
        <h1 className='font-roboto font-black text-5xl sm:text-7xl lg:text-8xl'>
          EXPLORE INDONESIA
        </h1>

        <Button width={200} height={65} text={'Start travelling'} targetId={'destinations'}/>
      </div>
      <div className="hidden lg:block lg:w-2/3 absolute left-[296px] bottom-0 flex justify-around gap-20 p-10">
        <div className="absolute w-full inset-0 -ml-64 md:-ml-16 lg:-ml-10 xl:-ml-0 bg-black opacity-60 z-0"></div>

        <div className="relative z-10 flex flex-col -ml-[500px] md:-ml-32 lg:-ml-16 xl:-ml-0 md:flex-row justify-around gap-5 xl:gap-20 w-full">
          {listData.map((item) => (
            <PointOfList key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ContentHelloPage
