import type { MetadataRoute } from 'next';
import { createRobots } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return createRobots();
}
