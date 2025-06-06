import express from "express";
import { getMessagesBetween } from "../controllers/messageController.js";

const router = express.Router();

router.get("/:senderId/:receiverId", getMessagesBetween);

export default router;
