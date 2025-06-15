import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

// Initialize the Prisma client
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

// Export the instance for usage in your app
export default prisma;