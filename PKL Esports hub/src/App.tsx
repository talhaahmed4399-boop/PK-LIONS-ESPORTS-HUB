import React from 'react';
import PlayerCard from './components/PlayerCard';
import TeamCard from './components/TeamCard';
import TournamentCard from './components/TournamentCard';
import { Player, Team, Tournament } from './types';

// Dummy Data
const players: Player[] = [
  { inGameId: 'P001', name: 'Talha', role: 'Sniper', stats: { kd: 2.1, avgDamage: 320, accuracy: 45 } },
  { inGameId: 'P002', name: 'Ali', role: 'Assault', stats: { kd: 1.8, avgDamage: 280, accuracy: 38 } },
];

const teams: Team[] = [
  { name: 'PKL Legends', tag: 'PKL', roster: players },
];

const tournaments: Tournament[] = [
  { name: 'Last Circle Clash', prizePool: '50,000 PKR', entryFee: 'Free', description: 'The ultimate battle royale showdown.' },
];

const App: React.FC = () => {
  return (
    <div className="app-container p-6 bg-gray-900 min-h-screen text-white">
      <header className="mb-6">
        <h1 className="text-4xl font-bold mb-2">PKL Esports Hub</h1>
        <p className="text-gray-400">All players, teams, and tournaments in one place</p>
      </header>

      <section className="players mb-8">
        <h2 className="text-2xl font-semibold mb-4">Players</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {players.map(player => <PlayerCard key={player.inGameId} player={player} />)}
        </div>
      </section>

      <section className="teams mb-8">
        <h2 className="text-2xl font-semibold mb-4">Teams</h2>
        <div className="grid grid-cols-1 gap-4">
          {teams.map(team => <TeamCard key={team.name} team={team} />)}
        </div>
      </section>

      <section className="tournaments mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tournaments</h2>
        <div className="grid grid-cols-1 gap-4">
          {tournaments.map(tournament => <TournamentCard key={tournament.name} tournament={tournament} />)}
        </div>
      </section>
    </div>
  );
};

export default App;
