import { useState } from 'react';
import Navbar from './navbar';
import Hero from './hero';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='absolute top-0 w-full -z-10'> 
        <img src="bg.svg" alt="Background" />
      </div>
      <Hero />
    </>
  );
}

export default App;
