'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { navbar } from './navbar';
import MenuOverLay from './MenuOverlay';
const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav className=' fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          href={'/'}
          className='text-2xl lgtext-5xl text-white font-semibold'
        >
          LOGO
        </Link>
        <div className=' md:hidden'>
          {!menuToggle ? (
            <button
              onClick={() => setMenuToggle(true)}
              className='px-3 py-2 border rounded '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setMenuToggle(false)}
              className='px-3 py-2 border rounded '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
            {navbar &&
              navbar.map((nav, index) => (
                <li key={index}>
                  <NavLink href={nav.path} title={nav.title} />
                </li>
              ))}
          </ul>
        </div>
      </div>
      {menuToggle && <MenuOverLay links={navbar} />}
    </nav>
  );
};

export default NavBar;
