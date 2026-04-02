import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isSaved, setIsSaved] = useState(false);

  // Load from local storage or use defaults
  const [personalInfo, setPersonalInfo] = useState(() => {
    const saved = localStorage.getItem('luminous-personal-info');
    return saved ? JSON.parse(saved) : {
      firstName: 'Alexander',
      lastName: 'Thorne',
      email: 'alexander.thorne@luminous.com',
      phoneCode: 'US',
      phone: '+1 (555) 019-2834'
    };
  });

  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem('luminous-preferences');
    return saved ? JSON.parse(saved) : {
      theme: 'Dark (Obsidian)',
      currency: 'USD ($)',
      language: 'English'
    };
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('luminous-notifications');
    return saved ? JSON.parse(saved) : {
      emailAlerts: true,
      smsAlerts: false,
      marketing: false
    };
  });

  const handleSavePersonalInfo = (e) => {
    e.preventDefault();
    localStorage.setItem('luminous-personal-info', JSON.stringify(personalInfo));
    showSaveSuccess();
  };

  const handleSavePreferences = (e) => {
    e.preventDefault();
    localStorage.setItem('luminous-preferences', JSON.stringify(preferences));
    showSaveSuccess();
  };

  const handleSaveNotifications = (e) => {
    e.preventDefault();
    localStorage.setItem('luminous-notifications', JSON.stringify(notifications));
    showSaveSuccess();
  };

  const showSaveSuccess = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const renderNavClass = (tab) => {
    if (activeTab === tab) {
      return "flex items-center justify-between px-6 py-4 bg-primary/10 text-primary border-l-2 border-primary font-bold transition-all cursor-pointer";
    }
    return "flex items-center justify-between px-6 py-4 text-on-surface-variant hover:bg-surface-container-high transition-all cursor-pointer border-l-2 border-transparent";
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        
        {/* Floating Success Alert */}
        {isSaved && (
          <div className="absolute top-0 right-0 z-50 bg-[#10b981] text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-[slideInRight_0.3s_ease-out]">
            <span className="material-symbols-outlined">check_circle</span>
            <span className="font-bold text-sm">Changes Saved Successfully!</span>
          </div>
        )}

        {/* Left Column: Navigation / Profile Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-panel rounded-2xl p-6 bg-[rgba(50,53,56,0.4)] backdrop-blur-2xl border border-[rgba(70,69,84,0.15)] flex flex-col items-center text-center transition-all duration-300 hover:border-primary/20">
            <img 
              alt="User avatar" 
              className="w-24 h-24 rounded-full border-2 border-primary/20 mb-4 mx-auto object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEfOOwyB-JBEXqUqSdhJpxyrMhfC0e9nKWdqRI2XeT0Daz3txyVfr0Nisf9312KeEUPo3DcLLEHvCG34STVDJFWZdlqpNcrJlaZ8aFf3QxSOqjpU0yfw7xx6OVZvjJwmMairn6RTBR0V-qUGOoyBLJUS6cMWRwBu9fbUbZnuvhtWNIFa2cg_zDDO5Ihu9nKbSYaIbFmQk2w0ur9rPVaP62VrEDvw3DtJgVyR3h98pwwl8AElN5q7F2RLzWbYHoVwET_WLWMC-3gdrT"
            />
            <h3 className="text-xl font-bold text-on-surface font-headline mb-1 text-center">{personalInfo.firstName} {personalInfo.lastName}</h3>
            <p className="text-sm text-outline mb-4 text-center">Executive Account</p>
            <button className="w-full bg-surface-container-high hover:bg-surface-bright text-on-surface text-sm font-bold py-2.5 rounded-xl border border-outline-variant/30 transition-colors">
              Change Avatar
            </button>
          </div>

          <div className="glass-panel rounded-2xl bg-[rgba(50,53,56,0.4)] backdrop-blur-2xl border border-[rgba(70,69,84,0.15)] overflow-hidden">
            <nav className="flex flex-col">
              <a onClick={(e) => {e.preventDefault(); setActiveTab('personal')}} className={renderNavClass('personal')}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xl">person</span>
                  <span className="text-sm">Personal Info</span>
                </div>
              </a>
              <a onClick={(e) => {e.preventDefault(); setActiveTab('preferences')}} className={renderNavClass('preferences')}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xl">tune</span>
                  <span className="text-sm">Preferences</span>
                </div>
              </a>
              <a onClick={(e) => {e.preventDefault(); setActiveTab('notifications')}} className={renderNavClass('notifications')}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xl">notifications</span>
                  <span className="text-sm">Notifications</span>
                </div>
              </a>
              <a onClick={(e) => {e.preventDefault(); setActiveTab('security')}} className={renderNavClass('security')}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xl">security</span>
                  <span className="text-sm">Security</span>
                </div>
              </a>
            </nav>
          </div>
        </div>

        {/* Right Column: Settings Details */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* PERSONAL INFO TAB */}
          {activeTab === 'personal' && (
            <div className="glass-panel rounded-2xl p-8 bg-[rgba(50,53,56,0.4)] backdrop-blur-2xl border border-[rgba(70,69,84,0.15)] animate-[fadeIn_0.3s_ease-out]">
              <h2 className="text-2xl font-black text-on-surface font-headline tracking-[-0.03em] mb-6">Personal Information</h2>
              
              <form className="space-y-6" onSubmit={handleSavePersonalInfo}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-outline">First Name</label>
                    <input 
                      type="text" 
                      value={personalInfo.firstName}
                      onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:border-primary focus:ring-primary transition-all text-on-surface outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-outline">Last Name</label>
                    <input 
                      type="text" 
                      value={personalInfo.lastName}
                      onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:border-primary focus:ring-primary transition-all text-on-surface outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-outline">Email Address</label>
                  <input 
                    type="email" 
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                    className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:border-primary focus:ring-primary transition-all text-on-surface outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-outline">Phone Number</label>
                  <div className="flex gap-2">
                    <select 
                      value={personalInfo.phoneCode}
                      onChange={(e) => setPersonalInfo({...personalInfo, phoneCode: e.target.value})}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:border-primary transition-all text-on-surface outline-none sm:w-32 appearance-none cursor-pointer"
                    >
                      <option value="US">🇺🇸 US (+1)</option>
                      <option value="IN">🇮🇳 IN (+91)</option>
                      <option value="UK">🇬🇧 UK (+44)</option>
                      <option value="CA">🇨🇦 CA (+1)</option>
                      <option value="AU">🇦🇺 AU (+61)</option>
                      <option value="AE">🇦🇪 AE (+971)</option>
                    </select>
                    <input 
                      type="tel" 
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                      className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:border-primary transition-all text-on-surface flex-1 outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-4">
                  <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-on-primary font-bold px-8 py-2.5 rounded-xl primary-glow hover:scale-[1.02] transition-transform active:scale-95 text-sm shadow-[0_0_20px_rgba(192,193,255,0.25)]">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* PREFERENCES TAB */}
          {activeTab === 'preferences' && (
            <div className="glass-panel rounded-2xl p-8 bg-[rgba(50,53,56,0.4)] backdrop-blur-2xl border border-[rgba(70,69,84,0.15)] animate-[fadeIn_0.3s_ease-out]">
              <h2 className="text-2xl font-black text-on-surface font-headline tracking-[-0.03em] mb-6">Display Preferences</h2>
              
              <form className="space-y-6" onSubmit={handleSavePreferences}>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-outline">Application Theme</label>
                  <select 
                    value={preferences.theme}
                    onChange={(e) => setPreferences({...preferences, theme: e.target.value})}
                    className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:border-primary transition-all text-on-surface outline-none cursor-pointer"
                  >
                    <option>Dark (Obsidian)</option>
                    <option>Light (Coming Soon)</option>
                    <option>System Default</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-outline">Display Currency</label>
                  <select 
                    value={preferences.currency}
                    onChange={(e) => setPreferences({...preferences, currency: e.target.value})}
                    className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:border-primary transition-all text-on-surface outline-none cursor-pointer"
                  >
                    <option>USD ($)</option>
                    <option>INR (₹)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-outline">Language</label>
                  <select 
                    value={preferences.language}
                    onChange={(e) => setPreferences({...preferences, language: e.target.value})}
                    className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:border-primary transition-all text-on-surface outline-none cursor-pointer"
                  >
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>

                <div className="pt-4 flex justify-end gap-4">
                  <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-on-primary font-bold px-8 py-2.5 rounded-xl primary-glow hover:scale-[1.02] transition-transform active:scale-95 text-sm shadow-[0_0_20px_rgba(192,193,255,0.25)]">
                    Save Preferences
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'notifications' && (
            <div className="glass-panel rounded-2xl p-8 bg-[rgba(50,53,56,0.4)] backdrop-blur-2xl border border-[rgba(70,69,84,0.15)] animate-[fadeIn_0.3s_ease-out]">
              <h2 className="text-2xl font-black text-on-surface font-headline tracking-[-0.03em] mb-6">Notification Settings</h2>
              
              <form className="space-y-6" onSubmit={handleSaveNotifications}>
                
                <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">Email Security Alerts</h4>
                    <p className="text-xs text-outline mt-1">Receive an email immediately upon an unrecognized login.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={notifications.emailAlerts} onChange={(e) => setNotifications({...notifications, emailAlerts: e.target.checked})} />
                    <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">SMS Transaction Alerts</h4>
                    <p className="text-xs text-outline mt-1">Get an SMS warning for transactions over your set threshold.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={notifications.smsAlerts} onChange={(e) => setNotifications({...notifications, smsAlerts: e.target.checked})} />
                    <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">Marketing Communications</h4>
                    <p className="text-xs text-outline mt-1">Receive updates regarding new features and offers.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={notifications.marketing} onChange={(e) => setNotifications({...notifications, marketing: e.target.checked})} />
                    <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="pt-4 flex justify-end gap-4">
                  <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-on-primary font-bold px-8 py-2.5 rounded-xl primary-glow hover:scale-[1.02] transition-transform active:scale-95 text-sm shadow-[0_0_20px_rgba(192,193,255,0.25)]">
                    Save Notifications
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === 'security' && (
            <div className="glass-panel rounded-2xl p-8 bg-[rgba(50,53,56,0.4)] backdrop-blur-2xl border border-[rgba(70,69,84,0.15)] animate-[fadeIn_0.3s_ease-out]">
              <h2 className="text-2xl font-black text-on-surface font-headline tracking-[-0.03em] mb-6">Security Settings</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-md font-bold text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">password</span>
                        Change Password
                      </h4>
                      <p className="text-xs text-outline mt-1 max-w-sm">We recommend updating your password every 90 days. Last changed 42 days ago.</p>
                    </div>
                    <button className="px-5 py-2 bg-surface-container-high hover:bg-surface-bright border border-outline-variant/20 rounded-lg text-sm font-bold text-on-surface transition-colors cursor-not-allowed opacity-50" title="Disabled in demo">
                      Update
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-md font-bold text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-xl">shield</span>
                        Two-Factor Authentication
                      </h4>
                      <p className="text-xs text-outline mt-1 max-w-sm">Enhance account security by requiring a verification code upon login.</p>
                    </div>
                    <button className="px-5 py-2 bg-tertiary text-on-tertiary border border-outline-variant/20 rounded-lg text-sm font-bold transition-colors cursor-not-allowed opacity-80" title="Disabled in demo">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DESTRUCTIVE ZONE - Only in Personal or Security */}
          {(activeTab === 'personal' || activeTab === 'security') && (
            <div className="glass-panel rounded-2xl p-8 bg-[rgba(50,53,56,0.4)] backdrop-blur-2xl border border-[rgba(70,69,84,0.15)] flex justify-between items-center mt-6">
              <div>
                <h4 className="text-lg font-bold text-on-surface font-headline mb-1">Delete Account</h4>
                <p className="text-sm text-outline">Permanently remove your account and all associated data.</p>
              </div>
              <button 
                className="bg-error/10 text-error border border-error/20 hover:bg-error/20 font-bold px-6 py-2.5 rounded-xl transition-colors text-sm"
                onClick={() => alert("Restricted: Cannot delete the admin demo account.")}
              >
                Delete Account
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Settings;
