import { useState } from 'react';
import Navbar from './navbar';
import Hero from './hero';
import WhatUget from './whatUget';
import SignUp from './signup';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar onSignUpClick={handleButtonClick} />
      <div className='absolute top-0 w-full -z-10'> 
        <img src="bg.svg" alt="Background" />
      </div>
      <div>
        <br />
      <Hero />
        <br />
      <SignUp isOpen={isPopupOpen} onClose={closePopup}/>
        <br />
      <WhatUget/>
      </div>
    </div>
  );
}

export default App;
