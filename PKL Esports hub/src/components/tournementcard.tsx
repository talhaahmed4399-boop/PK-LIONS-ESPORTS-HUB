import React from 'react';
import { Tournament } from '../types';

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ tournament }) => {
  return (
    <div className="tournament-card">
      <h2>{tournament.name}</h2>
      <p>Prize Pool: {tournament.prizePool}</p>
      <p>Entry Fee: {tournament.entryFee}</p>
      <p>{tournament.description}</p>
      <button>Register Now</button>
    </div>
  );
};

export default TournamentCard;
