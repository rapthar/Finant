import React from 'react';
import { Search, Command, Grid3X3, Bell, CircleUser, ArrowUpRight } from 'lucide-react';

const Header = () => {
  return (
    <div className="h-14 border-b border-dark-100 px-4 flex items-center justify-between bg-dark-400/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <span className="text-sm">Dashboards</span>
          <span className="mx-2 text-dark-50">/</span>
          <span className="text-sm text-gray-400">Default</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search or type a command"
            className="pl-9 pr-16 py-1.5 w-80 text-sm border border-dark-50 rounded-lg bg-dark-300 focus:bg-dark-200 transition-colors placeholder-gray-500"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
            <Command className="w-3 h-3 text-gray-500" />
            <span className="text-xs text-gray-500">Space</span>
          </div>
        </div>
        <button className="w-9 h-9 flex items-center justify-center border border-dark-50 rounded-lg bg-dark-300 hover:bg-dark-200">
          <Grid3X3 className="w-4 h-4 text-gray-400" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center border border-dark-50 rounded-lg bg-dark-300 hover:bg-dark-200 relative">
          <Bell className="w-4 h-4 text-gray-400" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full"></div>
        </button>
        <button className="w-9 h-9 flex items-center justify-center border border-dark-50 rounded-lg bg-dark-300 hover:bg-dark-200">
          <CircleUser className="w-4 h-4 text-gray-400" />
        </button>
        <button className="px-4 py-2 bg-dark-300 border border-dark-50 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-dark-200">
          <span>Export</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Header;