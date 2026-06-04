import './global.css';
import type { ReactNode } from 'react';
import { createSiteMetadata } from '@/lib/seo';

export const metadata = createSiteMetadata();

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
