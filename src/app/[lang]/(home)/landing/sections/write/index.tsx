import { Figure, FigureHeader } from '../../ui/figure';
import { RailBed, RailColumn } from './rail';
import { Stage } from './stage';
const FILE = 'first-post.mdx';
export function Write({ cn }: { cn: boolean }) {
 const title = cn ? '第一篇文章' : 'My first post';
 const intro = cn ? '从这里开始写作。' : 'A new place to write.';
 const steps = ['Frontmatter','Markdown','Code','Links'].map(tab => ({tab,status:'rendering ' + tab}));
 const blocks = ['---\ntitle: ' + title + '\n---', '## ' + title + '\n' + intro, '```js\nconsole.log("Solitude")\n```', '[Solitude](https://solitude.js.org)'];
 const slots = [<h3 key="title">{title}</h3>, <p key="body">{intro}</p>, <pre key="code">{'console.log("Solitude")'}</pre>, <span className="underline" key="link">Solitude</span>];
  return (
    <Figure id="write" aria-label={cn ? '写作' : 'Write'} status={`compiled ${FILE}`}>
      <FigureHeader
        title={cn ? ['用熟悉的 ', {term:'Markdown'}, '，写下新的故事。'] : ['Tell your story with the ', {term:'Markdown'}, ' you already know.']}
        className="px-(--lp-gutter) pt-(--lp-section) pb-10 md:pb-12"
      />
      <Stage
        file={FILE}
        steps={steps}
        sources={blocks}
        slots={slots}
        bed={<RailBed stops={steps.length} />}
        column={<RailColumn id="write" />}
      />
    </Figure>
  );
}
