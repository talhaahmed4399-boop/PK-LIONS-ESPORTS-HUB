import React, { useState } from 'react';
import { Player } from '../types';
import { generatePlayerReport } from '../services/geminiService';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const [report, setReport] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleGenerateReport = async () => {
    setLoading(true);
    const result = await generatePlayerReport(player);
    setReport(result);
    setLoading(false);
  };

  return (
    <div className="card">
      <h3>{player.name} ({player.role})</h3>
      <p>K/D: {player.stats.kd} | Avg Damage: {player.stats.avgDamage} | Accuracy: {player.stats.accuracy}%</p>
      <button onClick={handleGenerateReport} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Report'}
      </button>
      {report && <div className="report">{report}</div>}
    </div>
  );
};

export default PlayerCard;
