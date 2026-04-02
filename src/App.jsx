import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Transactions from './components/Transactions';
import Insights from './components/Insights';
import Settings from './components/Settings';
import Help from './components/Help';
import { mockTransactions } from './data/mockData';
import './index.css';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [userRole, setUserRole] = useState('Viewer'); // 'Viewer' | 'Admin'

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'transactions':
        return <Transactions transactions={mockTransactions} userRole={userRole} />;
      case 'insights':
        return <Insights />;
      case 'settings':
        return <Settings />;
      case 'help':
        return <Help />;
      default:
        return <Overview />;
    }
  };

  const getGreetingTitle = () => {
    switch (activeTab) {
      case 'overview': return 'Good Evening';
      case 'transactions': return 'Transactions Ledger';
      case 'insights': return 'Financial Insights';
      case 'settings': return 'System Settings';
      case 'help': return 'Support Center';
      default: return 'Luminous Ledger';
    }
  };

  return (
    <div className="bg-surface font-body overflow-x-hidden min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <header className="flex justify-between items-center px-8 ml-64 w-full h-20 bg-transparent backdrop-blur-xl fixed top-0 z-40">
        <div className="flex items-center gap-4 bg-surface-container-lowest px-4 py-2 rounded-full ghost-border w-96">
          <span className="material-symbols-outlined text-on-surface-variant">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface placeholder-on-surface-variant/50 outline-none" placeholder="Search Obsidian Observatory..." type="text"/>
        </div>
        
        <div className="flex items-center gap-6 pr-64">
          <select 
            value={userRole} 
            onChange={e => setUserRole(e.target.value)}
            className="bg-surface-container-low text-on-surface text-sm font-bold px-4 py-2 rounded-lg border border-outline-variant/30 outline-none"
          >
            <option value="Viewer">Viewer Mode</option>
            <option value="Admin">Admin Mode</option>
          </select>
          
          <button className="relative text-[#C0C1FF] opacity-80 hover:opacity-100 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-tertiary rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-on-surface leading-none">Alexander V.</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Obsidian Member</p>
            </div>
            <img alt="User avatar" className="w-10 h-10 rounded-full object-cover ghost-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdfmDSRpwEjc7XYRZqCvQKIzAIM90ZRDedwRbBhgt3Djvp8UXPU1riqwjwkPfb4IeID54KnL2aPZuuUYoi_FFo3ma919BMMKGmskKdxqUmgroebAGHFchskZ_Q3MQL8K7qD4ttl3Pg-s6jGZy4zBPhcpubmFiTXfXFfg9l9z9f7NEjaRQzX48v-FTKLrLSXBhtbUQCj1m5SWg0tBiSmrLVSCkKmOPqGC2o05_ux4RdlEVisxrUCqkvwhdG5H-pAantops28Aa-eCWI"/>
          </div>
        </div>
      </header>

      <main className="ml-64 pt-24 px-8 pb-12 pr-12">
        <section className="mb-10">
          <h2 className="display-lg text-on-surface">{getGreetingTitle()}, <span className="text-primary">Alexander</span></h2>
          <p className="text-on-surface-variant font-medium mt-1">Here's your financial observatory overview.</p>
        </section>
        
        {renderContent()}
        
      </main>
    </div>
  );
}

export default App;
