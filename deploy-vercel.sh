#!/bin/bash

# Automated Vercel Deployment Script
# This script will deploy your project to Vercel

echo "🚀 Starting Vercel Deployment"
echo "=============================="
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
    echo "🔐 You need to login to Vercel first."
    echo "Please run: vercel login"
    echo "Then run this script again."
    exit 1
fi

echo "✅ Logged in to Vercel"
echo ""

# Check if project is linked
if [ ! -f ".vercel/project.json" ]; then
    echo "🔗 Linking project to Vercel..."
    vercel link --yes
else
    echo "✅ Project is already linked"
fi

echo ""
echo "📦 Deploying to Vercel..."
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo "Your site should be live at the URL shown above."

