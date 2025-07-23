import React from 'react';

const HeroContent = ({ title, subtitle }) => {
  return (
    <div className="text-left text-white mb-8">
      <h1 className="text-3xl font-bold leading-tight">
        {title}
      </h1>
    </div>
  );
};

export default HeroContent;