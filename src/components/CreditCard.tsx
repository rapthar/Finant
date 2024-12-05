import React from 'react';

const CreditCard = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">My Cards</h3>
        <button className="text-sm text-gray-500 hover:text-gray-700">See All</button>
      </div>
      
      <div className="relative w-full aspect-[1.586/1] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <svg className="w-full h-full">
              <pattern id="pattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 32V0h32v32zM30 2H2v28h28z" fill="none" stroke="white" strokeOpacity="0.2" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
          </div>
        </div>
        
        <div className="relative p-6 text-white h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm opacity-80 mb-1">Balance</div>
              <div className="text-2xl font-semibold">$24,098.00</div>
            </div>
            <div className="text-white text-2xl font-bold tracking-wider">VISA</div>
          </div>
          
          <div className="mt-auto">
            <div className="text-lg tracking-widest mb-4">•••• •••• •••• 5678</div>
            <div className="flex justify-between items-center">
              <div className="text-sm opacity-80">9864</div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 mr-2"></div>
                <div className="w-8 h-8 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;