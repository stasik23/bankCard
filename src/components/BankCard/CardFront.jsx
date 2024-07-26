import React from 'react';

export const CardFront = ({ input, inputValue, expiryMonth, expiryYear }) => {
  return (
    <div className="relative w-96 h-56 bg-[url('/images/bg-card-front.png')] shadow-inner p-4 rounded-lg text-white flex flex-col justify-between">
      <div className="text-2xl font-semibold tracking-widest">{inputValue || '0000 0000 0000 0000'}</div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-lg">{input || 'JANE APPLESEED'}</div>
        <div className="text-lg">{expiryMonth || '00'}/{expiryYear || '00'}</div>
      </div>
    </div>
  );
};
