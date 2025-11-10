# Deployment Guide

This guide will help you deploy your Japanese Sword Craftsmanship website to Vercel.

## Prerequisites

1. **Git Repository**: Your code needs to be in a Git repository (GitHub, GitLab, or Bitbucket)
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com/signup)
3. **PostgreSQL Database**: You'll need a PostgreSQL database (we recommend using [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres), [Neon](https://neon.tech), or [Supabase](https://supabase.com))

## Step 1: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

## Step 2: Push to GitHub/GitLab/Bitbucket

1. Create a new repository on GitHub, GitLab, or Bitbucket
2. Push your code:

```bash
git remote add origin <your-repository-url>
git branch -M main
git push -u origin main
```

## Step 3: Set Up PostgreSQL Database

### Option A: Vercel Postgres (Recommended)

1. Go to your Vercel dashboard
2. Create a new Postgres database
3. Copy the connection string (DATABASE_URL)

### Option B: Neon (Free tier available)

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string from the dashboard

### Option C: Supabase (Free tier available)

1. Sign up at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string (use the URI format)

## Step 4: Deploy to Vercel

### Method 1: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your Git repository
4. Configure the project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `prisma generate && npm run build`
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install`

5. Add Environment Variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., `https://your-app.vercel.app`)

6. Click "Deploy"

### Method 2: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Link your project:
```bash
vercel link
```

4. Set environment variables:
```bash
vercel env add DATABASE_URL
vercel env add NEXT_PUBLIC_SITE_URL
```

5. Deploy:
```bash
vercel --prod
```

## Step 5: Run Database Migrations

After deployment, you need to set up your database schema:

1. **Using Vercel CLI**:
```bash
vercel env pull .env.production
npx prisma migrate deploy
```

2. **Or using Vercel Dashboard**:
   - Go to your project settings
   - Add a build script that runs migrations
   - Or use Vercel's Postgres dashboard to run SQL directly

## Step 6: Seed the Database (Optional)

If you have seed data:

```bash
vercel env pull .env.production
npm run db:seed
```

Or create a one-time API route to seed the database.

## Step 7: Verify Deployment

1. Visit your deployed URL (e.g., `https://your-app.vercel.app`)
2. Check that the site loads correctly
3. Test database connections and forms

## Environment Variables

Make sure to set these in your Vercel project settings:

- `DATABASE_URL`: PostgreSQL connection string
- `NEXT_PUBLIC_SITE_URL`: Your production site URL

## Troubleshooting

### Database Connection Issues

- Verify your `DATABASE_URL` is correct
- Check that your database allows connections from Vercel's IPs
- For Neon/Supabase, ensure connection pooling is enabled if needed

### Build Failures

- Check that Prisma Client is generated: `prisma generate`
- Verify all environment variables are set
- Check build logs in Vercel dashboard

### Migration Issues

- Run migrations manually using `prisma migrate deploy`
- Or use `prisma db push` for development (not recommended for production)

## Custom Domain

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Continuous Deployment

Vercel automatically deploys when you push to your main branch. For other branches, preview deployments are created automatically.

## Support

For more help, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Prisma Deployment](https://www.prisma.io/docs/guides/deployment)

