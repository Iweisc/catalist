import React from 'react';

const Logo = ({ size = 'md', className = '' }) => {
  return (
    <img
      src="/assets/logo.png"
      alt="Logo"
      className={`mx-auto ${className}`}
      style={{
        width: "249px",
        height: "37px",
      }}
    />
  );
};

export default Logo;