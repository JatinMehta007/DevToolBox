import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://dev-tool-box-jatin.vercel.app' });
const writeStream = createWriteStream('./public/sitemap.xml');

// List your routes here
const routes = [
  '/',
  '/icons',
  '/fonts',
  '/colors',
  '/ui',
  '/tools',
  '/logos',
  '/commands',
  '/ai',
];

routes.forEach((url) => sitemap.write({ url }));
sitemap.end();

sitemap.pipe(writeStream);

streamToPromise(sitemap).then(() => {
  console.log(' Sitemap successfully generated at /public/sitemap.xml');
});