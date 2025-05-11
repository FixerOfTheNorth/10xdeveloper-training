import { NextResponse } from 'next/server';

// Simulated latency between 500ms and 2000ms
function getRandomLatency() {
  return Math.floor(Math.random() * 1500) + 500;
}

export async function GET() {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, getRandomLatency()));
  
  // Mock data for new signups
  const signups = Math.floor(Math.random() * 50) + 100; // Random number between 100-150
  const data = {
    id: "3",
    title: "New Signups",
    value: signups,
    trend: Math.random() > 0.5 ? 'up' : 'down',
    percentage: Math.floor(Math.random() * 15) + 5, // 5-20% change
  };
  
  return NextResponse.json(data);
} 