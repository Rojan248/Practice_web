# Automated Vercel Deployment Script (PowerShell)
# This script will deploy your project to Vercel

Write-Host "🚀 Starting Vercel Deployment" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# Check if Vercel CLI is installed
try {
    $null = Get-Command vercel -ErrorAction Stop
    Write-Host "✅ Vercel CLI is installed" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI is not installed." -ForegroundColor Red
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

Write-Host ""

# Check if user is logged in
try {
    $null = vercel whoami 2>&1 | Out-Null
    Write-Host "✅ Logged in to Vercel" -ForegroundColor Green
} catch {
    Write-Host "🔐 You need to login to Vercel first." -ForegroundColor Yellow
    Write-Host "Please run: vercel login" -ForegroundColor Yellow
    Write-Host "Then run this script again." -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Check if project is linked
if (-not (Test-Path ".vercel/project.json")) {
    Write-Host "🔗 Linking project to Vercel..." -ForegroundColor Cyan
    vercel link --yes
} else {
    Write-Host "✅ Project is already linked" -ForegroundColor Green
}

Write-Host ""
Write-Host "📦 Deploying to Vercel..." -ForegroundColor Cyan
vercel --prod

Write-Host ""
Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "Your site should be live at the URL shown above." -ForegroundColor Cyan

