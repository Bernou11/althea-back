import { Request, Response } from "express";
import prisma from "../config/PrismaConfig";
import bcrypt from "bcryptjs";
import { User } from "../types/UserType";
import handleBigInt from "../utils/ConversionsUtils";
import dotenv from "dotenv";
import {generateToken} from "../utils/JwtUtils";
import {createUserProfile, reactivateUserProfile} from "./ProfilesController";

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

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.user.findMany({
            where: {
                supprime: 0,
            },
            select: {
                firstname: true,
                lastname: true,
                email: true,
            },
        });

        res.json(users);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                error: "Error fetching users",
                details: error.message,
            });
        } else {
            console.error("Unknown error fetching users:", error);
            res.status(500).json({
                error: "Error fetching users",
                details: "Unknown error occurred",
            });
        }
    }
};

export const getUserById = async (req: Request, res: Response): Promise<Response | void> => {
    const id = parseInt(req.params.id);
    try {
        const user = await prisma.user.findUnique({
            where: { id, supprime: 0 },
            select: {
                firstname: true,
                lastname: true,
                email: true,
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
    const { firstname, lastname, email, password, role, bio, pseudo, picture } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: { firstname, lastname, email, password: hashedPassword, role},
        });

        const safeUser = handleBigInt(newUser);

        req.body.user_id = newUser.id;

        await createUserProfile(newUser.id, bio, firstname, lastname, pseudo, picture);

        res.status(201).json(safeUser);
    } catch (error) {
        console.error(error);
    }
};

export const login = async (req: Request, res: Response): Promise<any | void> => {
    const { email , password, firstname } = req.body;

    try {
        const user = await prisma.user.findFirst({
            where: { email }
        });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(handleBigInt(user.id), user.firstname);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { firstname, lastname, email, password, role }: User = req.body;
    try {
        const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
        const updatedUser = await prisma.user.update({
            where: { id },
            data: { firstname, lastname, email, password: hashedPassword, role },
        });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: "Error updating user" });
    }
};

export const softDeleteUser = async (id : bigint) => {
    try {
        await prisma.user.update({
            where: {
                id: BigInt(id),
            },
            data: {
                supprime: 1,
            },
        });
    } catch (err) {
        console.error(err);
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

        await reactivateUserProfile(safeUser.id)

        res.status(200).json({ message: 'User reactivated', user: safeUser });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error soft deleting user');
    }
}