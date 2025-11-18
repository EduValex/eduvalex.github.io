import fs from 'fs';
import path from 'path';
import url from 'url';
import render from '../server/entry.ssr.js';

async function main() {
  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const outDir = path.resolve(__dirname, '..', 'dist', 'qwik');
  if (!fs.existsSync(outDir)) {
    console.error('Output directory not found:', outDir);
    process.exit(1);
  }

  const chunks = [];
  const stream = {
    write(chunk) {
      if (chunk == null) return;
      chunks.push(typeof chunk === 'string' ? chunk : String(chunk));
    },
  };

  // Render the root route to static HTML
  const urlObj = new URL('https://eduvalex.github.io/qwik/');
  await render({
    stream,
    base: '/qwik/',
    serverData: {
      url: urlObj.toString(),
      qwikcity: {
        params: {},
        response: { loaders: {}, status: 200 },
        ev: { originalUrl: urlObj, url: urlObj },
      },
    },
    containerAttributes: {
      lang: 'en-us',
    },
  });

  const html = chunks.join('');
  const outFile = path.join(outDir, 'index.html');
  fs.writeFileSync(outFile, html, 'utf8');
  console.log('✅ Prerendered:', outFile);
}

main().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
