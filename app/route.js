import { template } from './template';
import { content } from './content';

export const dynamic = 'force-static';

export function GET() {
  const html = template.replace('__DATA__', () => JSON.stringify(content));
  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
