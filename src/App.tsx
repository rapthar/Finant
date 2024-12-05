import React from 'react';
import Sidebar from './components/Sidebar';
import BalanceCard from './components/BalanceCard';
import BalanceChart from './components/BalanceChart';
import TransactionList from './components/TransactionList';
import CreditCard from './components/CreditCard';
import { Plus, Search, Command, Grid3X3, ArrowUpRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      
      <div className="flex-1">
        {/* Header */}
        <div className="h-14 border-b border-gray-100 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-sm">Dashboards</span>
              <span className="mx-2 text-gray-300">/</span>
              <span className="text-sm text-gray-500">Default</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search or type a command" 
                className="pl-9 pr-9 py-1.5 w-80 text-sm border border-gray-200 rounded-lg"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <Command className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-400">Space</span>
              </div>
            </div>
            <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg">
              <Grid3X3 className="w-4 h-4 text-gray-600" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg">
              <img src="/path-to-your-icon.png" alt="" className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg">
              <img src="/path-to-your-icon.png" alt="" className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium flex items-center space-x-2">
              <span>Export</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h2 className="text-lg font-medium">Balances</h2>
                  <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-gray-500">?</span>
                  </div>
                </div>
                <div className="text-2xl font-semibold flex items-center">
                  BDT 796,476.00
                  <img src="/path-to-copy-icon.png" alt="" className="w-4 h-4 ml-2 cursor-pointer" />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="h-9 px-3 bg-white rounded-lg border border-gray-200 text-sm flex items-center space-x-2">
                  <img src="/path-to-filter-icon.png" alt="" className="w-4 h-4" />
                  <span>Filters</span>
                </button>
                <button className="h-9 px-3 bg-white rounded-lg border border-gray-200 text-sm flex items-center space-x-2">
                  <span>Last 30 days</span>
                  <img src="/path-to-chevron-icon.png" alt="" className="w-4 h-4" />
                </button>
              </div>
            </div>

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

            <div className="grid grid-cols-2 gap-8 mb-8">
              <CreditCard />
              <BalanceChart />
            </div>

            <TransactionList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
