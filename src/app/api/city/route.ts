import { getPricesByCity } from '@/repository/properties.repository';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const state = url.searchParams.get('state');
  const states = await getPricesByCity(state);
  return new Response(JSON.stringify(states), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
