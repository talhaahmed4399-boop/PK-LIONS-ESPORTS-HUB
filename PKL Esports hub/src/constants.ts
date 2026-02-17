import { Team, Tournament } from './types';

// Example Teams
export const INITIAL_TEAMS: Team[] = [
  {
    id: 1,
    name: 'PK Legends',
    tag: 'PKL',
    roster: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'],
  },
  {
    id: 2,
    name: 'Shadow Squad',
    tag: 'SHD',
    roster: ['Shadow1', 'Shadow2', 'Shadow3', 'Shadow4', 'Shadow5'],
  },
  {
    id: 3,
    name: 'Ghost Warriors',
    tag: 'GW',
    roster: ['Ghost1', 'Ghost2', 'Ghost3', 'Ghost4', 'Ghost5'],
  },
];

// Example Tournaments
export const INITIAL_TOURNAMENTS: Tournament[] = [
  {
    id: 1,
    name: 'Last Circle Clash S1',
    prizePool: '₨50,000',
    status: 'Upcoming',
    entryFee: 'Free',
  },
  {
    id: 2,
    name: 'Night Showdown',
    prizePool: '₨20,000',
    status: 'Ongoing',
    entryFee: '₨15',
  },
  {
    id: 3,
    name: 'Weekend Battle Royale',
    prizePool: '₨10,000',
    status: 'Completed',
    entryFee: '₨10',
  },
];
