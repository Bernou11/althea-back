import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

prisma.$connect()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err: any) => {
        console.error('Error connecting to the database:', err);
    });

export default prisma