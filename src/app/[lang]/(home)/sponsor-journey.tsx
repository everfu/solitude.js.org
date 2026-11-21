'use client';

import Image from 'next/image';
import { useState, type CSSProperties } from 'react';
import { formatAmount, type HomeLocale, type Sponsor } from './home.data';

const rowHeight = 138;
const shifts = [-14, 8, -21, 17, -8, 20, -5, 13];

function StarLines({ count, cols }: { count: number; cols: number }) {
  const rows = Math.ceil(count / cols);
  const points = Array.from({ length: count }, (_, i) => ({
    x: (i % cols + 0.5) * 1000 / cols,
    y: Math.floor(i / cols) * rowHeight + 52 + shifts[i % shifts.length],
  }));
  const edges: string[] = [];
  for (let i = 0; i < count; i++) {
    const targets = [];
    if ((i + 1) % cols && i + 1 < count) targets.push(i + 1);
    if (i + cols < count && i % 2 === 0) targets.push(i + cols + (i % cols < cols - 1 && i + cols + 1 < count ? 1 : 0));
    for (const j of targets) edges.push(`M${points[i].x},${points[i].y} L${points[j].x},${points[j].y}`);
  }
  return <svg aria-hidden="true" className={'atlas-lines cols-' + cols} viewBox={`0 0 1000 ${rows * rowHeight}`} preserveAspectRatio="none"><path d={edges.join(' ')} /></svg>;
}

function Portrait({ sponsor }: { sponsor: Sponsor }) {
  const [failed, setFailed] = useState(false);
  return <span className="atlas-avatar">{sponsor.avatar && !failed
    ? <Image src={sponsor.avatar} alt="" fill sizes="52px" unoptimized onError={() => setFailed(true)} />
    : sponsor.name.trim().slice(0, 1)}</span>;
}

export function SponsorJourney({ sponsors, lang }: { sponsors: Sponsor[]; lang: HomeLocale }) {
  const [hover, setHover] = useState<number | null>(null);
  const [focus, setFocus] = useState<number | null>(null);
  const active = sponsors[hover ?? focus ?? -1];
  const cn = lang === 'cn';
  return <div className="atlas-chart">
    <div className="atlas-field">
      {[3, 5].map(cols => <StarLines key={cols} count={sponsors.length} cols={cols} />)}
      <ul style={{ '--row-height': rowHeight + 'px' } as CSSProperties}>
        {sponsors.map((s, i) => <li key={s.provider + '-' + s.login} style={{ '--dy': shifts[i % shifts.length] + 'px' } as CSSProperties}>
          <a href={s.link} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setFocus(i)} onBlur={() => setFocus(null)}
            aria-label={`${s.name} · ${s.provider} · ¥${formatAmount(s.amount)}`}>
            <Portrait sponsor={s} /><span className="atlas-name">{s.name}</span>
          </a>
        </li>)}
      </ul>
    </div>
    <div className="atlas-status"><i aria-hidden />{active ? `${active.name} · ${active.provider.toUpperCase()} · ¥${formatAmount(active.amount)}` : cn ? '选择星点，访问支持者主页' : 'Select a star to visit its supporter'}</div>
  </div>;
}
