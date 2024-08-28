import { useState } from 'react';
import Navbar from './navbar';
import Hero from './hero';
import WhatUget from './whatUget';
import SignUp from './signup';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='absolute top-0 w-full -z-10'> 
        <img src="bg.svg" alt="Background" />
      </div>
      <div>
        <br />
      <Hero />
        <br />
      <SignUp />
        <br />
      <WhatUget/>
      </div>
    </>
  );
}

export default App;
