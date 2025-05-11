import { NextResponse } from 'next/server';

// Simulated latency between 500ms and 2000ms
function getRandomLatency() {
  return Math.floor(Math.random() * 1500) + 500;
}

export async function GET() {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, getRandomLatency()));
  
  // Mock data for active users
  const data = {
    id: "1",
    title: "Active Users",
    value: `${Math.floor(Math.random() * 2000) + 800}`,
    iconName: "users"
  };
  
  return NextResponse.json(data);
} 