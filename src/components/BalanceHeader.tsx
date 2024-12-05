import React from 'react';
import { Filter, ChevronDown, Copy } from 'lucide-react';

const BalanceHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <div className="flex items-center space-x-2 mb-1">
          <h2 className="text-lg font-medium">Balances</h2>
          <div className="w-4 h-4 rounded-full bg-dark-200 flex items-center justify-center">
            <span className="text-xs text-gray-400">?</span>
          </div>
        </div>
        <div className="text-2xl font-semibold flex items-center">
          BDT 796,476.00
          <Copy className="w-4 h-4 ml-2 cursor-pointer text-gray-500 hover:text-gray-300" />
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="h-9 px-3 bg-dark-300 rounded-lg border border-dark-50 text-sm flex items-center space-x-2 hover:bg-dark-200">
          <Filter className="w-4 h-4 text-gray-400" />
          <span>Filters</span>
        </button>
        <button className="h-9 px-3 bg-dark-300 rounded-lg border border-dark-50 text-sm flex items-center space-x-2 hover:bg-dark-200">
          <span>Last 30 days</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default BalanceHeader;