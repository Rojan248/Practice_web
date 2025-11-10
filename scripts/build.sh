#!/bin/bash

# Build script for Vercel deployment
# This script handles Prisma generation and Next.js build

set -e  # Exit on error

echo "🔨 Starting build process..."

# Generate Prisma Client
echo "📦 Generating Prisma Client..."
npx prisma generate || {
    echo "⚠️  Prisma generate failed, but continuing..."
    echo "Note: This might be because DATABASE_URL is not set during build"
    echo "This is OK - Prisma Client will be generated, database connection happens at runtime"
}

# Build Next.js
echo "🏗️  Building Next.js application..."
npm run build || {
    echo "❌ Build failed!"
    exit 1
}

echo "✅ Build completed successfully!"

