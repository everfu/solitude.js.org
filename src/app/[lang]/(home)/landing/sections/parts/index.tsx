import { Figure, FigureHeader } from '../../ui/figure';
import { Stage } from './stage';

export function Parts({ cn }: { cn: boolean }) {
  return <Figure id="parts" aria-label={cn ? '架构' : 'Parts'} status="4 layers">
    <Stage header={<FigureHeader title={cn ? ['探索文档背后的 ', {term:'技术栈'}, '。'] : ['Explore the layers behind our ', {term:'documentation'}, '.']} />} />
  </Figure>;
}
