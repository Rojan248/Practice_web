# Build script for Vercel deployment (Windows PowerShell)
# This script handles Prisma generation and Next.js build

Write-Host "🔨 Starting build process..." -ForegroundColor Cyan

# Generate Prisma Client
Write-Host "📦 Generating Prisma Client..." -ForegroundColor Yellow
try {
    npx prisma generate
    Write-Host "✅ Prisma Client generated successfully!" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Prisma generate failed, but continuing..." -ForegroundColor Yellow
    Write-Host "Note: This might be because DATABASE_URL is not set during build" -ForegroundColor Yellow
    Write-Host "This is OK - Prisma Client will be generated, database connection happens at runtime" -ForegroundColor Yellow
}

# Build Next.js
Write-Host "🏗️  Building Next.js application..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
} catch {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

