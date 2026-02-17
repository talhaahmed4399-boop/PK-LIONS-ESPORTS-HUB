import React, { useState } from 'react';
import { Team } from '../types';
import { generateTeamReport } from '../services/geminiService';
import PlayerCard from './PlayerCard';

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const [teamReport, setTeamReport] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleGenerateTeamReport = async () => {
    setLoading(true);
    const result = await generateTeamReport(team);
    setTeamReport(result);
    setLoading(false);
  };

  return (
    <div className="team-card">
      <h2>{team.name} [{team.tag}]</h2>
      <div className="roster">
        {team.roster.map(player => <PlayerCard key={player.inGameId} player={player} />)}
      </div>
      <button onClick={handleGenerateTeamReport} disabled={loading}>
        {loading ? 'Generating Team Report...' : 'Generate Team Report'}
      </button>
      {teamReport && <div className="team-report">{teamReport}</div>}
    </div>
  );
};

export default TeamCard;
