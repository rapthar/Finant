import React from 'react';
import { MoreVertical, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface BalanceCardProps {
  currency: string;
  amount: string;
  change: {
    value: string;
    isPositive: boolean;
  };
}

const BalanceCard = ({ currency, amount, change }: BalanceCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 flex-1">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <img src={`/path-to-${currency.toLowerCase()}-icon.png`} alt="" className="w-4 h-4" />
          <div className="text-sm text-gray-600">{currency} Balance</div>
        </div>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-lg">
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      <div className="text-2xl font-semibold mb-2">{amount}</div>
      <div className={`flex items-center text-sm ${change.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
        {change.isPositive ? (
          <ArrowUpRight className="w-4 h-4 mr-1" />
        ) : (
          <ArrowDownRight className="w-4 h-4 mr-1" />
        )}
        {change.value}%
      </div>
    </div>
  );
}

export default BalanceCard;