import { Request, Response } from "express";
import prisma from "../config/PrismaConfig";
import handleBigInt from "../utils/ConversionsUtils";
import dotenv from "dotenv";
import {Profile} from "../types/ProfileType";
import {softDeleteUser} from "./UsersController";

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

export const getUserProfile = async (req: Request, res: Response): Promise<Response | void> => {
    const id : bigint = req.body.id;

    try {
        const userProfile = await prisma.profile.findFirst({
            where: { user_id : id }
        })
        if(userProfile && userProfile.active == 1){
            return res.status(200).json({userProfile})
        } else {
            return res.status(404).json({ error: "Profile not found" });
        }
    } catch (error) {
        if(error instanceof Error) {
            res.status(500).json({ error: "Error fetching users", details: error.toString() });
        } else {
            console.error("Unknown error fetching users:", error);
            res.status(500).json({ error: "Error fetching users", details: "Unknown error occurred" })
        }
    }
}

export const createUserProfile = async (userId: bigint, bio?: string, firstname?: string, lastname?: string, pseudo?: string, picture?: string) => {
    try {
        await prisma.profile.create({
            data : {
                user_id: userId,
                bio : bio,
                firstname : firstname,
                lastname : lastname,
                pseudo : pseudo,
                picture : picture
            }
        })
    } catch (error) {
        console.error(error);
    }
}

export const createProfileHandler = async (req: Request, res: Response) => {
    try {
        const {userId, bio, firstname, lastname, pseudo, picture} = req.body;
        const profile = await createUserProfile(userId, bio, firstname, lastname, pseudo, picture);
        res.status(201).json({message: "Profile created", profile});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const updateUserProfile = async (req: Request, res: Response): Promise<void> => {
    const profileId = parseInt(req.params.id);
    const { pseudo, firstname, lastname, bio, picture }: Profile = req.body;
    try {
        const updatedUserProfile = await prisma.profile.update({
            where: { id : profileId },
            data: { pseudo, firstname, lastname, bio, picture },
        });
        res.json(updatedUserProfile);
    } catch (error) {
        res.status(400).json({ error: "Error updating profile" });
    }
}

export const softDeleteUserProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedUser = await prisma.profile.update({
            where: {
                id: parseInt(req.params.profileId),
            },
            data: {
                active: 0,
            },
        });

        const safeProfile = handleBigInt(updatedUser)

        await softDeleteUser(safeProfile.user_id)

        res.status(200).json({ message: 'User and profile Profile soft deleted'});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error soft deleting profile');
    }
}

export const reactivateUserProfile = async (id: bigint): Promise<void> => {
    try {
        await prisma.profile.update({
            where: {
                user_id: id,
            },
            data: {
                active: 1,
            },
        });
    } catch (err) {
        console.error(err);
    }
}