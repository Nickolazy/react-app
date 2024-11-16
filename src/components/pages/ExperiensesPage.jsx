import React from 'react';
import ScrollBar from '../ScrollBar';
import About from '../About';

const ExperiensesPage = () => {
  const imagesToScroll = [
    "./src/assets/img/experiences_page/images/image1.png",
    "./src/assets/img/experiences_page/images/image2.png",
    "./src/assets/img/experiences_page/images/image3.png",
    "./src/assets/img/experiences_page/images/image4.jpg",
    "./src/assets/img/experiences_page/images/image5.jpg",
    "./src/assets/img/experiences_page/images/image6.jpg",
    "./src/assets/img/experiences_page/images/image7.jpg",
    "./src/assets/img/experiences_page/images/image8.jpg",
    "./src/assets/img/experiences_page/images/image9.jpg",
  ]

  return (
    <section id='experiences' className="w-full h-[1600px] bg-[url('./src/assets/img/experiences_page/experiences_page_backgr.png')] bg-cover bg-center pt-32">
      <ScrollBar imagesToScroll={imagesToScroll}/>

      <About />
    </section>
  )
}

export default ExperiensesPage
