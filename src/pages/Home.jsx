import React from 'react';
import NavBar from '../components/home page/navbar';
import Hero from '../components/home page/hero';
import Companies from '../components/home page/companies';
import Features from '../components/home page/features';

function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-screen'>
      <NavBar />

      <Hero />
      <div class="my-10 h-[1px] w-full bg-white opacity-20 md:my-[7rem] md:w-[40%] md:h-[1px] lg:mx-10 "></div>

      <Companies />

      <div class="my-10 h-[1px] w-full bg-white opacity-20 md:my-[7rem] md:w-[40%] md:h-[1px] lg:mx-10 "></div>
      <Features />
    </div >
  );
}

export default Home;
