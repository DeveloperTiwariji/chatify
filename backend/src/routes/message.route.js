import express from "express";
import { getAllContacts, getChatPartners, getMessagesById, sendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware.js/auth.middleware.js";
import { arcjectProtection } from "../middleware.js/arcjet.middleware.js";

const router = express.Router();


// the middlewares executed in order- so request rate-limiter first, then authenticated.
// this is actually more efficient since unauthenticated requests get blocked by rate limiting before hitting the auth middleware.
router.use(arcjectProtection, protectRoute);

router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessagesById);
router.post("/send/:id", sendMessage);

router.get("/send", (req, res) =>{
    res.send("Send message endpoint")
});

export default router;