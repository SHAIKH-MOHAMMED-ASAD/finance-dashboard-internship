import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { chartData1D, chartData1W, chartData1M, chartData1Y, categoryData, summaryStats } from '../data/mockData';

const Overview = () => {
  const [timeRange, setTimeRange] = useState('1M');

  const getChartData = () => {
    switch (timeRange) {
      case '1D': return chartData1D;
      case '1W': return chartData1W;
      case '1M': return chartData1M;
      case '1Y': return chartData1Y;
      default: return chartData1M;
    }
  };

  const getButtonClass = (range) => {
    if (timeRange === range) {
      return "px-4 py-1.5 rounded-full text-xs font-bold bg-primary text-on-primary shadow-lg shadow-primary/20 transition-all";
    }
    return "px-4 py-1.5 rounded-full text-xs font-bold text-on-surface-variant hover:text-on-surface transition-colors";
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass ghost-border p-6 rounded-xl group hover:bg-surface-container-high transition-all duration-300">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
            </div>
            <div className="flex items-center gap-1 text-tertiary bg-tertiary-container/10 px-3 py-1 rounded-full text-xs font-semibold">
              <span className="material-symbols-outlined text-xs">trending_up</span>
              {summaryStats.balanceTrend}%
            </div>
          </div>
          <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-1">Total Balance</p>
          <p className="headline-md text-3xl text-on-surface">${summaryStats.totalBalance.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
        </div>

        <div className="glass ghost-border p-6 rounded-xl group hover:bg-surface-container-high transition-all duration-300">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">arrow_upward</span>
            </div>
            <div className="flex items-center gap-1 text-tertiary bg-tertiary-container/10 px-3 py-1 rounded-full text-xs font-semibold">
              <span className="material-symbols-outlined text-xs">trending_up</span>
              1.8%
            </div>
          </div>
          <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-1">Total Income</p>
          <p className="headline-md text-3xl text-on-surface">${summaryStats.income.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
        </div>

        <div className="glass ghost-border p-6 rounded-xl group hover:bg-surface-container-high transition-all duration-300">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center text-error">
              <span className="material-symbols-outlined text-3xl">arrow_downward</span>
            </div>
            <div className="flex items-center gap-1 text-tertiary bg-tertiary-container/10 px-3 py-1 rounded-full text-xs font-semibold">
              <span className="material-symbols-outlined text-xs">trending_down</span>
              {Math.abs(summaryStats.expensesTrend)}%
            </div>
          </div>
          <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-1">Total Expenses</p>
          <p className="headline-md text-3xl text-on-surface">${summaryStats.expenses.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass ghost-border rounded-xl p-8 flex flex-col h-[480px]">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="headline-md text-on-surface">Balance Trend</h3>
              <p className="text-on-surface-variant text-sm">Monthly overview of asset performance</p>
            </div>
            <div className="flex bg-surface-container-lowest p-1 rounded-full ghost-border">
              <button className={getButtonClass('1D')} onClick={() => setTimeRange('1D')}>1D</button>
              <button className={getButtonClass('1W')} onClick={() => setTimeRange('1W')}>1W</button>
              <button className={getButtonClass('1M')} onClick={() => setTimeRange('1M')}>1M</button>
              <button className={getButtonClass('1Y')} onClick={() => setTimeRange('1Y')}>1Y</button>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={getChartData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c0c1ff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#c0c1ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#908fa0" tick={{fill: '#908fa0', fontSize: 10}} />
                <YAxis stroke="#908fa0" tick={{fill: '#908fa0', fontSize: 10}} domain={['auto', 'auto']}/>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(23, 25, 35, 0.9)', borderColor: 'rgba(70, 69, 84, 0.15)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Balance']}
                />
                <Area type="monotone" dataKey="balance" stroke="#c0c1ff" strokeWidth={4} fillOpacity={1} fill="url(#colorBalance)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass ghost-border rounded-xl p-8 flex flex-col h-[480px]">
          <h3 className="headline-md text-on-surface mb-1">Breakdown</h3>
          <p className="text-on-surface-variant text-sm mb-10">Expenditure categories</p>
          <div className="flex-1 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {categoryData.map((entry, index) => {
                    const colors = ['#c0c1ff', '#d0bcff', '#8083ff', '#323538', '#571bc1', '#ffb783'];
                    return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />;
                  })}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(23, 25, 35, 0.9)', borderColor: 'rgba(70, 69, 84, 0.15)', borderRadius: '8px' }}
                  formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <footer className="mt-16 pt-8 border-t border-outline-variant/5 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant/40">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest">System Status: Optimal</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Overview;
