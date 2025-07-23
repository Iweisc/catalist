import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="flex justify-center">
      <img
        src="/assets/image.png"
        alt="Product"
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default ProductCard;