import React from 'react';

const Insights = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* Insight 1: Top Spending */}
        <div className="lg:col-span-8 group relative rounded-2xl bg-surface-container-low overflow-hidden transition-all hover:bg-surface-container duration-300">
          <div className="p-8 h-full flex flex-col md:flex-row items-center gap-8 z-10 relative">
            <div className="relative w-48 h-48 flex-shrink-0">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle className="text-surface-container-highest" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                <circle className="text-primary" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="145" strokeLinecap="round" strokeWidth="8"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                <span className="text-2xl font-bold font-headline mt-1">42%</span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                Top Spending Category
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">Housing Focus</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Housing consumes 42% of your monthly budget. Consider refinancing options to <span className="text-primary font-semibold underline decoration-primary/30 underline-offset-4">save up to $400/mo.</span>
              </p>
              <button className="px-6 py-2.5 bg-surface-container-highest border border-primary/20 rounded-xl text-sm font-semibold text-primary hover:bg-primary hover:text-on-primary transition-all">
                Explore Refinancing
              </button>
            </div>
          </div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none"></div>
        </div>

        {/* Insight 2: Expense Reduction */}
        <div className="lg:col-span-4 rounded-2xl bg-surface-container-low p-8 flex flex-col justify-between hover:bg-surface-container transition-all duration-300 relative overflow-hidden group">
          <div className="z-10 relative">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-bold tracking-widest uppercase mb-8">
              Efficiency Found
            </div>
            <h3 className="text-lg font-medium text-on-surface-variant mb-2">Savings Found</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black font-headline text-tertiary drop-shadow-[0_0_15px_rgba(255,183,131,0.3)]">+$1,240</span>
              <span className="text-on-surface-variant font-medium">/qtr</span>
            </div>
          </div>
          <p className="text-on-surface-variant mt-8 leading-relaxed z-10 relative">
            Optimized utility and subscription management has saved you $1,240 this quarter.
          </p>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-tertiary/10 blur-[60px] group-hover:bg-tertiary/20 transition-all"></div>
        </div>

        {/* Insight 3: Subscription Warning */}
        <div className="lg:col-span-12 rounded-2xl bg-surface-container-low border border-outline-variant/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-4 p-8 border-r border-outline-variant/10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-error/10 text-error text-xs font-bold tracking-widest uppercase mb-6">
                Subscription Warning
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">Dormant Services</h3>
              <p className="text-on-surface-variant mb-6">
                We detected 3 services you haven't used in 60 days. Canceling could <span className="text-error font-semibold">save $58/mo</span>.
              </p>
              <button className="w-full py-3 bg-error text-on-error font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">auto_delete</span>
                Review & Cancel
              </button>
            </div>
            
            <div className="md:col-span-8 p-8 bg-surface-container/30 space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant">video_library</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">StreamX Premium</p>
                    <p className="text-xs text-outline">Last used: 64 days ago</p>
                  </div>
                </div>
                <span className="text-sm font-bold">$18.99/mo</span>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant">fitness_center</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Vitality Gym Plus</p>
                    <p className="text-xs text-outline">Last used: 71 days ago</p>
                  </div>
                </div>
                <span className="text-sm font-bold">$29.00/mo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-2xl bg-surface-container-low relative overflow-hidden">
          <h4 className="font-headline font-bold text-xl mb-6">Risk Quotient</h4>
          <div className="flex flex-col mb-8">
            <p className="text-4xl font-black font-headline text-tertiary">Low Risk Profile</p>
            <p className="text-on-surface-variant text-sm font-medium mt-1">Portfolio optimized for sustained growth</p>
          </div>
          <div className="space-y-3">
            <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="w-1/4 h-full bg-tertiary rounded-full"></div>
            </div>
            <p className="text-xs text-on-surface-variant">Your current strategy is 75% more efficient than peer benchmarks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
