import React from 'react';
import Button from '../../ui/Button';

const ProductActions = ({ onOrder, onLearnMore }) => {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="primary"
        size="sm"
        onClick={onOrder}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm"
      >
        Order
      </Button>
      
      <button
        onClick={onLearnMore}
        className="text-blue-600 hover:text-blue-700 text-sm font-medium underline-offset-2 hover:underline"
      >
        Learn more
      </button>
    </div>
  );
};

export default ProductActions;