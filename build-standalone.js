// Builds icai-career-map-standalone.html: the site as one offline file.
// Run with `npm run build:standalone` after changing anything in public/.
const fs = require('fs');
const path = require('path');

const pub = path.join(__dirname, 'public');
const read = f => fs.readFileSync(path.join(pub, f), 'utf8');
// Keep inlined code from closing the <script> tag early.
const inlineJs = code => code.replace(/<\/script/gi, '<\\/script');

let html = read('index.html');

html = html.replace('<link rel="stylesheet" href="style.css">', () => `<style>\n${read('style.css')}\n</style>`);

html = html.replace(/<script src="([^"]+)"><\/script>/g, (_, src) => {
  const prelude = src === 'script.js'
    ? `<script>window.__LAND_PATH = ${JSON.stringify(read('world-land.path').trim())};</script>\n  `
    : '';
  return `${prelude}<script>\n${inlineJs(read(src))}\n</script>`;
});

const out = path.join(__dirname, 'icai-career-map-standalone.html');
fs.writeFileSync(out, html);
console.log(`Wrote ${path.relative(process.cwd(), out)} (${Math.round(html.length / 1024)} KB)`);
