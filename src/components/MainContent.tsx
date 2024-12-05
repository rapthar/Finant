import React from 'react';
import BalanceHeader from './BalanceHeader';
import BalanceCards from './BalanceCards';
import BalanceChart from './BalanceChart';
import TransactionList from './TransactionList';
import CreditCard from './CreditCard';
import { IncomesWidget, ExpendsWidget, PromoWidget } from './AnalyticsWidgets';

const MainContent = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <BalanceHeader />
        <BalanceCards />

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <CreditCard />
            <BalanceChart />
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <IncomesWidget />
              <ExpendsWidget />
            </div>
            <TransactionList />
            <PromoWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;