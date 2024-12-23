import { getPricesByState } from '@/repository/properties.repository';

export async function GET(request: Request) {
  const states = await getPricesByState();
  return new Response(JSON.stringify(states), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
