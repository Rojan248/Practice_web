# Quick Vercel Deployment Guide

## Option 1: Deploy via Vercel Dashboard (Recommended for First Time)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com) and sign in**

3. **Click "Add New" → "Project"**

4. **Import your Git repository**

5. **Configure Project Settings:**
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run vercel-build` (already set in vercel.json)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

6. **Add Environment Variables:**
   - `DATABASE_URL`: Your PostgreSQL connection string
     - Get one from: [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres), [Neon](https://neon.tech), or [Supabase](https://supabase.com)
   - `NEXT_PUBLIC_SITE_URL`: Your production URL (will be provided after first deploy)

7. **Click "Deploy"**

8. **After deployment, run migrations:**
   - Go to your project settings → "Deployments"
   - Or use Vercel CLI: `vercel env pull .env.production && npx prisma migrate deploy`

## Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Set environment variables:**
   ```bash
   vercel env add DATABASE_URL
   vercel env add NEXT_PUBLIC_SITE_URL
   ```

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Important Notes

- ✅ Your `vercel.json` is already configured
- ✅ Build command includes Prisma generation
- ⚠️ You need a PostgreSQL database (free options: Neon, Supabase, Vercel Postgres)
- ⚠️ Set `DATABASE_URL` environment variable before deploying
- ⚠️ Run database migrations after first deployment

## Quick Database Setup

### Using Neon (Free):
1. Go to [neon.tech](https://neon.tech)
2. Sign up and create a project
3. Copy the connection string
4. Use it as `DATABASE_URL` in Vercel

### Using Vercel Postgres:
1. In Vercel dashboard, go to Storage
2. Create a Postgres database
3. Copy the connection string automatically added to your project

## After Deployment

1. Visit your site URL (e.g., `https://your-app.vercel.app`)
2. Run migrations: `npx prisma migrate deploy` (or use Vercel dashboard)
3. Optional: Seed database with `npm run db:seed`

## Troubleshooting

- **Build fails?** Check that `DATABASE_URL` is set
- **Database errors?** Make sure migrations are run
- **Images not loading?** Check that images are in `/public/images/hero/`

