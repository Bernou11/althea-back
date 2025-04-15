import express from "express";
import authenticateToken from '../middlewares/Auth'

import {
    getUserProfile,
    updateUserProfile,
    softDeleteUserProfile,
    reactivateUserProfile,
    createProfileHandler
} from "../controllers/ProfilesController";

const router = express.Router();

router.post("/", createProfileHandler);

router.get("/:id", authenticateToken, async (req, res) => {
    await getUserProfile(req, res);
});
router.put("/update/:id", authenticateToken, updateUserProfile);
router.put("/softDelete/:id", authenticateToken, softDeleteUserProfile);
router.put("/reactivate/:id", authenticateToken, reactivateUserProfile);

export default router;