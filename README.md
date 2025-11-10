# Japanese Sword Craftsmanship Website

A premium website showcasing the art of Japanese sword making, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Cinematic hero section with parallax effects
- Dynamic sword gallery with animations
- Interactive craftsmanship timeline
- Contact form with server-side validation
- Responsive design and premium animations
- Image optimization and lazy loading
- PostgreSQL database integration

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

### Prerequisites

1. Create a [Vercel account](https://vercel.com/signup)
2. Install Vercel CLI: `npm install -g vercel`
3. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

### Deploy to Vercel

1. Connect your Git repository to Vercel:
   ```bash
   vercel link
   ```

2. Add your environment variables in the Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`

3. Deploy your application:
   ```bash
   vercel --prod
   ```

### Environment Variables

Make sure to set the following environment variables in your Vercel project:

- `DATABASE_URL`: Your PostgreSQL database connection string (required)
- `NEXT_PUBLIC_SITE_URL`: Your production site URL (optional, but recommended)

**Important**: This project now uses PostgreSQL instead of SQLite for production deployment. You'll need to set up a PostgreSQL database before deploying. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy to Vercel

1. **Set up a PostgreSQL database** (choose one):
   - [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) (recommended)
   - [Neon](https://neon.tech) (free tier available)
   - [Supabase](https://supabase.com) (free tier available)

2. **Deploy via Vercel Dashboard**:
   - Push your code to GitHub/GitLab/Bitbucket
   - Go to [vercel.com](https://vercel.com) and import your repository
   - Add `DATABASE_URL` environment variable
   - Click "Deploy"

3. **Run database migrations**:
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Link your project
   vercel link
   
   # Run migrations
   vercel env pull .env.production
   npx prisma migrate deploy
   ```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Production Optimizations

- Enable Vercel Edge Cache in `vercel.json`
- Configure Image Optimization in `next.config.js`
- Set up custom domains in Vercel Dashboard

For more deployment options, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
