import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);

// Add a route for the base path /api/messages
router.get("/", protectRoute, (req, res) => {
    // You can decide what this route should do.
    // E.g., return a list of general messages, or an empty array, or a status.
    // For now, let's just send a simple response to prevent the error.
    res.status(200).json({ message: "Messages API root." });
});

router.get("/:id", protectRoute, getMessages); // This must come AFTER the base route "/"

router.post("/send/:id", protectRoute, sendMessage);

export default router;