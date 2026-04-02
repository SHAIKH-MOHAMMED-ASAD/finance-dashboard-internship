import React from 'react';

const Help = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-[fadeIn_0.5s_ease-out]">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-black text-on-surface font-headline tracking-[-0.03em] mb-4">How can we help you?</h1>
        <div className="relative max-w-2xl mx-auto group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
          <input 
            className="bg-surface-container-low border border-[rgba(70,69,84,0.15)] rounded-full pl-12 pr-6 py-4 text-sm w-full focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-outline/50 outline-none text-on-surface shadow-lg" 
            placeholder="Search for articles, guides, or features..." 
            type="text"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-surface-container-high transition-colors cursor-pointer border border-[rgba(70,69,84,0.15)]">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">menu_book</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-2">Knowledge Base</h3>
          <p className="text-on-surface-variant text-sm">Browse articles, tutorials, and guides to get the most out of Luminous Ledger.</p>
        </div>

        <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-surface-container-high transition-colors cursor-pointer border border-[rgba(70,69,84,0.15)]">
          <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">chat</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-2">Community Forum</h3>
          <p className="text-on-surface-variant text-sm">Connect with other executives, share tips, and discuss investment strategies.</p>
        </div>

        <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-surface-container-high transition-colors cursor-pointer border border-[rgba(70,69,84,0.15)]">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">support_agent</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-2">Priority Support</h3>
          <p className="text-on-surface-variant text-sm">Get 24/7 dedicated assistance from our premium concierge support team.</p>
        </div>
      </div>

      <section className="glass-panel rounded-2xl p-0 overflow-hidden border border-[rgba(70,69,84,0.15)] text-left">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Contact Details */}
          <div className="p-10 bg-surface-container-low/50 border-r border-[rgba(70,69,84,0.15)]">
            <h2 className="text-2xl font-black text-on-surface font-headline mb-8">Contact Us directly</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-outline/10 flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-outline mb-1">Toll-Free Support</h4>
                  <p className="text-lg text-primary font-medium hover:underline cursor-pointer">1-800-LUM-INOUS</p>
                  <p className="text-sm text-on-surface-variant">+1 (800) 586-4668</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-outline/10 flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-outline mb-1">Email Support</h4>
                  <p className="text-lg text-primary font-medium hover:underline cursor-pointer">concierge@luminousledger.com</p>
                  <p className="text-sm text-on-surface-variant">Response expected within 15 minutes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-outline/10 flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-outline mb-1">Headquarters</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Luminous Financial Towers<br/>
                    101 Obsidian Way, Suite 400<br/>
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 bg-[rgba(50,53,56,0.2)]">
            <h2 className="text-2xl font-black text-on-surface font-headline mb-2">Send a Message</h2>
            <p className="text-sm text-on-surface-variant mb-8">Our executive team is standing by to assist you.</p>

            <form className="space-y-4" onSubmit={(e) => {e.preventDefault(); alert("Message Sent Successfully!");}}>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-outline font-bold">Subject</label>
                <select className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:border-primary transition-all text-on-surface outline-none appearance-none">
                  <option>Account Assistance</option>
                  <option>Technical Issue</option>
                  <option>Feature Request</option>
                  <option>Billing Question</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-outline font-bold">Message</label>
                <textarea 
                  required
                  rows="4" 
                  className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:border-primary transition-all text-on-surface outline-none resize-none"
                  placeholder="How can we assist you today?"
                ></textarea>
              </div>

              <button type="submit" className="w-full mt-4 bg-primary text-on-primary font-bold py-3.5 rounded-xl primary-glow hover:scale-[1.02] transition-transform active:scale-95 duration-200 shadow-[0_0_20px_rgba(192,193,255,0.25)]">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
