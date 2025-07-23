import React from 'react';
import StarRating from '../../ui/StarRating';

const ProductInfo = ({ 
  name, 
  rating, 
  reviewCount, 
  price, 
  originalPrice, 
  currency = 'USD',
  className = '' 
}) => {
  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return (
    <div className={className}>
      <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
        {name}
      </h3>
      
      <div className="flex items-center mb-2">
        <StarRating
          rating={rating}
          size="sm"
          showValue={false}
        />
        <span className="text-xs text-gray-500 ml-1">
          ({reviewCount})
        </span>
      </div>
      
      <div className="flex items-baseline space-x-2">
        <span className="text-lg font-bold text-blue-600">
          {formatPrice(price)}
        </span>
        {originalPrice && originalPrice > price && (
          <span className="text-sm text-gray-400 line-through">
            {formatPrice(originalPrice)}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;