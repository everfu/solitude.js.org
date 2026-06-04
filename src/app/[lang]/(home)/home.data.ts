import {
  Bot,
  BookOpen,
  CheckCircle2,
  Cloud,
  Code2,
  Coffee,
  CircleDollarSign,
  Database,
  Eye,
  FileCode2,
  FileText,
  Heart,
  Image as ImageIcon,
  Images,
  Link as LinkIcon,
  ListTree,
  MessageCircle,
  Moon,
  Music,
  Palette,
  Search,
  Settings,
  Sigma,
  Sparkles,
  Tags,
  type LucideIcon,
  Zap,
} from 'lucide-react';
import { sponsorsJsonUrl } from '@/lib/shared';

export const buttonClass =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight transition-colors';

export const installCommands = {
  en: [
    'git clone -b dev https://github.com/everfu/hexo-theme-solitude.git themes/solitude',
    'theme: solitude',
    'hexo clean && hexo generate && hexo server',
  ],
  cn: [
    'git clone -b dev https://github.com/everfu/hexo-theme-solitude.git themes/solitude',
    'theme: solitude',
    'hexo clean && hexo generate && hexo server',
  ],
};

export type HomeLocale = 'en' | 'cn';

export type ShowcaseItem = {
  icon: LucideIcon;
  label: string;
};

export type Sponsor = {
  provider: string;
  name: string;
  login: string;
  avatar: string;
  amount: number;
  link: string;
  org: boolean;
};

export const sponsorWays: Array<{
  href: string;
  label: Record<HomeLocale, string>;
  icon: LucideIcon;
}> = [
  {
    href: 'https://afdian.com/a/everfu',
    label: {
      en: 'AFDIAN',
      cn: '爱发电',
    },
    icon: Heart,
  },
  {
    href: 'https://ko-fi.com/everfu',
    label: {
      en: 'Ko-fi',
      cn: 'Ko-fi',
    },
    icon: Coffee,
  },
  {
    href: 'https://github.com/sponsors/everfu',
    label: {
      en: 'GitHub Sponsors',
      cn: 'GitHub Sponsors',
    },
    icon: CircleDollarSign,
  },
];

export const showcaseItems: Record<HomeLocale, ShowcaseItem[]> = {
  en: [
    { label: 'Pjax', icon: Zap },
    { label: 'PWA', icon: Cloud },
    { label: 'Comments', icon: MessageCircle },
    { label: 'Search', icon: Search },
    { label: 'Feature Pages', icon: Palette },
    { label: 'AI Summary', icon: Bot },
    { label: 'Code Highlight', icon: FileCode2 },
    { label: 'Front Matter', icon: FileText },
    { label: 'Lazy Images', icon: ImageIcon },
    { label: 'Dark Mode', icon: Moon },
    { label: 'Post TOC', icon: ListTree },
    { label: 'Gallery', icon: Images },
    { label: 'Music', icon: Music },
    { label: 'Links', icon: LinkIcon },
    { label: 'Moments', icon: Sparkles },
    { label: 'Equipment', icon: Settings },
    { label: 'Math', icon: Sigma },
    { label: 'Lightbox', icon: ImageIcon },
    { label: 'Tag Plugins', icon: Tags },
    { label: 'Local Search', icon: Search },
    { label: 'Algolia', icon: Database },
    { label: 'DocSearch', icon: BookOpen },
    { label: 'PWA Cache', icon: Cloud },
    { label: 'Theme Config', icon: Settings },
  ],
  cn: [
    { label: 'Pjax', icon: Zap },
    { label: 'PWA', icon: Cloud },
    { label: '评论系统', icon: MessageCircle },
    { label: '搜索配置', icon: Search },
    { label: '功能页面', icon: Palette },
    { label: 'AI 摘要', icon: Bot },
    { label: '代码高亮', icon: FileCode2 },
    { label: 'Front Matter', icon: FileText },
    { label: '图片懒加载', icon: ImageIcon },
    { label: '深色模式', icon: Moon },
    { label: '文章目录', icon: ListTree },
    { label: '相册页面', icon: Images },
    { label: '音乐馆', icon: Music },
    { label: '友链页面', icon: LinkIcon },
    { label: '即刻短文', icon: Sparkles },
    { label: '装备页面', icon: Settings },
    { label: '数学公式', icon: Sigma },
    { label: '灯箱预览', icon: ImageIcon },
    { label: '主题标签', icon: Tags },
    { label: '本地搜索', icon: Search },
    { label: 'Algolia', icon: Database },
    { label: 'DocSearch', icon: BookOpen },
    { label: 'PWA 缓存', icon: Cloud },
    { label: '主题配置', icon: Settings },
  ],
};

export const startSteps = {
  cn: [
    {
      title: '安装主题',
      description: '把 Solitude 放进 Hexo 项目的 themes/solitude 目录，或使用包管理器安装。',
      command: installCommands.cn[0],
    },
    {
      title: '启用主题',
      description: '在 Hexo 根目录的 _config.yml 中切换主题名。',
      command: installCommands.cn[1],
    },
    {
      title: '本地启动',
      description: '生成并启动站点，然后在 localhost:4000 查看你的博客。',
      command: installCommands.cn[2],
    },
  ],
  en: [
    {
      title: 'Install the theme',
      description: 'Place Solitude in themes/solitude or install it with your package manager.',
      command: installCommands.en[0],
    },
    {
      title: 'Enable Solitude',
      description: 'Switch the theme name in your Hexo root _config.yml.',
      command: installCommands.en[1],
    },
    {
      title: 'Run locally',
      description: 'Generate and serve the site, then open localhost:4000.',
      command: installCommands.en[2],
    },
  ],
};

export const featureItems = {
  cn: [
    ['流畅浏览体验', 'Pjax、图片懒加载和 PWA，让博客访问更像轻应用。', Zap],
    ['评论与互动', 'Twikoo、Waline、Valine、Artalk、Giscus 都有清晰配置路径。', MessageCircle],
    ['搜索与发现', '支持本地搜索、Algolia 和 DocSearch，适配不同规模内容。', Search],
    ['内容展示组件', '相册、音乐馆、友链、装备、留言等功能页开箱可配。', Palette],
    ['文章增强', 'AI 摘要、代码高亮、数学公式和灯箱让长文更易读。', FileCode2],
    ['配置可维护', '全局配置、Front Matter 和主题配置分层整理，便于升级。', Settings],
  ],
  en: [
    ['Fluid browsing', 'Pjax, lazy loaded images, and PWA support make the blog feel app-like.', Zap],
    ['Comments and interaction', 'Twikoo, Waline, Valine, Artalk, and Giscus are documented paths.', MessageCircle],
    ['Search and discovery', 'Local search, Algolia, and DocSearch cover different content scales.', Search],
    ['Content pages', 'Gallery, music, links, equipment, and message pages are ready to configure.', Palette],
    ['Post enhancements', 'AI summaries, code highlighting, math, and lightbox support improve reading.', FileCode2],
    ['Maintainable config', 'Global config, Front Matter, and theme options are organized for upgrades.', Settings],
  ],
} satisfies Record<HomeLocale, Array<[string, string, LucideIcon]>>;

function isSponsor(value: unknown): value is Omit<Sponsor, 'amount'> & { amount: string | number } {
  if (!value || typeof value !== 'object') return false;

  const sponsor = value as Record<string, unknown>;

  return (
    typeof sponsor.provider === 'string' &&
    typeof sponsor.name === 'string' &&
    typeof sponsor.login === 'string' &&
    typeof sponsor.avatar === 'string' &&
    typeof sponsor.link === 'string' &&
    typeof sponsor.org === 'boolean' &&
    (typeof sponsor.amount === 'string' || typeof sponsor.amount === 'number')
  );
}

export async function getSponsors(): Promise<Sponsor[]> {
  try {
    const response = await fetch(sponsorsJsonUrl, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) return [];

    const data: unknown = await response.json();
    if (!Array.isArray(data)) return [];

    return data
      .map((item, index) => {
        if (!isSponsor(item)) return null;

        const amount = Number(item.amount);
        if (!Number.isFinite(amount)) return null;

        return {
          ...item,
          amount,
          index,
        };
      })
      .filter((item): item is Sponsor & { index: number } => item !== null)
      .sort((a, b) => b.amount - a.amount || a.index - b.index)
      .map(({ index: _index, ...sponsor }) => sponsor);
  } catch {
    return [];
  }
}

export function formatAmount(amount: number) {
  return new Intl.NumberFormat('zh-CN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}
