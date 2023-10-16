import React from 'react';
import Image from 'next/image';
import TextAnimation from './TextAnimation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white text-3xl  lg:text-5xl font-extrabold '>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I'm{' '}
            </span>
            <br />
            <TextAnimation />
          </h1>
          <p className='mt-4 text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            nemo esse nam, fuga quidem voluptate numquam modi inventore
            reiciendis debitis eum architecto quis eius consequuntur molestias
            impedit cum quia dolorum?
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-sky-200 text-black'>
              Hire me
            </button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 border border-white mt-3 text-white'>
              Download CV
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='logo-dev-website'
              src='/dev-website.svg'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
