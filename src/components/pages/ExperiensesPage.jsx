import React from 'react';
import ScrollBar from '../ScrollBar';
import Numbers from '../Numbers';

const ExperiensesPage = () => {
  const pathToImg = "./react-app/src/assets/img/experiences_page/images/";
  const imagesToScroll = [
    pathToImg + "image1.png",
    pathToImg + "image2.png",
    pathToImg + "image3.png",
    pathToImg + "image4.jpg",
    pathToImg + "image5.jpg",
    pathToImg + "image6.jpg",
    pathToImg + "image7.jpg",
    pathToImg + "image8.jpg",
    pathToImg + "image9.jpg",
  ]

  return (
    <section id='experiences' className="w-full h-[1600px] bg-[url('../src/assets/img/experiences_page/experiences_page_backgr.png')] bg-cover bg-center pt-32">
      <ScrollBar imagesToScroll={imagesToScroll}/>
      
      <Numbers />
    </section>
  )
}

export default ExperiensesPage
