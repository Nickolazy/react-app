import React from 'react';
import Button from '../Button';

const GalleryPage = () => {
  return (
    <section id='about' className="w-full h-screen bg-[url('./src/assets/img/gallery_page/gallery_page_backgr.png')] 
      bg-cover bg-center py-60 flex flex-col items-center gap-16 ">
      <div className='text-black text-center w-1/2 flex flex-col gap-10 items-center'>
        <p className='text-6xl font-bold'>
          Our hills and valleys are like nothing you’ve seen.
        </p>
        <p className='text-xl text-gray-500 w-2/3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce sit amet magna commodo, tempus dolor sit amet, laoreet elit. 
          Donec mauris tortor.
        </p>
      </div>

      <Button width={200} height={65} text={'Learn More'} targetId={'helloPage'}/>
    </section>
  )
}

export default GalleryPage
