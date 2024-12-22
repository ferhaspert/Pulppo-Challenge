import { getProperties } from '@/app/repository/properties.repository';

export async function GET(request: Request) {
  const properties = await getProperties();
  return new Response(JSON.stringify({ properties }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
