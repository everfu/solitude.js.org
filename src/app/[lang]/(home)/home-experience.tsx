import type { HomeLocale } from './home.data';

type MorphVariant = 'stack' | 'reading' | 'runtime';
type Point = readonly [number, number];

const MORPH_DURATION = '8s';
const MORPH_KEY_TIMES = '0;0.1;0.25;0.35;0.48;0.58;0.71;0.81;0.92;1';
const MORPH_BEGIN: Record<MorphVariant, string> = {
  stack: '0s',
  reading: '-2.66s',
  runtime: '-5.33s',
};

function formatCoordinate(value: number) {
  return Number(value.toFixed(2));
}

function interpolatePoint(from: Point, to: Point, progress: number): Point {
  return [
    formatCoordinate(from[0] + (to[0] - from[0]) * progress),
    formatCoordinate(from[1] + (to[1] - from[1]) * progress),
  ];
}

function formatPoint(point: Point) {
  return `${point[0]} ${point[1]}`;
}

function closedFourPointPath(points: readonly [Point, Point, Point, Point]) {
  let path = `M ${formatPoint(points[0])}`;

  for (let index = 0; index < points.length; index += 1) {
    const from = points[index];
    const to = points[(index + 1) % points.length];
    path += ` C ${formatPoint(interpolatePoint(from, to, 1 / 3))} ${formatPoint(interpolatePoint(from, to, 2 / 3))} ${formatPoint(to)}`;
  }

  return `${path} Z`;
}

function rectanglePath(left: number, top: number, right: number, bottom: number) {
  return closedFourPointPath([
    [left, top],
    [right, top],
    [right, bottom],
    [left, bottom],
  ]);
}

function linePath(from: Point, to: Point, thickness = 0.8) {
  const deltaX = to[0] - from[0];
  const deltaY = to[1] - from[1];
  const length = Math.hypot(deltaX, deltaY) || 1;
  const normalX = (-deltaY / length) * thickness / 2;
  const normalY = (deltaX / length) * thickness / 2;

  return closedFourPointPath([
    [formatCoordinate(from[0] + normalX), formatCoordinate(from[1] + normalY)],
    [formatCoordinate(to[0] + normalX), formatCoordinate(to[1] + normalY)],
    [formatCoordinate(to[0] - normalX), formatCoordinate(to[1] - normalY)],
    [formatCoordinate(from[0] - normalX), formatCoordinate(from[1] - normalY)],
  ]);
}

function circlePath(inset: number) {
  const centerX = 110;
  const centerY = 85;
  const radius = 55 - inset;
  const control = formatCoordinate(radius * 0.55228475);
  const top: Point = [centerX, centerY - radius];
  const right: Point = [centerX + radius, centerY];
  const bottom: Point = [centerX, centerY + radius];
  const left: Point = [centerX - radius, centerY];

  return [
    `M ${formatPoint(top)}`,
    `C ${centerX + control} ${top[1]} ${right[0]} ${centerY - control} ${formatPoint(right)}`,
    `C ${right[0]} ${centerY + control} ${centerX + control} ${bottom[1]} ${formatPoint(bottom)}`,
    `C ${centerX - control} ${bottom[1]} ${left[0]} ${centerY + control} ${formatPoint(left)}`,
    `C ${left[0]} ${centerY - control} ${centerX - control} ${top[1]} ${formatPoint(top)} Z`,
  ].join(' ');
}

function squarePath(inset: number) {
  return rectanglePath(55 + inset, 30 + inset, 165 - inset, 140 - inset);
}

function trianglePath(inset: number) {
  return closedFourPointPath([
    [110, 30 + inset],
    [170 - inset, 140 - inset],
    [110, 140 - inset],
    [50 + inset, 140 - inset],
  ]);
}

const MORPH_ORIGINS: Record<MorphVariant, Array<{ d: string; inset: number; opacity?: number }>> = {
  stack: [
    { d: closedFourPointPath([[49, 27], [182, 66], [158, 137], [26, 97]]), inset: 0 },
    { d: closedFourPointPath([[43, 37], [177, 76], [153, 146], [20, 107]]), inset: 5, opacity: 0.72 },
    { d: closedFourPointPath([[38, 46], [172, 85], [147, 155], [15, 116]]), inset: 10, opacity: 0.48 },
    { d: closedFourPointPath([[33, 56], [166, 95], [142, 165], [10, 126]]), inset: 15, opacity: 0.24 },
  ],
  reading: [
    { d: linePath([40, 25], [40, 145]), inset: 0 },
    { d: linePath([180, 25], [180, 145]), inset: 5 },
    { d: linePath([55, 60], [165, 60]), inset: 10 },
    { d: linePath([55, 75], [150, 75]), inset: 15 },
    { d: linePath([55, 90], [160, 90]), inset: 20 },
    { d: linePath([55, 105], [140, 105]), inset: 25 },
    { d: linePath([55, 120], [155, 120]), inset: 30 },
  ],
  runtime: [
    { d: rectanglePath(54, 95, 94, 145), inset: 0 },
    { d: rectanglePath(102, 65, 142, 145), inset: 8 },
    { d: rectanglePath(150, 25, 190, 145), inset: 16 },
  ],
};

function PrincipleMorph({ variant }: { variant: MorphVariant }) {
  const paths = MORPH_ORIGINS[variant];

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 220 170"
      className={`home-principle-morph home-principle-morph-${variant}`}
    >
      <g className="home-principle-morph-live">
        {paths.map((path, index) => {
          const square = squarePath(path.inset);
          const triangle = trianglePath(path.inset);
          const circle = circlePath(path.inset);
          const values = [path.d, path.d, square, square, triangle, triangle, circle, circle, path.d, path.d].join(';');

          return (
            <path key={`${variant}-${index}`} d={path.d} opacity={path.opacity}>
              <animate
                attributeName="d"
                begin={MORPH_BEGIN[variant]}
                calcMode="linear"
                dur={MORPH_DURATION}
                keyTimes={MORPH_KEY_TIMES}
                repeatCount="indefinite"
                values={values}
              />
            </path>
          );
        })}
      </g>
      <g className="home-principle-morph-static">
        {paths.map((path, index) => (
          <path key={`${variant}-static-${index}`} d={path.d} opacity={path.opacity} />
        ))}
      </g>
    </svg>
  );
}

function Principles({ lang }: { lang: HomeLocale }) {
  const items = [
    {
      title: lang === 'cn' ? '内容优先' : 'Content first',
      copy: lang === 'cn' ? '让文章、分类与推荐自然组成浏览路径。' : 'Posts, topics, and recommendations form a natural path.',
      graphic: <PrincipleMorph variant="stack" />,
    },
    {
      title: lang === 'cn' ? '为阅读设计' : 'Designed for reading',
      copy: lang === 'cn' ? '清晰排版与恰到好处的辅助信息共同服务长文。' : 'Clear typography and quiet context support long-form reading.',
      graphic: <PrincipleMorph variant="reading" />,
    },
    {
      title: lang === 'cn' ? '保持轻盈' : 'Built to stay light',
      copy: lang === 'cn' ? '原生模块和统一生命周期让扩展按需发生。' : 'Native modules and one lifecycle keep extensions on demand.',
      graphic: <PrincipleMorph variant="runtime" />,
    },
  ];

  return (
    <div className="mt-16 grid border-y border-fd-border md:grid-cols-3 md:divide-x md:divide-fd-border">
      {items.map((item, index) => (
        <div key={item.title} className="grid min-h-[350px] grid-rows-[1fr_auto] border-b border-fd-border px-0 py-8 last:border-b-0 md:border-b-0 md:px-8 lg:px-10">
          <div className="grid place-items-center">{item.graphic}</div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-fd-muted-foreground">FIG 0.{index + 1}</p>
            <h3 className="mt-4 text-base font-medium text-fd-foreground">{item.title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-fd-muted-foreground">{item.copy}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HomePrinciples({ lang }: { lang: HomeLocale }) {
  return (
    <section className="border-b border-fd-border bg-fd-background">
      <div className="mx-auto w-full max-w-[1400px] px-5 pb-24 pt-20 md:px-10 md:pb-36 md:pt-32">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <h2 className="max-w-5xl text-4xl font-medium leading-[1.06] tracking-[-0.035em] text-fd-foreground md:text-6xl xl:text-7xl">
            <strong className="font-medium">{lang === 'cn' ? '一种更专注的博客体验。' : 'A more focused kind of blog.'}</strong>{' '}
            <span className="text-fd-muted-foreground">{lang === 'cn' ? '为内容而生，也为长期维护而设计。' : 'Made for content, and designed to last.'}</span>
          </h2>
          <p className="max-w-md text-base leading-7 text-fd-muted-foreground lg:pb-2">{lang === 'cn' ? 'Solitude 把发现、阅读与扩展连成同一条清晰路径。界面保持克制，让每一种能力只在需要时出现。' : 'Solitude connects discovery, reading, and extensibility in one clear path. The interface stays quiet until a capability is useful.'}</p>
        </div>

        <Principles lang={lang} />
      </div>
    </section>
  );
}
