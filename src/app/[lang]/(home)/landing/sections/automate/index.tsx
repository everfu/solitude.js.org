import { Figure, FigureHeader } from '../../ui/figure';
import { Stage, type Made } from './stage';
import { FILE, SOURCE, OUTPUTS, type Output } from './data';

export function Automate({ cn }: { cn: boolean }) {
 const outputs = {} as Record<Output, Made>;
 for (const output of OUTPUTS) {
   const values = {
     props: ['title: First light', 'tags: [journal]'],
     page: ['First light', 'First light · #journal'],
     og: ['Solitude / First light', 'Solitude / First light · Journal'],
     llms: ['# First light', '# First light\nTags: journal'],
     releases: ['0 posts', 'First light'],
   };
   const preview = (updated: boolean) => <div className="min-h-28 p-4">
     <small className="font-mono text-lp-ink-2">Solitude / {output.title}</small>
     <p className="mt-3 whitespace-pre-line" data-mark="">{values[output.id][Number(updated)]}</p>
   </div>;
   outputs[output.id] = {before: preview(false), after: preview(true)};
 }
 return <Figure id="automate" aria-label={cn ? '构建' : 'Build'} status="building">
   <FigureHeader className="px-(--lp-gutter) pt-(--lp-section) pb-12" title={cn ? ['从一份源文件，生成', {term:'多个视图'}, '。'] : ['One source, ', {term:'multiple views'}, '.']} />
   <Stage file={FILE} source={<pre className="p-3 text-xs">{SOURCE.split('\n').map((line,i)=><span key={i} className="line block">{line}</span>)}</pre>} outputs={outputs} />
 </Figure>;
}
