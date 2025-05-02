import express from "express";

import {
    createMessage,
    fetchAllMessages,
    fetchMessageById
} from "../controllers/MessagesController";
import authenticateToken from "../middlewares/Auth";

const router = express.Router();

router.post("/", createMessage);
router.get("/", fetchAllMessages);
router.get("/:id", async (req, res) => {
    await fetchMessageById(req, res);
});

export default router;