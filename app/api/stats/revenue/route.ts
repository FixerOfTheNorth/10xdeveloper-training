import { NextResponse } from 'next/server';

// Simulated latency between 500ms and 2000ms
function getRandomLatency() {
  return Math.floor(Math.random() * 1500) + 500;
}

export async function GET() {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, getRandomLatency()));
  
  // Mock data for revenue
  const amount = Math.floor(Math.random() * 20000) + 5000;
  const data = {
    id: "2",
    title: "Revenue",
    value: `$${amount.toLocaleString()}`,
    iconName: "dollar-sign"
  };
  
  return NextResponse.json(data);
} 