import React from 'react';
import HeroContent from '../../features/HeroContent';
import ProductCard from '../../features/ProductCard';
import { mockProduct, mockHeroContent } from '../../../data/mockData';

const LeftSection = ({ productData = mockProduct }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 lg:p-12" style={{ backgroundColor: '#8794FF' }}>
      <div className="max-w-lg w-full space-y-8 mx-auto px-4 pb-16">
        <HeroContent
          title={mockHeroContent.title}
          subtitle={mockHeroContent.subtitle}
        />
        
        <ProductCard product={productData} />
      </div>
    </div>
  );
};

export default LeftSection;