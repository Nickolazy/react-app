import React, { useState } from 'react';
import ButtonArrow from './ButtonArrow'; 

const ScrollBar = ({ imagesToScroll }) => {
  const ANIMATION_DURATION = 500;
  const MAX_VISIBLE_IMAGES = 3;
  const AMOUNT_OF_BALLS = Math.ceil(imagesToScroll.length / MAX_VISIBLE_IMAGES);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [delayedIndex, setDelayedIndex] = useState(0);
  const [isJump, setIsJump] = useState(false);

  const visibleImages = imagesToScroll.slice(currentIndex, currentIndex + MAX_VISIBLE_IMAGES);

  const handleScrollLeft = () => {
    handleJumpBall();

    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imagesToScroll.length - MAX_VISIBLE_IMAGES : prevIndex - MAX_VISIBLE_IMAGES);

    setDelayedIndex((prevIndex) => 
      prevIndex === 0 ? imagesToScroll.length - MAX_VISIBLE_IMAGES : prevIndex - MAX_VISIBLE_IMAGES);
  };

  const handleScrollRight = () => {
    handleJumpBall();

    setCurrentIndex((prevIndex) => 
      prevIndex === imagesToScroll.length - MAX_VISIBLE_IMAGES ? 0 : prevIndex + MAX_VISIBLE_IMAGES);  

      if(currentIndex === imagesToScroll.length - MAX_VISIBLE_IMAGES) {
        setDelayedIndex((prevIndex) => 
          prevIndex === imagesToScroll.length - MAX_VISIBLE_IMAGES ? 0 : prevIndex + MAX_VISIBLE_IMAGES);
      } else {
        setTimeout(() => {
          setDelayedIndex((prevIndex) => 
            prevIndex === imagesToScroll.length - MAX_VISIBLE_IMAGES ? 0 : prevIndex + MAX_VISIBLE_IMAGES);
        }, ANIMATION_DURATION);
      }
  };

  const handleJumpBall = () => {
    setIsJump(true);

    setTimeout(() => {
      setIsJump(false);
    }, ANIMATION_DURATION);
  };

  return (
    <div className='flex flex-col items-center gap-7'>
      <div className='flex justify-center gap-14'>
        <ButtonArrow icon={"./src/assets/icons/arrow_to_left.svg"} handle={handleScrollLeft} />
        
        <div className="flex gap-8">
          {visibleImages.map((image, index) => (
            <div key={currentIndex + index}>
              <img 
                src={image} 
                alt={`Image ${currentIndex + index}`}
                className='w-[400px] h-[250px] rounded-xl'
              />
            </div>
          ))}
        </div>

        <ButtonArrow icon={"./src/assets/icons/arrow_to_right.svg"} handle={handleScrollRight} />
      </div>

      <div className={`flex flex-row gap-6 relative ${AMOUNT_OF_BALLS <= 1 ? 'hidden' : ''}`}>
        <div 
          className={`absolute h-5 bg-red-600 transition-all duration-500 ease-in-out rounded-full
            ${isJump ? 'w-16' : 'w-5'}`}
          style={{
            left: `${(delayedIndex / MAX_VISIBLE_IMAGES) * (123 / AMOUNT_OF_BALLS)}%`,
          }}
        ></div>

        {Array.from({ length: AMOUNT_OF_BALLS }).map((_, index) => (
          <div 
            key={index}
            className={`w-5 h-5 rounded-full transition-all duration-500 ease-in-out 
              ${Math.floor(currentIndex / MAX_VISIBLE_IMAGES) === index ? 'bg-red-600' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollBar;
