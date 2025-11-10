# Automated Deployment to Vercel

I've prepared everything for you. Follow these steps to deploy:

## Step 1: Deploy via Vercel Dashboard (Easiest - No CLI needed!)

1. **Go to Vercel**: https://vercel.com/new
2. **Sign up/Login** with your GitHub account
3. **Import your repository**:
   - Click "Import Git Repository"
   - Find and select: `Rojan248/Practice_web`
   - Click "Import"

4. **Configure Project** (Vercel auto-detects Next.js):
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `prisma generate && npm run build` (already configured)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

5. **Set up Database**:
   - In the deployment page, you'll see "Environment Variables"
   - Click "Add Environment Variable"
   - We'll set this up in the next step

## Step 2: Create PostgreSQL Database

Choose one option (I recommend Neon - it's free and easy):

### Option A: Neon (Recommended - Free Tier)
1. Go to: https://neon.tech
2. Click "Sign Up" (use GitHub to sign in)
3. Click "Create a project"
4. Name it: `practice-web-db` (or any name)
5. Copy the connection string (it looks like: `postgresql://user:password@host/dbname`)

### Option B: Vercel Postgres (Integrated)
1. In Vercel dashboard, go to Storage tab
2. Click "Create Database" → "Postgres"
3. Name it and create
4. The connection string will be automatically available

### Option C: Supabase (Free Tier)
1. Go to: https://supabase.com
2. Click "Start your project"
3. Create a new project
4. Go to Settings → Database
5. Copy the connection string (URI format)

## Step 3: Add Environment Variables in Vercel

1. In Vercel deployment page, find "Environment Variables"
2. Add:
   - **Name**: `DATABASE_URL`
   - **Value**: Paste your PostgreSQL connection string from Step 2
   - **Environment**: Production, Preview, Development (check all)
3. Click "Add"

## Step 4: Deploy!

1. Click the "Deploy" button
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://your-app-name.vercel.app`

## Step 5: Set Up Database Schema

After deployment, you need to run database migrations. I'll create a script for this.

Run these commands in your terminal:
```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel (follow the prompts)
vercel login

# Link to your project
vercel link

# Pull environment variables
vercel env pull .env.production

# Run database migrations
npx prisma migrate deploy

# (Optional) Seed the database
npm run db:seed
```

## That's It! 🎉

Your website is now live online! Every time you push to GitHub, Vercel will automatically deploy updates.

## Need Help?

If you encounter any issues:
1. Check the build logs in Vercel dashboard
2. Verify DATABASE_URL is set correctly
3. Make sure your database allows connections from Vercel's IPs
4. Check the deployment logs for any errors

## Quick Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Your Repository**: https://github.com/Rojan248/Practice_web
- **Neon Database**: https://neon.tech
- **Vercel Docs**: https://vercel.com/docs

