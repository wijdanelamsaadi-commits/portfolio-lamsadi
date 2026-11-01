import { readFile, writeFile } from 'node:fs/promises';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';

const source = await readFile(new URL('../src/components/SkillsControlCenter.tsx', import.meta.url), 'utf8');
const result = await postcss([
  tailwindcss({
    content: [{ raw: source, extension: 'tsx' }],
    darkMode: ['selector', '[data-theme="dark"]'],
    theme: { extend: { screens: { lg: '1280px' } } },
    plugins: [],
  }),
]).process('@tailwind base;\n@tailwind utilities;', { from: undefined });

result.root.walkRules((rule) => {
  if (rule.parent.type === 'atrule' && rule.parent.name.endsWith('keyframes')) return;
  rule.selectors = rule.selectors.map((selector) => `:where(#skills-legacy) ${selector}`);
});

await writeFile(new URL('../src/styles/skills-legacy.css', import.meta.url), result.root.toString());
