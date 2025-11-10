/**
 * Database Setup Script
 * This script helps set up the database after deployment
 * 
 * Run: node setup-database.js
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Database Setup Script');
console.log('========================\n');

console.log('This script will help you set up your database after deployment.\n');

console.log('Options:');
console.log('1. Create a new Neon database (Free tier)');
console.log('2. Create a new Supabase database (Free tier)');
console.log('3. Use existing database connection string');
console.log('4. Skip (you\'ll set it up manually in Vercel dashboard)\n');

rl.question('Choose an option (1-4): ', (answer) => {
  switch(answer) {
    case '1':
      console.log('\n📦 Setting up Neon database...');
      console.log('Please visit: https://neon.tech');
      console.log('1. Sign up with GitHub');
      console.log('2. Create a new project');
      console.log('3. Copy the connection string');
      console.log('4. Add it to Vercel as DATABASE_URL environment variable\n');
      break;
    case '2':
      console.log('\n📦 Setting up Supabase database...');
      console.log('Please visit: https://supabase.com');
      console.log('1. Sign up with GitHub');
      console.log('2. Create a new project');
      console.log('3. Go to Settings → Database');
      console.log('4. Copy the connection string (URI format)');
      console.log('5. Add it to Vercel as DATABASE_URL environment variable\n');
      break;
    case '3':
      rl.question('Enter your DATABASE_URL: ', (dbUrl) => {
        console.log('\n✅ Connection string received!');
        console.log('Next steps:');
        console.log('1. Add DATABASE_URL to Vercel environment variables');
        console.log('2. Run: npx prisma migrate deploy');
        console.log('3. Run: npm run db:seed (optional)\n');
        rl.close();
      });
      return;
    case '4':
      console.log('\n✅ Skipping database setup.');
      console.log('Remember to:');
      console.log('1. Set up a PostgreSQL database');
      console.log('2. Add DATABASE_URL to Vercel environment variables');
      console.log('3. Run migrations after deployment\n');
      break;
    default:
      console.log('\n❌ Invalid option. Please run the script again.');
  }
  rl.close();
});

