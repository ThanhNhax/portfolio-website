'use client';
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';
import { TAB_DATA } from '@/app/data/constan';

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id='about' className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
        <Image src={'/about-me.svg'} alt='about me' width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg'>
            I am a front-end developer with a passion for creating interactive
            and responsive web applications. I have experience working with
            JavaScript, TypeScript, React, Redux, Node.js, Express, MySQL, HTML,
            CSS, and Git. I am a quick learner and I am always looking to expand
            my knowledge and skill set. I am a team player and I am excited to
            work with others to create amazing applications.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              Certifications
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
