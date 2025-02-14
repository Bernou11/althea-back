import { Request, Response } from "express";
import prisma from "../config/PrismaConfig";
import bcrypt from "bcryptjs";
import { User } from "../types/UserType";
import dotenv from "dotenv";
import {generateToken} from "../utils/JwtUtils";

Object.keys(process.env).forEach((key) => {
    if (key.startsWith('DATABASE_')) { // You can specify the variables you want to clear
        delete process.env[key];
    }
});

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: 'production.env' });
} else {
    dotenv.config({ path: 'local.env' });
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            where: {
                supprime: 0,
            },
            select: {
                username: true,
                firstname: true,
                lastname: true,
                email: true,
                age: true
            }
        });
        res.json(users);
    } catch (error) {
        if(error instanceof Error) {
            res.status(500).json({ error: "Error fetching users", details: error.toString() });
        } else {
            console.error("Unknown error fetching users:", error);
            res.status(500).json({ error: "Error fetching users", details: "Unknown error occurred" })
        }
    }
};

export const getUserById = async (req: Request, res: Response): Promise<Response | void> => {
    const id = parseInt(req.params.id);
    try {
        const user = await prisma.user.findUnique({
            where: { id, supprime: 0 },
            select: {
                username: true,
                firstname: true,
                lastname: true,
                email: true,
                age: true
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

export const createUser = async (req: Request, res: Response) => {
    const { firstname, lastname, email, password, age, username, role }: User = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: { firstname, lastname, email, password: hashedPassword, age, username, role },
        });

        const safeUser = handleBigInt(newUser);

        res.status(201).json(safeUser);
    } catch (error) {
        console.error(error);
    }
};

export const login = async (req: Request, res: Response): Promise<any | void> => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(handleBigInt(user.id));
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
};

// Update user
export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { firstname, lastname, email, password, age, username, role }: User = req.body;
    try {
        const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
        const updatedUser = await prisma.user.update({
            where: { id },
            data: { firstname, lastname, email, password: hashedPassword, age, username, role },
        });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: "Error updating user" });
    }
};

// Delete user
export const softDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params; // Get the user ID from the request parameters

    try {
        // Update the 'supprime' field to 1 (soft delete)
        const updatedUser = await prisma.user.update({
            where: {
                id: BigInt(id), // Use the ID from the request params
            },
            data: {
                supprime: 1, // Mark as "deleted" by setting supprime to 1
            },
        });

        const safeUser = handleBigInt(updatedUser)

        // Return the updated user
        res.status(200).json({ message: 'User soft deleted', user: safeUser });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error soft deleting user');
    }
}

export const reactivateUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: BigInt(id),
            },
            data: {
                supprime: 0,
            },
        });

        const safeUser = handleBigInt(updatedUser)

        res.status(200).json({ message: 'User reactivated', user: safeUser });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error soft deleting user');
    }
}

function handleBigInt(obj: any): any {
    if (typeof obj === 'bigint') {
        return obj.toString();
    } else if (Array.isArray(obj)) {
        return obj.map(handleBigInt);
    } else if (typeof obj === 'object' && obj !== null) {
        const newObj: any = {};
        for (const [key, value] of Object.entries(obj)) {
            newObj[key] = handleBigInt(value);
        }
        return newObj;
    }
    return obj;
}
