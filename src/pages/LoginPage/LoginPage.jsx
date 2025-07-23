import React from 'react';
import LeftSection from '../../components/layout/LeftSection';
import RightSection from '../../components/layout/RightSection';

const LoginPage = () => {
  const handleLogin = (loginData) => {
    console.log('Login submitted:', loginData);
    // Here you would typically handle the login logic
    // For now, we'll just log the data
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - Purple gradient with product showcase */}
      <div className="lg:w-1/2">
        <LeftSection />
      </div>
      
      {/* Right Section - Login form */}
      <div className="lg:w-1/2">
        <RightSection onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;