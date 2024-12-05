import React from 'react';
import { MoreVertical } from 'lucide-react';

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const BalanceChart = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img src="/path-to-chart-icon.png" alt="" className="w-4 h-4" />
            <h3 className="font-medium">Balance Analysis</h3>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-1.5"></div>
              <span className="text-sm text-gray-600">Income</span>
            </div>
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400 mr-1.5"></div>
              <span className="text-sm text-gray-600">Expenses</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-50 text-gray-600">Weekly</button>
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 text-gray-900">Monthly</button>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-lg">
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      
      <div className="relative h-[280px]">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 py-4">
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
                <div key={i} className="border-t border-gray-100 w-full h-0"></div>
              ))}
            </div>

            {/* Bars */}
            <div className="relative w-full flex justify-between items-end">
              {months.map((month) => (
                <div key={month} className="flex-1 px-1 group">
                  <div className="relative">
                    {/* Hover tooltip */}
                    {month === 'JUN' && (
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg py-1.5 px-2.5 whitespace-nowrap">
                        <div className="font-medium mb-0.5">June 28</div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-emerald-400">$1200</span>
                          <span className="text-red-400">$690</span>
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                      </div>
                    )}
                    
                    <div className="space-y-1">
                      <div 
                        className={`w-full bg-emerald-400 rounded-sm transition-all duration-200 ${month === 'JUN' ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
                        style={{ height: '80px' }}
                      ></div>
                      <div 
                        className={`w-full bg-red-400 rounded-sm transition-all duration-200 ${month === 'JUN' ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
                        style={{ height: '40px' }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 text-center mt-2">{month}</div>
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