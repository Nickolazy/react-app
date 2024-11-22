import React from 'react'
import { useEffect, useState } from 'react'

const Balance = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    console.log(balance);
    const interval = setInterval(() => 
      setBalance((prev) => prev + 1), 10000);

    return () => clearInterval(interval);
  }, []);

  const increaseBalance = () => {
    setBalance((prev) => prev + 10);
  }

  const decreaseBalance = () => {
    if(balance >= 10) {
      setBalance((prev) => prev - 10);
    } else if(balance < 10 && balance !== 0) {
      setBalance(0);
    }
  }

  return (
    <div className='w-96 flex flex-col items-center gap-5'>
      <div className='w-full h-72 border-2 border-black bg-white shadow-xl
        rounded-2xl flex justify-center items-center gap-2 select-none'>
        <p className='font-bold text-6xl'>
        {balance}
        </p>

        <img 
          src="./react-app/src/assets/img/tasks_page/coin.jpg" 
          alt="coin" 
          className='w-16 h-16'/>
      </div>
      <div className='w-full flex justify-around font-extralight text-5xl'>
        <button onClick={decreaseBalance} className='w-14 h-14 flex items-center justify-center rounded-full
          border-2 border-black select-none cursor-pointer bg-gray-200 hover:bg-gray-300
          hover:scale-105 active:scale-95'> 
          - 
        </button>
        <button onClick={increaseBalance} className='w-14 h-14 flex items-center justify-center rounded-full
          border-2 border-black select-none cursor-pointer bg-gray-200 hover:bg-gray-300
          hover:scale-105 active:scale-95'> 
          + 
        </button>
      </div>
    </div>
  )
}

export default Balance
