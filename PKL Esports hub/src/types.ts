// Player Roles
export enum PlayerRole {
  IGL = 'IGL',
  EntryFragger = 'Entry Fragger',
  Sniper = 'Sniper',
  Support = 'Support',
  Scout = 'Scout'
}

// Player Stats
export interface PlayerStats {
  kd: number;          // Kill/Death ratio
  avgDamage: number;   // Average damage per match
  matchesPlayed: number;
  accuracy: number;    // Shooting accuracy in %
  trend: 'up' | 'down' | 'stable';
}

// Player Object
export interface Player {
  id: string;
  name: string;
  inGameId: string;
  role: PlayerRole;
  stats: PlayerStats;
  signatureMap?: string;
}

// Team Object
export interface Team {
  id: string;
  name: string;
  tag: string;
  logo?: string;
  roster: Player[];
  points?: number;
  earnings?: string;
}

// Tournament Object
export interface Tournament {
  id: string;
  name: string;
  prizePool: string;
  status: 'Open' | 'Ongoing' | 'Closed' | 'Finished' | 'Upcoming';
  entryFee?: string;
  slots?: number;
  externalRegistrations?: Registration[];
  date?: string;
}

// Registration Object
export interface Registration {
  id: string;
  tournamentId: string;
  teamName: string;
  teamTag: string;
  player1: string;
  player2: string;
  player3: string;
  player4: string;
  whatsapp: string;
  status: 'Pending' | 'Confirmed' | 'Waitlisted' | 'Rejected';
  timestamp: string;
}

// Match Object
export interface Match {
  id: string;
  title: string;
  time: string;
  map: 'Erangel' | 'Miramar' | 'Sanhok' | 'Vikendi' | 'Nusa';
  teams: string[]; // team ids
  type: 'Scrim' | 'Tournament' | 'Practice';
}

// Game Maps
export interface GameMap {
  name: string;
  image: string;
  difficulty: 'Low' | 'Medium' | 'High';
  hotDrops: string[];
}

// News Articles
export interface NewsArticle {
  id: string;
  title: string;
  category: 'Update' | 'Result' | 'Transfer' | 'Sponsor';
  date: string;
  image?: string;
  summary: string;
}

// Strategies (Vault)
export interface Strategy {
  id: string;
  title: string;
  map: string;
  type: 'Attack' | 'Defense' | 'Rotation';
  description: string;
  difficulty: 'Easy' | 'Pro' | 'Elite';
}

// Trophy / Achievements
export interface Trophy {
  id: string;
  title: string;
  tournament: string;
  date: string;
  rank: '1st' | '2nd' | '3rd';
}

// Staff / Personnel
export interface StaffMember {
  id: string;
  name: string;
  role: string;
  image?: string;
}

// Scrim Slot
export interface ScrimSlot {
  id: string;
  time: string;
  map: string;
  availableSlots: number;
  status: 'Open' | 'Full';
}

// Video Highlights
export interface VideoHighlight {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
}

// Applications (Roster Applications)
export interface Application {
  id: string;
  name: string;
  role: string;
  kd: number;
  message: string;
  status: 'Pending' | 'Under Review' | 'Rejected';
}
