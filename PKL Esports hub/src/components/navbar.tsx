import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: 'dashboard' | 'teams' | 'tournaments') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="w-60 bg-[#0c0c0c] p-6 flex flex-col space-y-4">
      <button className={text-left p-2 ${activeTab === 'dashboard' ? 'text-yellow-500' : ''}} onClick={() => setActiveTab('dashboard')}>Dashboard</button>
      <button className={text-left p-2 ${activeTab === 'teams' ? 'text-yellow-500' : ''}} onClick={() => setActiveTab('teams')}>Teams</button>
      <button className={text-left p-2 ${activeTab === 'tournaments' ? 'text-yellow-500' : ''}} onClick={() => setActiveTab('tournaments')}>Tournaments</button>
    </nav>
  );
};

export default Navbar;
