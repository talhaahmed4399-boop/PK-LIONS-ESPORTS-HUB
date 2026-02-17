[3:11 PM, 2/17/2026] IGL: import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the root element from public/index.html
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found. Make sure #root exists in public/index.html");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
[3:12 PM, 2/17/2026] IGL: import React, { useState } from 'react';
import { Team, Tournament } from './types';
import { INITIAL_TEAMS, INITIAL_TOURNAMENTS } from './constants';

const App: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>(INITIAL_TEAMS);
  const [tournaments, setTournaments] = useState<Tournament[]>(INITIAL_TOURNAMENTS);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'teams' | 'tournaments'>('dashboard');

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* Sidebar */}
      <nav className="w-64 bg-[#0c0c0c] p-6 h-screen fixed">
        <h1 className="text-2xl font-bold mb-6">PKL Esports Hub</h1>
        <ul className="space-y-3">
          <li
            className={cursor-pointer ${activeTab === 'dashboard' ? 'text-yellow-400' : ''}}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </li>
          <li
            className={cursor-pointer ${activeTab === 'teams' ? 'text-yellow-400' : ''}}
            onClick={() => setActiveTab('teams')}
          >
            Teams
          </li>
          <li
            className={cursor-pointer ${activeTab === 'tournaments' ? 'text-yellow-400' : ''}}
            onClick={() => setActiveTab('tournaments')}
          >
            Tournaments
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="ml-64 p-6">
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
            <p>Welcome to PKL Esports Hub! Overview and stats will appear here.</p>
          </div>
        )}

        {activeTab === 'teams' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Teams</h2>
            <ul className="space-y-2">
              {teams.map(team => (
                <li key={team.id} className="p-3 bg-gray-800 rounded">
                  {team.name} ({team.tag}) — {team.roster.length} players
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'tournaments' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Tournaments</h2>
            <ul className="space-y-2">
              {tournaments.map(t => (
                <li key={t.id} className="p-3 bg-gray-800 rounded">
                  {t.name} — {t.status} — Prize Pool: {t.prizePool}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
