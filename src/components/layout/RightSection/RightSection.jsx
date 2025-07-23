import React from 'react';
import Logo from '../../common/Logo';
import LoginForm from '../../features/LoginForm';

const RightSection = ({ onSubmit }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-lg w-full mx-auto px-4 pb-16">
        <div className="text-center">
          <Logo size="lg" className="mb-8" />
        </div>
        
        <LoginForm onSubmit={onSubmit} />
        
      </div>
    </div>
  );
};

export default RightSection;