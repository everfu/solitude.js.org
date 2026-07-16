import {
  BookOpen,
  Coffee,
  CircleDollarSign,
  Gauge,
  Heart,
  Home,
  Layers3,
  Search,
  Sparkles,
  type LucideIcon,
  Zap,
} from 'lucide-react';
import { sponsorsJsonUrl } from '@/lib/shared';

export const buttonClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-[background-color,color,border-color,transform] active:translate-y-px';

export type HomeLocale = 'en' | 'cn';

type LocalizedText = Record<HomeLocale, string>;

export type HomeScene = {
  id: 'home' | 'reading' | 'runtime';
  index: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  points: Record<HomeLocale, string[]>;
  icon: LucideIcon;
  accent: 'brand' | 'cyan' | 'coral';
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

export const installCommands = {
  en: [
    'npm install hexo-theme-solitude@4',
    'theme: solitude',
    'hexo clean && hexo generate && hexo server',
  ],
  cn: [
    'npm install hexo-theme-solitude@4',
    'theme: solitude',
    'hexo clean && hexo generate && hexo server',
  ],
};

export const startSteps = {
  cn: [
    {
      title: '安装主题',
      description: '通过 npm 安装 Solitude 4，或检出 v4.0.0 Git 标签。',
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
      description: 'Install Solitude 4 with npm, or check out the v4.0.0 Git tag.',
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
} satisfies Record<HomeLocale, Array<{ title: string; description: string; command: string }>>;

export const homeScenes: HomeScene[] = [
  {
    id: 'home',
    index: '01',
    eyebrow: {
      cn: '首页体验',
      en: 'Homepage experience',
    },
    title: {
      cn: '让内容先被看见',
      en: 'Let the content lead',
    },
    description: {
      cn: '横幅、推荐与近期文章形成清晰的浏览节奏，让第一次到访的人迅速理解你的博客。',
      en: 'Banners, recommendations, and recent posts create a clear rhythm that makes a blog instantly understandable.',
    },
    points: {
      cn: ['首页横幅', '内容推荐', '分类导航'],
      en: ['Homepage banner', 'Content picks', 'Category navigation'],
    },
    icon: Home,
    accent: 'brand',
  },
  {
    id: 'reading',
    index: '02',
    eyebrow: {
      cn: '阅读与内容',
      en: 'Reading and content',
    },
    title: {
      cn: '长文也有呼吸感',
      en: 'Long-form reading, with room to breathe',
    },
    description: {
      cn: '文章目录、侧栏信息与内容增强各司其职，让技术写作和个人表达保持专注。',
      en: 'Post navigation, side information, and content enhancements keep technical writing focused and personal.',
    },
    points: {
      cn: ['文章目录', 'AI 摘要', '代码与公式'],
      en: ['Post outline', 'AI summaries', 'Code and math'],
    },
    icon: BookOpen,
    accent: 'cyan',
  },
  {
    id: 'runtime',
    index: '03',
    eyebrow: {
      cn: '扩展与运行时',
      en: 'Extensions and runtime',
    },
    title: {
      cn: '按需加载，保持轻盈',
      en: 'Load on demand, stay lightweight',
    },
    description: {
      cn: '原生 ES 模块、统一 PJAX 生命周期和稳定的浏览器 API，让搜索、评论与音乐等扩展更容易维护。',
      en: 'Native ES modules, a unified PJAX lifecycle, and a stable browser API keep search, comments, and music maintainable.',
    },
    points: {
      cn: ['原生 ES 模块', '统一 PJAX 生命周期', 'window.Solitude API'],
      en: ['Native ES modules', 'Unified PJAX lifecycle', 'window.Solitude API'],
    },
    icon: Layers3,
    accent: 'coral',
  },
];

export const runtimeModules: Array<{
  label: string;
  detail: LocalizedText;
  icon: LucideIcon;
}> = [
  {
    label: 'PJAX',
    detail: { cn: '统一生命周期', en: 'Unified lifecycle' },
    icon: Zap,
  },
  {
    label: 'Search',
    detail: { cn: '按需搜索', en: 'On-demand search' },
    icon: Search,
  },
  {
    label: 'API',
    detail: { cn: '稳定扩展入口', en: 'Stable extension API' },
    icon: Sparkles,
  },
  {
    label: 'Runtime',
    detail: { cn: '资源自动清理', en: 'Automatic cleanup' },
    icon: Gauge,
  },
];

export const sponsorWays: Array<{
  href: string;
  label: LocalizedText;
  icon: LucideIcon;
}> = [
  {
    href: 'https://afdian.com/a/everfu',
    label: { en: 'AFDIAN', cn: '爱发电' },
    icon: Heart,
  },
  {
    href: 'https://ko-fi.com/everfu',
    label: { en: 'Ko-fi', cn: 'Ko-fi' },
    icon: Coffee,
  },
  {
    href: 'https://github.com/sponsors/everfu',
    label: { en: 'GitHub Sponsors', cn: 'GitHub Sponsors' },
    icon: CircleDollarSign,
  },
];

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
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const data: unknown = await response.json();
    if (!Array.isArray(data)) return [];

    return data
      .map((item, index) => {
        if (!isSponsor(item)) return null;

        const amount = Number(item.amount);
        if (!Number.isFinite(amount)) return null;

        return { ...item, amount, index };
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
