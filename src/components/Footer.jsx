import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const menuItems = [
    { name: 'About', targetId: 'about'}, 
    { name: 'Pricing ', targetId: 'pricing'}, 
    { name: 'Company', targetId: 'company'}, 
    { name: 'Blog', targetId: 'blog' }
  ];

  return (
    <footer className='flex items-center justify-between text-white font-bold text-lg px-10 py-7 bg-[#010A20]'>
      <div className='flex gap-20 items-center'>
        <img 
          src="../src/assets/icons/logo.svg" 
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
      <div className='flex gap-20'>
        <span>
          icon
        </span>
        <span>
          Copyright © 2024
        </span>
      </div>
    </footer>
  )
}

export default Footer
