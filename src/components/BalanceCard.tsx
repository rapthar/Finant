import React from 'react';
import { MoreHorizontal, ArrowUpRight, ArrowDownRight, DollarSign, Euro, PoundSterling } from 'lucide-react';

interface BalanceCardProps {
  currency: string;
  amount: string;
  change: {
    value: string;
    isPositive: boolean;
  };
}

const currencyIcons = {
  USD: DollarSign,
  EUR: Euro,
  GBP: PoundSterling,
};

const BalanceCard = ({ currency, amount, change }: BalanceCardProps) => {
  const CurrencyIcon = currencyIcons[currency as keyof typeof currencyIcons];

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 flex-1">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
            <CurrencyIcon className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-sm text-gray-500">{currency} Balance</div>
        </div>
        <button className="w-8 h-8 flex items-center justify-center">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
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