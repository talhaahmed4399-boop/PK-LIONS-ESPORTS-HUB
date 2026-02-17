import axios from 'axios';
import { Player, Team, Strategy } from '../types';

// Base URL for Gemini AI
const GEMINI_BASE_URL = 'https://api.gemini.ai/v1';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // store your key in .env

if (!GEMINI_API_KEY) {
  console.warn('⚠️ GEMINI_API_KEY is not set. Gemini features will not work.');
}

/**
 * Generate a scouting report for a single player
 * @param player Player object
 * @returns Promise<string> - the AI-generated report
 */
export async function generatePlayerReport(player: Player): Promise<string> {
  const prompt = `
  Generate a detailed PUBG Mobile scouting report for the player:
  Name: ${player.name}
  In-Game ID: ${player.inGameId}
  Role: ${player.role}
  Stats: K/D ${player.stats.kd}, Avg Damage ${player.stats.avgDamage}, Accuracy ${player.stats.accuracy}%
  Matches Played: ${player.stats.matchesPlayed}
  Trend: ${player.stats.trend}
  Provide tips for improvement, highlight strengths, and suggest maps or roles they excel at.
  `;

  try {
    const response = await axios.post(
      ${GEMINI_BASE_URL}/generate,
      { prompt },
      {
        headers: {
          Authorization: Bearer ${GEMINI_API_KEY},
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.output || 'No report generated';
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Error generating report';
  }
}

/**
 * Generate a team report
 * @param team Team object
 */
export async function generateTeamReport(team: Team): Promise<string> {
  const playerList = team.roster.map(p => ${p.name} (${p.role})).join(', ');
  const prompt = `
  Generate a PUBG Mobile team analysis for the team: ${team.name} [${team.tag}]
  Players: ${playerList}
  Include strengths, weaknesses, ideal strategies, and map recommendations.
  `;

  try {
    const response = await axios.post(
      ${GEMINI_BASE_URL}/generate,
      { prompt },
      {
        headers: {
          Authorization: Bearer ${GEMINI_API_KEY},
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.output || 'No team report generated';
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Error generating team report';
  }
}

/**
 * Generate strategy suggestions
 * @param strategy Strategy object
 */
export async function generateStrategyAnalysis(strategy: Strategy): Promise<string> {
  const prompt = `
  Analyze the following PUBG Mobile strategy:
  Title: ${strategy.title}
  Map: ${strategy.map}
  Type: ${strategy.type}
  Difficulty: ${strategy.difficulty}
  Provide advice on execution, pitfalls, and tips for optimization.
  `;

  try {
    const response = await axios.post(
      ${GEMINI_BASE_URL}/generate,
      { prompt },
      {
        headers: {
          Authorization: Bearer ${GEMINI_API_KEY},
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.output || 'No strategy analysis generated';
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Error generating strategy analysis';
  }
}
