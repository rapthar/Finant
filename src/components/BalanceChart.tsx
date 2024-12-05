import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const BalanceChart = () => {
  return (
    <div className="bg-dark-400 rounded-xl border border-dark-100 p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-emerald-900/20 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" className="text-emerald-400">
                <path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
            </div>
            <span className="font-medium text-sm">Balance Analysis</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-xs text-gray-400">Income</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-emerald-700"></div>
              <span className="text-xs text-gray-400">Expenses</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm rounded-lg bg-dark-300 text-gray-400 hover:bg-dark-200">Weekly</button>
          <button className="px-3 py-1 text-sm rounded-lg bg-dark-200 text-white">Monthly</button>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-dark-300 rounded-lg">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="relative h-[280px]">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4">
          <span>$5K</span>
          <span>$4K</span>
          <span>$3K</span>
          <span>$2K</span>
          <span>$1K</span>
          <span>$0K</span>
        </div>

        {/* Chart */}
        <div className="ml-8 h-full">
          <div className="relative h-[calc(100%-24px)] flex items-end">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-t border-dark-100 w-full h-0"></div>
              ))}
            </div>

            {/* Bars */}
            <div className="relative w-full flex justify-between items-end">
              {months.map((month) => (
                <div key={month} className="flex-1 px-1 group relative">
                  <div className="relative">
                    {/* Hover tooltip */}
                    {month === 'JUN' && (
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg py-1.5 px-2.5 whitespace-nowrap z-10">
                        <div className="font-medium mb-0.5">June 28</div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-emerald-500">$1200</span>
                          <span className="text-emerald-700">$690</span>
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                      </div>
                    )}
                    
                    <div className="space-y-1">
                      <div 
                        className={`w-full bg-emerald-500 rounded-sm transition-all duration-200 ${month === 'JUN' ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
                        style={{ height: month === 'JUN' ? '120px' : `${Math.random() * 80 + 40}px` }}
                      ></div>
                      <div 
                        className={`w-full bg-emerald-700 rounded-sm transition-all duration-200 ${month === 'JUN' ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
                        style={{ height: month === 'JUN' ? '60px' : `${Math.random() * 40 + 20}px` }}
                      ></div>
                    </div>
                  </div>
                  <div className={`text-xs text-center mt-2 ${month === 'JUN' ? 'text-emerald-400 font-medium' : 'text-gray-500'}`}>
                    {month}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceChart;