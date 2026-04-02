import React, { useState, useEffect } from 'react';

const Transactions = ({ transactions: initialTransactions, userRole }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All Types');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Data Persistence (Local Storage)
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('luminous-transactions');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialTransactions;
      }
    }
    return initialTransactions;
  });

  useEffect(() => {
    localStorage.setItem('luminous-transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Modal forms state
  const [newTx, setNewTx] = useState({ description: '', category: 'Housing', amount: '', type: 'expense' });

  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All Types' ? true : t.type.toLowerCase() === filterType.toLowerCase() || t.category === filterType;
    return matchesSearch && matchesType;
  });

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      description: newTx.description,
      category: newTx.category,
      amount: parseFloat(newTx.amount),
      type: newTx.type
    };
    setTransactions([newTransaction, ...transactions]);
    setIsModalOpen(false);
    setNewTx({ description: '', category: 'Housing', amount: '', type: 'expense' });
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  // Export functionality
  const exportCSV = () => {
    if (filteredTransactions.length === 0) return;
    
    // Create CSV header
    const headers = ['Date,Description,Category,Type,Amount'];
    
    // Create CSV rows
    const rows = filteredTransactions.map(t => {
      // Escape commas in strings if necessary
      const desc = `"${t.description.replace(/"/g, '""')}"`;
      return `${t.date},${desc},${t.category},${t.type},${t.amount}`;
    });
    
    const csvContent = headers.concat(rows).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    // Trigger download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'luminous_transactions_export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const netMonthlyFlow = filteredTransactions.reduce((acc, curr) => curr.type === 'income' ? acc + curr.amount : acc - curr.amount, 0);

  return (
    <div className="relative z-10 max-w-7xl mx-auto space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Modal for Adding Transaction */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-[fadeIn_0.2s_ease-out]">
          <div className="glass-panel p-8 rounded-2xl w-full max-w-md border border-[rgba(70,69,84,0.15)] bg-surface-container-high transform transition-all translate-y-0 scale-100 duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold font-headline">New Transaction</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-on-surface-variant hover:text-on-surface transition-colors"
                title="Close Modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form onSubmit={handleAddTransaction} className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-widest text-outline font-bold">Description</label>
                <input 
                  required
                  type="text" 
                  value={newTx.description}
                  onChange={(e) => setNewTx({...newTx, description: e.target.value})}
                  className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:border-primary transition-all text-on-surface outline-none"
                  placeholder="e.g. Amazon Purchase"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-xs uppercase tracking-widest text-outline font-bold">Type</label>
                  <select 
                    value={newTx.type}
                    onChange={(e) => setNewTx({...newTx, type: e.target.value})}
                    className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:border-primary transition-all text-on-surface outline-none"
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-xs uppercase tracking-widest text-outline font-bold">Category</label>
                  <select 
                    value={newTx.category}
                    onChange={(e) => setNewTx({...newTx, category: e.target.value})}
                    className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:border-primary transition-all text-on-surface outline-none"
                  >
                    <option value="Housing">Housing</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Health">Health</option>
                    <option value="Income">Income</option>
                    <option value="Entertainment">Entertainment</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-widest text-outline font-bold">Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline">$</span>
                  <input 
                    required
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={newTx.amount}
                    onChange={(e) => setNewTx({...newTx, amount: e.target.value})}
                    className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl pl-8 pr-4 py-2.5 text-sm focus:ring-1 focus:border-primary w-full transition-all text-on-surface outline-none"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <button type="submit" className="w-full mt-6 bg-primary text-on-primary font-bold py-3 rounded-xl primary-glow hover:scale-[1.02] transition-transform active:scale-95 duration-200">
                Save Transaction
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Glassmorphic Container for Table */}
      <section className="glass-panel rounded-2xl p-8 overflow-hidden bg-[rgba(50,53,56,0.4)] backdrop-blur-2xl border border-[rgba(70,69,84,0.15)] flex flex-col h-[600px]">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 flex-shrink-0">
          <div>
            <h1 className="text-3xl font-black text-on-surface font-headline tracking-[-0.03em]">Transactions</h1>
            <p className="text-on-surface-variant text-sm mt-1">Monitoring activities across your accounts.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-end sm:items-center gap-4">
            
            <div className="flex gap-4 w-full sm:w-auto">
              {/* Search */}
              <div className="relative group flex-1 sm:flex-none">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
                <input 
                  className="bg-surface-container-lowest border-0 rounded-xl pl-10 pr-6 py-2.5 text-sm w-full sm:w-64 focus:ring-1 focus:ring-primary transition-all placeholder:text-outline/50 outline-none" 
                  placeholder="Search..." 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Filter */}
              <div className="relative">
                <select 
                  className="appearance-none bg-surface-container-high border-0 rounded-xl px-4 pr-10 py-2.5 text-sm font-medium text-on-surface focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer outline-none h-full"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  title="Filter Transactions"
                >
                  <option>All Types</option>
                  <option>Income</option>
                  <option>Expense</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-lg">expand_more</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={exportCSV}
                className="bg-surface-container-highest border border-outline-variant/20 hover:bg-surface-bright text-on-surface font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors active:scale-95 duration-200"
                title="Export list to CSV"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                <span className="font-label text-sm hidden sm:inline">Export CSV</span>
              </button>

              {userRole === 'Admin' && (
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-primary to-secondary text-on-primary font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 primary-glow hover:scale-[1.02] transition-transform active:scale-95 shadow-[0_0_20px_rgba(192,193,255,0.25)] duration-200"
                >
                  <span className="material-symbols-outlined">add</span>
                  <span className="font-label text-sm">Add</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto w-full flex-1 pb-4">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead className="text-outline uppercase text-[10px] font-bold tracking-[0.1em]">
              <tr>
                <th className="pb-4 pl-6">Date</th>
                <th className="pb-4">Description</th>
                <th className="pb-4">Category</th>
                <th className="pb-4 hidden md:table-cell">Type</th>
                <th className="pb-4 text-right pr-6">Amount</th>
                {userRole === 'Admin' && <th className="pb-4 text-right pr-6">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((t) => (
                <tr key={t.id} className="bg-surface-container-low/80 hover:bg-surface-container-high transition-all duration-200 group">
                  <td className="py-5 pl-6 rounded-l-2xl text-on-surface-variant font-medium text-sm">
                    {new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">
                          {t.type === 'income' ? 'payments' : 'shopping_bag'}
                        </span>
                      </div>
                      <span className="font-bold text-on-surface">{t.description}</span>
                    </div>
                  </td>
                  <td className="py-5">
                    <span className="text-sm text-on-surface-variant font-medium">{t.category}</span>
                  </td>
                  <td className="py-5 hidden md:table-cell">
                    {t.type === 'income' ? (
                      <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-tertiary/10 text-tertiary border border-tertiary/20">Income</span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-error/10 text-error border border-error/20">Expense</span>
                    )}
                  </td>
                  <td className={`py-5 text-right pr-6 font-bold font-headline ${t.type === 'income' ? 'text-tertiary' : 'text-on-surface'} ${userRole !== 'Admin' ? 'rounded-r-2xl' : ''}`}>
                    {t.type === 'income' ? '+' : '-'}${Math.abs(t.amount).toLocaleString(undefined, {minimumFractionDigits: 2})}
                  </td>
                  {userRole === 'Admin' && (
                    <td className="py-5 text-right pr-4 rounded-r-2xl">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button 
                          onClick={() => deleteTransaction(t.id)}
                          className="p-2 rounded-lg hover:bg-error/10 text-outline hover:text-error transition-colors"
                          title="Delete Transaction"
                        >
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan={userRole === 'Admin' ? 6 : 5} className="py-12 text-center text-on-surface-variant bg-surface-container-lowest/50 rounded-2xl border border-outline-variant/10 border-dashed">
                    <span className="material-symbols-outlined text-4xl mb-3 opacity-50 text-outline">search_off</span>
                    <p>No transactions match your search criteria.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Secondary Bento Cluster */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel bg-[rgba(50,53,56,0.4)] backdrop-blur-2xl border border-[rgba(70,69,84,0.15)] p-6 rounded-2xl flex flex-col justify-between group hover:border-[#c0c1ff]/30 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-widest text-outline">Net Flow</span>
            <span className="material-symbols-outlined text-tertiary group-hover:scale-110 transition-transform">trending_up</span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-black font-headline text-on-surface">{netMonthlyFlow > 0 ? '+' : ''}${netMonthlyFlow.toLocaleString(undefined, {minimumFractionDigits: 2})}</h3>
            <p className="text-xs text-tertiary mt-1">Based on current filters</p>
          </div>
        </div>

        <div className="glass-panel bg-[rgba(50,53,56,0.4)] backdrop-blur-2xl border border-[rgba(70,69,84,0.15)] p-6 rounded-2xl flex flex-col justify-between group hover:border-[#c0c1ff]/30 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-widest text-outline">Total Items</span>
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">pie_chart</span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-black font-headline text-on-surface">{filteredTransactions.length}</h3>
            <p className="text-xs text-outline mt-1">Transactions displayed</p>
          </div>
        </div>

        <div className="glass-panel bg-[rgba(50,53,56,0.4)] backdrop-blur-2xl border border-[rgba(70,69,84,0.15)] p-6 rounded-2xl flex flex-col justify-between group hover:border-[#c0c1ff]/30 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-widest text-outline">Pending Verification</span>
            <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform">verified_user</span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-black font-headline text-on-surface">0 <span className="text-sm font-medium text-outline">items</span></h3>
            <p className="text-xs text-outline mt-1">All clear</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
