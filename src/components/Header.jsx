import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const menuItems = [
    { name: 'DESTINATIONS', targetId: 'destinations'}, 
    { name: 'EXPERIENCES ', targetId: 'experiences'}, 
    { name: 'ABOUT', targetId: 'about'}, 
    { name: 'GALLERY', targetId: 'gallery' }
  ];

  return (
    <header className="flex items-center justify-between gap-10 text-lg font-bold lg:mr-36">
      <div className='flex gap-10 xl:gap-20 items-center'>
        <img 
          src="./src/assets/icons/logo.svg" 
          alt="logo" 
          className='cursor-pointer select-none'
        />
        <ul className="hidden md:flex gap-3 lg:gap-5 xl:gap-16">
          {menuItems.map((item, index) => (
            <li key={index} className='cursor-pointer select-none hover:scale-105 transition-transform'>
              <ScrollLink
                to={item.targetId}
                smooth={true}
                duration={500}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex gap-10'>
        <img 
          src="./src/assets/icons/search.svg" 
          alt="search" 
          className='cursor-pointer select-none hover:scale-110 transition-transform'
        />
        <img 
          src="./src/assets/icons/menu.svg" 
          alt="search" 
          className='cursor-pointer select-none hover:scale-110 transition-transform'
          />
      </div>
    </header>
  )
}

export default Header
