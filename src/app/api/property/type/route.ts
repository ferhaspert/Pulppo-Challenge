import { gerPropertyTypes } from '@/repository/properties.repository';

export async function GET(request: Request) {
  const properties = await gerPropertyTypes();
  return new Response(JSON.stringify(properties), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
