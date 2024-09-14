import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const TalentFormSection = () => {
  return (
    <div className="flex xl:flex-row max-sm:flex-col md:gap-6 items-center md:flex-col justify-center lg:p-10 max-xl:p-0 text-white h-fit relative">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default TalentFormSection;