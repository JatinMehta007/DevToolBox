import { SitemapStream } from 'sitemap';
import { Readable } from 'stream';

export default async function handler(req, res) {
  const sitemap = new SitemapStream({ hostname: 'https://dev-tool-box-jatin.vercel.app' });

  const routes = [
    '/',
    '/icons',
    '/fonts',
    '/colors',
    '/ui',
    '/tools',
    '/logos',
    '/commands',
    '/ai'
  ];

  const stream = Readable.from(routes.map(url => ({ url }))).pipe(sitemap);

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  stream.pipe(res);
}