# Post-Deployment Script for Windows PowerShell
# Run this after deploying to Vercel to set up the database

Write-Host "🚀 Post-Deployment Database Setup" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env.production exists
if (-not (Test-Path ".env.production")) {
    Write-Host "⚠️  .env.production not found. Pulling from Vercel..." -ForegroundColor Yellow
    
    # Check if Vercel CLI is installed
    try {
        $null = Get-Command vercel -ErrorAction Stop
    } catch {
        Write-Host "❌ Vercel CLI is not installed." -ForegroundColor Red
        Write-Host "Install it with: npm install -g vercel" -ForegroundColor Yellow
        exit 1
    }
    
    Write-Host "📥 Pulling environment variables from Vercel..." -ForegroundColor Cyan
    vercel env pull .env.production
}

# Check if DATABASE_URL is set
$envContent = Get-Content .env.production -Raw
if ($envContent -notmatch "DATABASE_URL") {
    Write-Host "❌ DATABASE_URL not found in .env.production" -ForegroundColor Red
    Write-Host "Please add it to Vercel environment variables first." -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Environment variables loaded" -ForegroundColor Green
Write-Host ""

# Run Prisma migrations
Write-Host "📊 Running database migrations..." -ForegroundColor Cyan
npx prisma migrate deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Database migrations completed successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Migration failed. Trying db push instead..." -ForegroundColor Yellow
    npx prisma db push
}

Write-Host ""
Write-Host "🌱 Seeding database (optional)..." -ForegroundColor Cyan
$seed = Read-Host "Do you want to seed the database? (y/n)"
if ($seed -eq "y" -or $seed -eq "Y") {
    npm run db:seed
    Write-Host "✅ Database seeded!" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎉 Setup complete! Your database is ready." -ForegroundColor Green
Write-Host "Visit your Vercel deployment to see your live site." -ForegroundColor Cyan

