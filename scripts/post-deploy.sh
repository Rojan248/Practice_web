#!/bin/bash

# Post-Deployment Script
# Run this after deploying to Vercel to set up the database

echo "🚀 Post-Deployment Database Setup"
echo "=================================="
echo ""

# Check if .env.production exists
if [ ! -f ".env.production" ]; then
    echo "⚠️  .env.production not found. Pulling from Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        echo "❌ Vercel CLI is not installed."
        echo "Install it with: npm install -g vercel"
        exit 1
    fi
    
    echo "📥 Pulling environment variables from Vercel..."
    vercel env pull .env.production
fi

# Check if DATABASE_URL is set
if ! grep -q "DATABASE_URL" .env.production; then
    echo "❌ DATABASE_URL not found in .env.production"
    echo "Please add it to Vercel environment variables first."
    exit 1
fi

echo "✅ Environment variables loaded"
echo ""

# Run Prisma migrations
echo "📊 Running database migrations..."
npx prisma migrate deploy

if [ $? -eq 0 ]; then
    echo "✅ Database migrations completed successfully!"
else
    echo "❌ Migration failed. Trying db push instead..."
    npx prisma db push
fi

echo ""
echo "🌱 Seeding database (optional)..."
read -p "Do you want to seed the database? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    npm run db:seed
    echo "✅ Database seeded!"
fi

echo ""
echo "🎉 Setup complete! Your database is ready."
echo "Visit your Vercel deployment to see your live site."

