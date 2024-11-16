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
    <header className="flex items-center justify-between gap-10 text-lg font-bold mr-36">
      <div className='flex gap-20 items-center'>
        <img 
          src="./src/assets/icons/logo.svg" 
          alt="logo" 
          className='cursor-pointer select-none'
        />
        <ul className="flex gap-16">
          {menuItems.map((item, index) => (
            <li key={index} className='cursor-pointer select-none'>
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
          className='cursor-pointer select-none'
        />
        <img 
          src="./src/assets/icons/menu.svg" 
          alt="search" 
          className='cursor-pointer select-none'
          />
      </div>
    </header>
  )
}

export default Header
