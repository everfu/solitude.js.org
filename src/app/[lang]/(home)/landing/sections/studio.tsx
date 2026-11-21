'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Camera, Mail, NotebookPen } from 'lucide-react';
import { Figure, FigureHeader } from '../ui/figure';
import desk from '../../art/writing-desk.webp';
import './studio.css';

const subjects = [
  {
    icon: NotebookPen,
    cn: ['文章', '从草稿到长文', '用 Markdown 写下正文，给文章配上封面和标签。读者可以沿着分类，翻回更早的记录。'],
    en: ['Journal', 'From a draft to a long read', 'Write in Markdown, add a cover and tags, and let readers browse your earlier posts by category.'],
  },
  {
    icon: Camera,
    cn: ['相册', '把照片编成一组', '给一次旅行或一个季节留一页相册。并排摆放照片，让画面接着画面讲故事。'],
    en: ['Photos', 'A collection of moments', 'Give a trip or a season its own gallery. Arrange photographs side by side and let one frame lead into the next.'],
  },
  {
    icon: Mail,
    cn: ['友链', '通往朋友的小站', '把常读的独立博客收进友链页，按自己的方式分组，给来访的人留下一站的地址。'],
    en: ['Blogroll', 'A way to a friend’s corner', 'Collect the independent blogs you return to, organize them into groups, and give visitors somewhere to wander next.'],
  },
];

export function Studio({ cn }: { cn: boolean }) {
  const [selected, select] = useState(0);
  const locale = cn ? 'cn' : 'en';
  const [label, title, body] = subjects[selected][locale];

  return (
    <Figure id="studio" aria-label={cn ? '书桌' : 'Studio'} className="px-(--lp-gutter) py-(--lp-section)">
      <FigureHeader title={cn ? ['一张书桌，装下你的', { term: '博客生活' }, '。'] : ['One desk for your ', { term: 'blogging life' }, '.']} />
      <div className="studio-frame" data-scene={selected}>
        <div className="studio-scene">
          <Image src={desk} alt={cn ? '夜色中的写作桌，依次摆着打字机、相机和一叠明信片。' : 'A lamplit writing desk with a typewriter, a camera, and a stack of postcards.'} sizes="(max-width: 1399px) 100vw, 1340px" />
          <div className="studio-locator" aria-hidden />
        </div>
        <div className="studio-buttons" role="group" aria-label={cn ? '选择博客内容' : 'Explore blog features'}>
          {subjects.map(({ icon: Icon, ...subject }, i) => (
            <button type="button" key={subject.en[0]} aria-pressed={selected === i} aria-controls="studio-description" onClick={() => select(i)}>
              <Icon size={17} aria-hidden />{subject[locale][0]}
            </button>
          ))}
        </div>
        <div id="studio-description" aria-live="polite" aria-atomic="true" className="studio-description">
          <h3>{title}</h3>
          <p><span className="sr-only">{label}. </span>{body}</p>
        </div>
      </div>
    </Figure>
  );
}
