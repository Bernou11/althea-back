import dotenv from "dotenv";
import { Message } from "../types/Message";
import prisma from "../config/PrismaConfig";
import handleBigInt from "../utils/ConversionsUtils";
import { Request, Response } from "express";

Object.keys(process.env).forEach((key) => {
    if (key.startsWith('DATABASE_')) {
        delete process.env[key];
    }
});

if (process.env.NODE_ENV === 'production.env') {
    dotenv.config({ path: 'production.env' });
} else {
    dotenv.config({ path: 'local.env' });
}

export const createMessage = async (
    req: Request,
    res: Response
) => {
    const { nom, email, phone, message } = req.body;
    try {
        const newMessage = await prisma.message.create({
            data: { nom, email, phone, message },
        });

        const safeMessage = handleBigInt(newMessage);

        res.status(201).json(safeMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const fetchAllMessages = async (req: Request, res: Response): Promise<void> => {
    try {
        const messages = await prisma.message.findMany({
            select: {
                id: true,
                nom: true,
                email: true,
                phone: true,
                created: true,
                treated: true,
            },
        });

        const safeMessages = handleBigInt(messages);

        res.json(safeMessages);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                error: "Error fetching messages",
                details: error.message,
            });
        } else {
            console.error("Unknown error fetching messages:", error);
            res.status(500).json({
                error: "Error fetching messages",
                details: "Unknown error occurred",
            });
        }
    }
};

export const fetchMessageById = async (req: Request, res: Response): Promise<Response | void> => {
    const id = parseInt(req.params.id);
    try {
        const user = await prisma.message.findUnique({
            where: { id },
            select: {
                nom: true,
                email: true,
                phone: true,
                message: true,
            }
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(user);
    } catch (error) {
        if(error instanceof Error) {
            res.status(500).json({ error: "Error fetching users", details: error.toString() });
        } else {
            console.error("Unknown error fetching users:", error);
            res.status(500).json({ error: "Error fetching users", details: "Unknown error occurred" })
        }
    }
};