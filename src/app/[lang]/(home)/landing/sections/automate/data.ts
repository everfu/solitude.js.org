export const FILE = 'first-post.md';
export const EDIT = 'tags: [journal]';
export const SOURCE = `---
title: First light
date: 2026-11-20
${EDIT}
---

Hello from Solitude.
`;
export const EDIT_LINE = SOURCE.split('\n').indexOf(EDIT);
export const OUTPUTS = [
  { id: 'props', title: 'frontmatter', status: 'reading frontmatter' },
  { id: 'page', title: 'first-light.html', status: 'rendering first-light.html' },
  { id: 'og', title: 'og.png', status: 'drawing og.png' },
  { id: 'llms', title: 'llms.txt', status: 'writing llms.txt' },
  { id: 'releases', title: 'tags/journal', status: 'updating tag index' },
] as const;

export type Output = (typeof OUTPUTS)[number]['id'];
