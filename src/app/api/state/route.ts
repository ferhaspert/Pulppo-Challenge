import { getPricesByState } from '@/repository/properties.repository';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const propertyType = url.searchParams.get('propertyType');
  const states = await getPricesByState(propertyType);
  return new Response(JSON.stringify(states), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
