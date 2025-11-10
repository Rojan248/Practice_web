#!/bin/bash

# Deployment Helper Script
# This script helps you deploy your Next.js app to Vercel

echo "🚀 Japanese Sword Craftsmanship Website - Deployment Helper"
echo "============================================================"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed."
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "✅ Vercel CLI is installed"
echo ""

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel:"
    vercel login
fi

echo "✅ Logged in to Vercel"
echo ""

# Check if project is linked
if [ ! -f ".vercel/project.json" ]; then
    echo "🔗 Linking project to Vercel..."
    vercel link
else
    echo "✅ Project is already linked to Vercel"
fi

echo ""
echo "📝 Next steps:"
echo "1. Make sure you have a PostgreSQL database set up"
echo "2. Add DATABASE_URL environment variable in Vercel dashboard"
echo "3. Run: vercel env pull .env.production"
echo "4. Run: npx prisma migrate deploy"
echo "5. Run: vercel --prod"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"

