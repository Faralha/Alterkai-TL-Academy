// Guards against Markdown that silently breaks under Astro's CommonMark parser.
// An HTML block (<details>/<summary>) ends only at a blank line, so Markdown
// placed directly after <summary> renders as raw text, and a code fence there
// swallows the rest of the page.
//
// Also warns (without failing the build) about style rules from CONTENT-GUIDE.md.
import fs from 'node:fs';
import path from 'node:path';

const DOCS = 'src/content/docs';
const MAX_PROSE_WORDS = 900;
const problems = [];
const warnings = [];

for (const file of fs.readdirSync(DOCS).filter((f) => /\.mdx?$/.test(f))) {
  const raw = fs.readFileSync(path.join(DOCS, file), 'utf8');
  const lines = raw.split(/\r?\n/);
  const bodyStart = lines[0] === '---' ? lines.indexOf('---', 1) + 1 : 0;
  let inFence = false;
  let calloutsInSection = 0;
  let sectionAt = `${DOCS}/${file}`;
  let proseWords = 0;

  lines.forEach((line, i) => {
    const at = `${DOCS}/${file}:${i + 1}`;
    if (i < bodyStart) return;
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      return;
    }
    if (inFence) return;

    proseWords += line.split(/\s+/).filter(Boolean).length;

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

    if (/^#{1,6} /.test(line)) {
      if (/\p{Extended_Pictographic}/u.test(line)) warnings.push(`${at} emoji in heading; use the frontmatter icon instead`);
      if (/^###\s+Don?'?t?s\b/i.test(line)) warnings.push(`${at} use the <DoDont> component instead of Do's/Don'ts headings`);
      if (/^## /.test(line)) {
        calloutsInSection = 0;
        sectionAt = at;
      }
    }
    if (/^:::(note|tip|caution|danger)\b/.test(line) && ++calloutsInSection === 2) {
      warnings.push(`${sectionAt} more than one callout in this section`);
    }
  });

  if (proseWords > MAX_PROSE_WORDS) {
    warnings.push(`${DOCS}/${file} ~${proseWords} words of prose (target <= ${MAX_PROSE_WORDS})`);
  }
}

if (warnings.length) {
  console.warn(`check-content: ${warnings.length} style warning(s), see CONTENT-GUIDE.md\n` + warnings.join('\n'));
}
if (problems.length) {
  console.error(`check-content: ${problems.length} problem(s)\n` + problems.join('\n'));
  process.exit(1);
}
console.log('check-content: ok');
