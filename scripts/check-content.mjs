// Guards against Markdown that silently breaks under Astro's CommonMark parser.
// An HTML block (<details>/<summary>) ends only at a blank line, so Markdown
// placed directly after <summary> renders as raw text, and a code fence there
// swallows the rest of the page.
import fs from 'node:fs';
import path from 'node:path';

const DOCS = 'src/content/docs';
const problems = [];

for (const file of fs.readdirSync(DOCS).filter((f) => /\.mdx?$/.test(f))) {
  const lines = fs.readFileSync(path.join(DOCS, file), 'utf8').split(/\r?\n/);
  let inFence = false;
  lines.forEach((line, i) => {
    const at = `${DOCS}/${file}:${i + 1}`;
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) return;

    if (/^<summary>/.test(line)) {
      if (/\*\*|`/.test(line)) problems.push(`${at} Markdown in <summary> is not rendered; use <strong>/<code>`);
      if ((lines[i + 1] ?? '').trim() !== '') problems.push(`${at} add a blank line after </summary>`);
    }
    if (/^<\/details>/.test(line) && (lines[i - 1] ?? '').trim() !== '' && !/^<summary>/.test(lines[i - 1])) {
      problems.push(`${at} add a blank line before </details>`);
    }
    const code = line.replace(/`[^`]*`/g, '');
    const shortcode = code.match(/(^|\s):[a-z0-9_+-]+:(?=\s|$)/);
    if (shortcode) problems.push(`${at} emoji shortcode ${shortcode[0].trim()} is not supported; paste the emoji`);
  });
}

if (problems.length) {
  console.error(`check-content: ${problems.length} problem(s)\n` + problems.join('\n'));
  process.exit(1);
}
console.log('check-content: ok');
