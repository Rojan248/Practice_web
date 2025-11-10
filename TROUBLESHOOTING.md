# Troubleshooting Deployment Errors

## Common Build Errors and Solutions

### Error: "Can't reach database server" during build

**Solution**: This is normal! Prisma generate doesn't need a database connection. The build should still work.

1. Make sure `DATABASE_URL` is set in Vercel environment variables (even if it's a placeholder)
2. The build will generate Prisma Client without connecting to the database
3. Database connection only happens at runtime

### Error: "Module not found" or missing dependencies

**Solution**: 
1. Check that all dependencies are in `package.json`
2. Make sure `node_modules` is not committed to git
3. Vercel will install dependencies automatically

### Error: TypeScript compilation errors

**Solution**:
1. Run `npm run lint` locally to check for errors
2. Fix any TypeScript errors
3. Make sure `tsconfig.json` is configured correctly

### Error: Build command failed

**Solution**:
1. Check the build logs in Vercel dashboard
2. Verify the build command in `package.json`: `"build": "prisma generate && next build"`
3. Make sure Prisma is installed: `npm install prisma @prisma/client`

### Error: Environment variables not found

**Solution**:
1. Go to Vercel dashboard → Your Project → Settings → Environment Variables
2. Add `DATABASE_URL` with your PostgreSQL connection string
3. Make sure it's set for all environments (Production, Preview, Development)
4. Redeploy after adding environment variables

### Error: Prisma Client not generated

**Solution**:
1. The `postinstall` script should run automatically: `"postinstall": "prisma generate"`
2. If it doesn't, the build command includes it: `prisma generate && next build`
3. Check that Prisma is in dependencies, not devDependencies

### Error: Database connection timeout after deployment

**Solution**:
1. Make sure your database allows connections from Vercel's IPs
2. For Neon/Supabase, enable connection pooling
3. Check that your DATABASE_URL is correct
4. Verify your database is running and accessible

### Error: Migration failed

**Solution**:
1. Run migrations manually after deployment:
   ```bash
   vercel env pull .env.production
   npx prisma migrate deploy
   ```
2. Or use `prisma db push` for development (not recommended for production)
3. Make sure DATABASE_URL is set correctly

## Quick Fixes

### If build fails due to missing DATABASE_URL:

1. Add a placeholder DATABASE_URL in Vercel (the build will work, but runtime will fail until you add the real one):
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/dbname
   ```

2. Or, update the build to skip Prisma if DATABASE_URL is not set (not recommended)

### If TypeScript errors occur:

1. Run locally: `npm run build`
2. Fix any errors that appear
3. Commit and push the fixes

### If dependencies are missing:

1. Check `package.json` has all required dependencies
2. Run `npm install` locally to verify
3. Make sure `package-lock.json` is committed

## Getting Help

1. Check Vercel build logs for detailed error messages
2. Check the Vercel deployment logs
3. Verify all environment variables are set
4. Test the build locally: `npm run build`
5. Check the Vercel documentation: https://vercel.com/docs

## Common Solutions Checklist

- [ ] DATABASE_URL is set in Vercel environment variables
- [ ] All dependencies are in package.json
- [ ] Build command is correct: `prisma generate && next build`
- [ ] TypeScript compiles without errors locally
- [ ] Prisma schema is valid
- [ ] Database is accessible from Vercel
- [ ] Environment variables are set for all environments

## Still Having Issues?

1. Share the exact error message from Vercel build logs
2. Check if the build works locally: `npm run build`
3. Verify your database connection string format
4. Check Vercel's status page for any outages

