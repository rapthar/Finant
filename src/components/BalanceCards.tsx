import React from 'react';
import { Plus } from 'lucide-react';
import BalanceCard from './BalanceCard';

const BalanceCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <BalanceCard 
        currency="USD"
        amount="$56,476.00"
        change={{ value: "2.8", isPositive: true }}
      />
      <BalanceCard 
        currency="EUR"
        amount="€56,476.00"
        change={{ value: "1.3", isPositive: false }}
      />
      <div className="flex">
        <BalanceCard 
          currency="GBP"
          amount="£56,476.00"
          change={{ value: "5.9", isPositive: true }}
        />
        <button className="ml-4 px-4 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-lg hover:text-gray-600 hover:border-gray-300 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BalanceCards;