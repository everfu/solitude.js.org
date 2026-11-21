# Solitude homepage visual QA

The layout and pixel animation reference is https://www.fumadocs.dev/. The landing includes MIT-licensed components adapted from fuma-nama/fumadocs at 64d27a3538b537dc21a9bb1957f7a84718d525e7. Source and font licenses accompany the landing components.

The homepage leads with the blog theme and its live demo. The desk panorama, theme screenshots, Markdown press and community observatory explain the project. The closing documentation link adapts the reference’s falling-glyph wordmark for Chinese and English.

## Local production checks

- Chrome at 1440 × 860 in Chinese dark mode, and 390 × 860 in English light mode and Chinese dark mode.
- All three desk scene controls updated the pressed state and description. The optimized panorama decoded at each width. The sponsor field populated and neither width had horizontal overflow.
- The footer canvas changed between frames during normal motion and held a static filled mask with reduced motion. Keyboard activation opened the matching locale’s Astro introduction in each context. No uncaught browser errors occurred during these checks.
- ESLint and the production build passed. The documentation check covered 240 bilingual pages, 404 links and anchors, and 128 redirects.

## Theme screenshots and documentation

Captured the public Astro, Hugo and Hexo demo homepages in Chrome at 1440 × 900. Captured an article in each edition at a 390 × 844 mobile viewport at 2× resolution. The six WebP assets are in `public/showcase`. Homepage and article links open the exact pages pictured.

Verified the three edition selectors by keyboard, both images for every edition, and the six bilingual introduction pages in the production build. Tested the desktop AI panel and navigated from the mobile menu to the installation guide. No uncaught browser errors or failed local image responses occurred in the final run. Compared the desktop reading panel to the current [Fumadocs introduction](https://www.fumadocs.dev/docs).

## Desk artwork

Built-in ImageGen prompt for the project asset in `art/writing-desk.webp` under the homepage directory:

> Use case: illustration-story. A wide 3:1 panoramic pixel-art game background for an independent blogger's homepage, edge to edge one continuous cozy night interior. Three visually connected still lifes left to right: an amber mechanical typewriter under a lamp with a paper manuscript; an olive vintage rangefinder resting against a pile of landscape photographs at an open window with moon and distant indigo mountains; a colorful fan of handwritten postcards, postage stamps and letters on a dark wooden desk. Side-on close perspective, iconic large objects, same warm gold light unifying them. Precisely drawn chunky square pixels, limited nostalgic ochre, russet, cream and deep teal palette, dark indigo shadows, restrained dithering as in premium 1990s adventure game background art. Widescreen, intentional composition, horizontal, no framing or panels, no legible text, no lettering, no logos, no labels, no overlay.
