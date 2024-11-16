import Card from '../Card'

const DestinationsPage = () => {
  const cardItems = [{ 
      title: "The walkways of Indonesia spellbind", 
      info: "Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus. ", 
      img: "./src/assets/img/destonations_page/field.png" 
    },
    { 
      title: "Perfect beaches exude relaxation and fun", 
      info: "Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus. ", 
      img: "./src/assets/img/destonations_page/beach.png" 
    }]

  return (
    <section id='destinations' className="w-full bg-[url('./src/assets/img/destonations_page/destinations_page_backgr.png')] 
      bg-cover bg-center py-52 flex flex-col items-center gap-40">
      {cardItems.map((item, index) => {
        const isReversed = index % 2 === 1;

        return (
          <Card 
            key={index}
            title={item.title} 
            info={item.info} 
            img={item.img}
            isReversed={isReversed}
          />
        );
      })}
    </section>
  )
}

export default DestinationsPage
