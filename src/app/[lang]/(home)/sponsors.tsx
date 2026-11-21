import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Radio } from 'lucide-react';
import { SponsorJourney } from './sponsor-journey';
import { formatAmount, sponsorWays, type HomeLocale, type Sponsor } from './home.data';
import observatory from './art/observatory.png';
import './sponsors.css';

export function SponsorSection({ lang, sponsors }: { lang: HomeLocale; sponsors: Sponsor[] }) {
  const cn = lang === 'cn';
  const total = sponsors.reduce((sum, sponsor) => sum + sponsor.amount, 0);

  return (
    <div className="atlas-section">
      <div className="atlas-panel">
        <header className="atlas-station">
          <p className="atlas-kicker"><Radio size={15} /> {cn ? '社区观测站' : 'Community observatory'}</p>
          <h2>{cn ? <>Solitude 的<br /><em>社区星图</em></> : <>The Solitude<br /><em>constellation</em></>}</h2>
          <Image src={observatory} alt="" className="atlas-dish" />
          <dl className="atlas-readings">
            <div><dt>{cn ? '支持者' : 'Supporters'}</dt><dd>{sponsors.length || '—'}</dd></div>
            <div><dt>{cn ? '累计支持' : 'Total support'}</dt><dd>{sponsors.length ? '¥' + formatAmount(total) : '—'}</dd></div>
          </dl>
        </header>
        {sponsors.length ? <SponsorJourney sponsors={sponsors} lang={lang} /> :
          <p className="atlas-offline">{cn ? '赞助数据暂时不可用。' : 'Sponsor data is temporarily unavailable.'}</p>}
      </div>
      <div className="atlas-links">
        <div><strong>{cn ? '支持 Solitude' : 'Support Solitude'}</strong>
          {sponsorWays.map(({ href, label }) => <Link key={href} href={href}>{label[lang]} <ArrowUpRight size={12} /></Link>)}
        </div>
      </div>
    </div>
  );
}
