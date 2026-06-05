export const adPlacements = ['docs-sidebar'] as const;

export type AdPlacement = (typeof adPlacements)[number];

export type AdItem = {
  link: string;
  image?: string;
  icon?: AdIconName;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  cta?: string;
  placements?: AdPlacement[];
};

export type AdIconName = 'cloud' | 'gift' | 'sparkles' | 'zap';

export const ads: AdItem[] = [
  // Add your ad cards here. Image URLs should be allowed in next.config.mjs images.remotePatterns.
  // {
  //   link: 'https://example.com',
  //   image: 'https://your-image-host.example.com/ad.png',
  //   icon: 'sparkles',
  //   title: 'Ad title',
  //   subtitle: 'Ad subtitle',
  //   placements: ['docs-sidebar'],
  // },
  {
    link: 'https://www.aliyun.com/minisite/goods?userCode=yltowy3u',
    image: 'https://img.alicdn.com/imgextra/i1/O1CN01JOLCyL1MysL7GoLbX_!!6000000001504-2-tps-638-244.png',
    icon: 'cloud',
    eyebrow: '云服务精选',
    title: '云小站官方上云',
    subtitle: '稳定可靠，全球部署，助力企业数字化转型',
    cta: '立即上云',
    placements: ['docs-sidebar'],
  },
  {
    link: 'https://www.aliyun.com/minisite/goods?userCode=yltowy3u',
    image: 'https://img.alicdn.com/imgextra/i2/O1CN01f9BFze20Gz0qCaUQS_!!6000000006823-2-tps-638-244.png',
    icon: 'cloud',
    eyebrow: 'AI 长效权益',
    title: '云聚AI 长效权益',
    subtitle: '从模型到应用，全链提效，加速企业创新。',
    cta: '领取权益',
    placements: ['docs-sidebar'],
  },
  {
    link: 'https://www.aliyun.com/minisite/goods?userCode=yltowy3u',
    image: 'https://img.alicdn.com/imgextra/i2/O1CN01CBxUho1TOslO8XL1j_!!6000000002373-2-tps-638-244.png',
    icon: 'cloud',
    eyebrow: '快速部署',
    title: '分钟级部署OpenClaw',
    subtitle: '只需半小时,把Moltbot部署到轻量应用服务器',
    cta: '查看方案',
    placements: ['docs-sidebar'],
  }
];

export function getAdsByPlacement(placement: AdPlacement) {
  return ads.filter((ad) => !ad.placements || ad.placements.includes(placement));
}
