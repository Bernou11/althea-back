"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
prisma.$connect()
    .then(() => {
    console.log('Connected to the database');
})
    .catch((err) => {
    console.error('Error connecting to the database:', err);
});
exports.default = prisma;
