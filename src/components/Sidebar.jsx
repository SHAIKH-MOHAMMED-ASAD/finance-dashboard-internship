import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Dashboard', icon: 'dashboard' },
    { id: 'transactions', label: 'Transactions', icon: 'receipt_long' },
    { id: 'insights', label: 'Insights', icon: 'analytics' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-6 bg-[#191C1F] dark:bg-[#191C1F] h-screen w-64 border-r-0 shadow-2xl z-50">
      <div className="mb-10 px-4">
        <h1 className="text-xl font-bold text-[#C0C1FF] dark:text-[#C0C1FF] font-['Manrope'] tracking-tight">Luminous Ledger</h1>
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/50 mt-1">Premium Tier</p>
      </div>

      <nav className="flex-1 space-y-2">
        {tabs.map(tab => (
          <a
            key={tab.id}
            onClick={(e) => { e.preventDefault(); setActiveTab(tab.id); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
              activeTab === tab.id 
                ? 'scale-95 text-[#C0C1FF] bg-[#C0C1FF]/10 font-bold' 
                : 'hover:bg-[#272A2E] hover:text-[#C0C1FF] text-[#9CA3AF]'
            }`}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            <span className="font-['Manrope'] tracking-tight">{tab.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto space-y-2 pt-6 border-t border-outline-variant/10">
        <a 
          onClick={(e) => { e.preventDefault(); setActiveTab('help'); }}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
              activeTab === 'help' 
                ? 'scale-95 text-[#C0C1FF] bg-[#C0C1FF]/10 font-bold' 
                : 'hover:bg-[#272A2E] hover:text-[#C0C1FF] text-[#9CA3AF]'
          }`}
        >
          <span className="material-symbols-outlined" data-icon="help">help</span>
          <span className="font-['Manrope'] tracking-tight">Help</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-[#272A2E] hover:text-[#C0C1FF] text-[#9CA3AF] cursor-pointer" onClick={() => alert("Sign Out functionality not hooked up to backend.")}>
          <span className="material-symbols-outlined" data-icon="logout">logout</span>
          <span className="font-['Manrope'] tracking-tight">Sign Out</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
