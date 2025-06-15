"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
require("dotenv/config");
// Initialize the Prisma client
const prisma = new client_1.PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
// Export the instance for usage in your app
exports.default = prisma;
