import express from "express";
import { protectRoute } from "../middlewares/auth.middlewares";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send", protectRoute, sendMessage);

export default router;
