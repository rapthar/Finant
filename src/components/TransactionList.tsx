import React from 'react';
import { ArrowDownLeft, ArrowUpRight, RotateCcw, Filter, MoreVertical } from 'lucide-react';

const transactions = [
  {
    id: 1,
    name: 'Hashtagfox OU',
    date: 'December 3',
    amount: '+1250 USD',
    status: 'Completed',
    type: 'received'
  },
  {
    id: 2,
    name: 'K M Robiul Islam',
    date: 'December 4',
    amount: '+5678 USD',
    status: 'Pending',
    type: 'sent'
  },
  {
    id: 3,
    name: 'Md Sharif Mollah',
    date: 'December 6',
    amount: '-945 USD',
    status: 'Completed',
    type: 'sent'
  }
];

const TransactionList = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <img src="/path-to-transaction-icon.png" alt="" className="w-4 h-4" />
              <h3 className="font-medium">Transactions</h3>
            </div>
            <div className="flex items-center space-x-2">
              <RotateCcw className="w-4 h-4 text-gray-400" />
              <button className="text-sm text-gray-500 hover:text-gray-900">
                This Month
                <span className="mx-2">·</span>
              </button>
              <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-900">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-sm text-gray-500 hover:text-gray-900">See All</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-lg">
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-50">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center p-4 hover:bg-gray-50">
            <div className={`w-10 h-10 rounded-full ${
              transaction.type === 'received' ? 'bg-emerald-50' : 'bg-emerald-50'
            } flex items-center justify-center mr-3`}>
              {transaction.type === 'received' ? (
                <ArrowDownLeft className="w-5 h-5 text-emerald-500" />
              ) : (
                <ArrowUpRight className="w-5 h-5 text-emerald-500" />
              )}
            </div>
            <div className="flex-grow">
              <div className="font-medium text-gray-900">{transaction.name}</div>
              <div className="text-sm text-gray-500">
                {transaction.type === 'received' ? 'Received' : 'Sent'} · {transaction.date}
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-gray-900">{transaction.amount}</div>
              <div className={`text-sm ${
                transaction.status === 'Completed' ? 'text-emerald-500' : 'text-gray-500'
              }`}>
                {transaction.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-medium mb-1">A secure financial future for your family.</h3>
            <p className="text-sm text-gray-500">Our services give you the tools to manage, track and grow your wealth.</p>
          </div>
          <button className="text-sm font-medium text-gray-900 hover:text-gray-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;