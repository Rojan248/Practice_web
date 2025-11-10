# Quick Start: Deploy to Vercel in 5 Minutes

Follow these steps to deploy your website online:

## Step 1: Push Code to GitHub (2 minutes)

1. **Create a GitHub repository**:
   - Go to [github.com](https://github.com) and create a new repository
   - Don't initialize it with README, .gitignore, or license

2. **Push your code**:
   ```bash
   git add .
   git commit -m "Initial commit - ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## Step 2: Set Up Database (2 minutes)

Choose one option:

### Option A: Vercel Postgres (Easiest)
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Create a new Postgres database in your dashboard
3. Copy the `DATABASE_URL` connection string

### Option B: Neon (Free)
1. Go to [neon.tech](https://neon.tech) and sign up
2. Create a new project
3. Copy the connection string from the dashboard

### Option C: Supabase (Free)
1. Go to [supabase.com](https://supabase.com) and sign up
2. Create a new project
3. Go to Settings → Database → Connection string
4. Copy the URI format connection string

## Step 3: Deploy to Vercel (1 minute)

1. **Import your repository**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Click "Import"

2. **Configure environment variables**:
   - In the "Environment Variables" section, add:
     - Name: `DATABASE_URL`
     - Value: Your PostgreSQL connection string (from Step 2)
   - Click "Add"

3. **Deploy**:
   - Click "Deploy" button
   - Wait for the build to complete (2-3 minutes)

## Step 4: Set Up Database Schema (1 minute)

After deployment, set up your database:

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Link your project**:
   ```bash
   vercel link
   ```

3. **Pull environment variables and run migrations**:
   ```bash
   vercel env pull .env.production
   npx prisma migrate deploy
   ```

4. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

## Step 5: Verify Deployment

1. Visit your deployed URL (shown in Vercel dashboard)
2. Test the website functionality
3. Check that forms and database operations work

## That's It! 🎉

Your website is now live online! Every time you push to your main branch, Vercel will automatically deploy the updates.

## Troubleshooting

### Build Fails
- Check that `DATABASE_URL` is set correctly
- Verify the connection string format
- Check build logs in Vercel dashboard

### Database Connection Error
- Verify your database allows connections from anywhere (or Vercel's IPs)
- Check that the connection string is correct
- For Neon/Supabase, enable connection pooling if available

### Migration Fails
- Make sure you've run `vercel env pull` first
- Check that `DATABASE_URL` is accessible
- Try running `npx prisma db push` instead (for development only)

## Next Steps

- Add a custom domain in Vercel settings
- Set up environment variables for production
- Configure analytics and monitoring
- Set up CI/CD for automated deployments

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

