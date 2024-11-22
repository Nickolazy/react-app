import React from 'react'
import Balance from '../Balance'

const BalancePage = () => {
  return (
    <section>
      <div className='w-full h-3 bg-blue-900'></div>
      <div id='tasks' className="w-full h-[700px] bg-[url('../src/assets/img/gallery_page/gallery_page_backgr.png')] 
        bg-cover bg-center text-black">
        <div className='p-10'>
          <h1 className='font-bold text-6xl'> Your balance </h1>
          <p className='font-medium text-2xl text-red-800'>
            every 10 seconds your balance increases by 1 coin
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <Balance />
        </div>
      </div>
    </section>
  )
}

export default BalancePage
