export const appName = 'Solitude Docs';
export const appDescription = 'Documentation for the Hugo and Hexo editions of Solitude.';
export const themeName = 'Solitude';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';
export const docsVersions = ['hugo', 'hexo'] as const;
export type DocsVersion = (typeof docsVersions)[number];
export const defaultDocsVersion: DocsVersion = 'hugo';

export const docsVersionConfig = {
  hugo: {
    label: 'Hugo',
    repositoryUrl: 'https://github.com/everfu/hugo-solitude',
    releaseUrl: 'https://github.com/everfu/hugo-solitude/releases',
    previewUrl: 'https://hugo-solitude.efu.me',
  },
  hexo: {
    label: 'Hexo',
    repositoryUrl: 'https://github.com/everfu/hexo-theme-solitude',
    releaseUrl: 'https://github.com/everfu/hexo-theme-solitude/releases',
    previewUrl: 'https://solitude-demo.efu.me',
  },
} as const satisfies Record<DocsVersion, {
  label: string;
  repositoryUrl: string;
  releaseUrl: string;
  previewUrl: string;
}>;

export function isDocsVersion(value: string): value is DocsVersion {
  return docsVersions.includes(value as DocsVersion);
}

export function getDocsStartPath(version: DocsVersion = defaultDocsVersion) {
  return `${docsRoute}/${version}/getting-started/introduction`;
}

export const releaseUrl = docsVersionConfig[defaultDocsVersion].releaseUrl;
export const themeRepositoryUrl = docsVersionConfig[defaultDocsVersion].repositoryUrl;
export const previewUrl = docsVersionConfig[defaultDocsVersion].previewUrl;
export const sponsorsJsonUrl = 'https://raw.githubusercontent.com/everfu/static/master/sponsors.json';
export const afdianUrl = 'https://afdian.com/a/everfu';
export const githubSponsorUrl = 'https://github.com/sponsors/everfu';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'everfu',
  repo: 'solitude.js.org',
  branch: 'main',
};
