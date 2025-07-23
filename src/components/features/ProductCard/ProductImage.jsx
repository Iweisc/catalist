import React from 'react';

const ProductImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        onError={(e) => {
          // Fallback to placeholder if image fails to load
          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NyA3NEg5M1Y4MEg4N1Y3NFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+dGggZD0iTTc0IDEwNEg5NlY5OEg3NFYxMDRaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik03NCAxMTZIMTI2VjExMEg3NFYxMTZaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik03NCAxMjhIMTE2VjEyMkg3NFYxMjhaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=';
        }}
      />
    </div>
  );
};

export default ProductImage;