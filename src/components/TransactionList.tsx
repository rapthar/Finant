import React from 'react';
import { ArrowDownLeft, ArrowUpRight, RotateCcw, Filter, ArrowRight } from 'lucide-react';

const transactions = [
  {
    id: 1,
    name: 'Hashtagfox OU',
    date: 'Received · December 3',
    amount: '+1250 USD',
    status: 'Completed',
    type: 'received'
  },
  {
    id: 2,
    name: 'K M Robiul Islam',
    date: 'Sent · December 4',
    amount: '+5678 USD',
    status: 'Pending',
    type: 'sent'
  },
  {
    id: 3,
    name: 'Md Sharif Mollah',
    date: 'Sent · December 6',
    amount: '-945 USD',
    status: 'Completed',
    type: 'sent'
  }
];

const TransactionList = () => {
  return (
    <div className="bg-dark-400 rounded-xl border border-dark-100 overflow-hidden">
      <div className="px-4 py-3 border-b border-dark-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center">
                <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V8.4C3 9.88071 4.11929 11 5.6 11H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M3 8L8.34315 2.65685C8.72361 2.27639 9.27639 2.27639 9.65685 2.65685L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M21 21V15.6C21 14.1193 19.8807 13 18.4 13H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M21 16L15.6569 21.3431C15.2764 21.7236 14.7236 21.7236 14.3431 21.3431L9 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="text-sm font-medium">Transactions</span>
            </div>
            <div className="flex items-center space-x-2">
              <RotateCcw className="w-4 h-4 text-gray-500" />
              <button className="flex items-center space-x-1.5 text-sm text-gray-400">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button className="text-sm text-gray-400">This Month</button>
            </div>
          </div>
          <button className="text-sm text-gray-400 flex items-center space-x-1">
            <span>See All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="divide-y divide-dark-100">
        <div className="px-4 py-2 bg-dark-300">
          <div className="grid grid-cols-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
            <div>TYPE</div>
            <div>STATUS</div>
            <div className="text-right">AMOUNT</div>
          </div>
        </div>
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center px-4 py-3 hover:bg-dark-300">
            <div className={`w-10 h-10 rounded-full ${
              transaction.type === 'received' ? 'bg-emerald-900/20' : 'bg-emerald-900/20'
            } flex items-center justify-center mr-3`}>
              {transaction.type === 'received' ? (
                <ArrowDownLeft className="w-5 h-5 text-emerald-400" />
              ) : (
                <ArrowUpRight className="w-5 h-5 text-emerald-400" />
              )}
            </div>
            <div className="flex-grow">
              <div className="font-medium text-white">{transaction.name}</div>
              <div className="text-sm text-gray-400">{transaction.date}</div>
            </div>
            <div className="text-right">
              <div className={`font-medium ${transaction.amount.startsWith('+') ? 'text-emerald-400' : 'text-white'}`}>
                {transaction.amount}
              </div>
              <div className={`text-sm ${
                transaction.status === 'Completed' ? 'text-emerald-400' : 'text-gray-400'
              }`}>
                {transaction.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-dark-100">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-medium mb-1">A secure financial future for your family.</h3>
            <p className="text-sm text-gray-400">Our services give you the tools to manage, track and grow your wealth.</p>
          </div>
          <button className="text-sm font-medium text-white hover:text-gray-200 flex items-center">
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;