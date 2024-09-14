import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const TalentFormSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-transparent text-white font-Aries">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default TalentFormSection;