import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com';

  // Fetch all swords (handle case where DATABASE_URL might not be set during build)
  let swords: { id: string; updatedAt: Date }[] = [];
  try {
    if (process.env.DATABASE_URL) {
      swords = await prisma.sword.findMany({
        select: {
          id: true,
          updatedAt: true,
        },
      });
    }
  } catch (error) {
    // If database is not available during build, continue without sword routes
    console.warn('Database not available during sitemap generation:', error);
  }

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/swords`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/craftsmanship`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ] as MetadataRoute.Sitemap;

  // Dynamic sword routes
  const swordRoutes = swords.map((sword: { id: string; updatedAt: Date }) => ({
    url: `${baseUrl}/swords/${sword.id}`,
    lastModified: sword.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...swordRoutes];
}