// scripts/create-admin.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();


async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@example.com';
  const password = process.env.ADMIN_PASSWORD || 'Password123!';
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.upsert({
    where: {email},
    update: {},
    create: { email, name: 'Owner', password: hashed, role: 'OWNER' }
  });
  console.log('Admin created:', user.email);
}
main().finally(()=>prisma.$disconnect());
