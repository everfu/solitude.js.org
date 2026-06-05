import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as FilesComponents from 'fumadocs-ui/components/files';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Banner } from 'fumadocs-ui/components/banner';
import { Callout } from 'fumadocs-ui/components/callout';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import Link from 'next/link';
import type { ComponentProps, ImgHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { RandomAdCard } from '@/components/ads/random-ad-card';

function Badge({ children, type = 'info' }: { children: ReactNode; type?: string }) {
  return <span className={`fd-badge fd-badge-${type}`}>{children}</span>;
}

function ReadMore({
  to,
  title,
  children,
}: {
  to: string;
  title?: string;
  icon?: string;
  target?: string;
  children?: ReactNode;
}) {
  return (
    <Cards>
      <Card title={title ?? 'Read more'} href={to} description={children} />
    </Cards>
  );
}

function PmInstall({ name }: { name: string }) {
  return (
    <TabsComponents.Tabs items={['npm', 'pnpm', 'yarn']}>
      <TabsComponents.Tab>
        <pre>
          <code>{`npm install ${name}`}</code>
        </pre>
      </TabsComponents.Tab>
      <TabsComponents.Tab>
        <pre>
          <code>{`pnpm add ${name}`}</code>
        </pre>
      </TabsComponents.Tab>
      <TabsComponents.Tab>
        <pre>
          <code>{`yarn add ${name}`}</code>
        </pre>
      </TabsComponents.Tab>
    </TabsComponents.Tabs>
  );
}

function TeamCardGroup({ children }: { children: ReactNode }) {
  return <Cards>{children}</Cards>;
}

function TeamCard({
  name,
  title,
  description,
  link,
  children,
}: {
  name?: string;
  title?: string;
  description?: string;
  link?: string;
  children?: ReactNode;
}) {
  return <Card title={name ?? title ?? 'Team'} href={link} description={description ?? children} />;
}

function Blockquote({ children }: ComponentProps<'blockquote'>) {
  return <Callout>{children}</Callout>;
}

function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  const src = typeof props.src === 'string' ? props.src : '';

  if (src.includes('contrib.rocks')) {
    // Next/Image rejects remote SVGs unless the app opts into dangerouslyAllowSVG.
    // This badge is static decorative content, so the native image element is safer here.
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} className={cn('rounded-lg', props.className)} alt={props.alt ?? ''} />;
  }

  const DefaultImage = defaultMdxComponents.img;

  return <DefaultImage {...props} />;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...FilesComponents,
    ...TabsComponents,
    Accordion,
    Accordions,
    Badge,
    Banner,
    Callout,
    Card,
    Cards,
    img: Image,
    Link,
    PmInstall,
    RandomAd: RandomAdCard,
    RandomAdCard,
    ReadMore,
    Step,
    Steps,
    TeamCard,
    TeamCardGroup,
    blockquote: Blockquote,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
