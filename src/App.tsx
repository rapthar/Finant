import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen bg-dark-500 flex overflow-hidden">
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
