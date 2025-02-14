import express from "express";
import authenticateToken from '../middlewares/Auth'
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    softDeleteUser,
    reactivateUser,
    login,
} from "../controllers/UsersController";

const router = express.Router();

router.post("/login", login);
router.post("/", createUser);

router.get("/", authenticateToken, getAllUsers);
router.get("/:id", authenticateToken, async (req, res) => {
    await getUserById(req, res);
});
router.put("/update/:id", authenticateToken, updateUser);
router.put("/softDelete/:id", authenticateToken, softDeleteUser);
router.put("/reactivate/:id", authenticateToken, reactivateUser);

export default router;