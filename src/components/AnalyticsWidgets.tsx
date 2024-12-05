import React from 'react';
import { TrendingUp, TrendingDown, Gift } from 'lucide-react';

export const IncomesWidget = () => {
  return (
    <div className="bg-dark-400 rounded-xl p-6 border border-dark-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-emerald-900/20 rounded-lg">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="font-semibold text-white">Income</h3>
        </div>
        <span className="text-sm text-gray-400">This month</span>
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-bold text-white">$2,450.25</p>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-emerald-400">+12.5%</span>
          <span className="text-gray-400">from last month</span>
        </div>
      </div>
    </div>
  );
};

export const ExpendsWidget = () => {
  return (
    <div className="bg-dark-400 rounded-xl p-6 border border-dark-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-red-900/20 rounded-lg">
            <TrendingDown className="w-5 h-5 text-red-400" />
          </div>
          <h3 className="font-semibold text-white">Expenses</h3>
        </div>
        <span className="text-sm text-gray-400">This month</span>
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-bold text-white">$1,125.80</p>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-red-400">+8.2%</span>
          <span className="text-gray-400">from last month</span>
        </div>
      </div>
    </div>
  );
};

export const PromoWidget = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-6 text-white border border-dark-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Gift className="w-5 h-5" />
          </div>
          <h3 className="font-semibold">Premium Plan</h3>
        </div>
      </div>
      <p className="text-white/90 mb-4">Upgrade to Premium and get access to advanced analytics and unlimited transactions.</p>
      <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
        Upgrade Now
      </button>
    </div>
  );
};