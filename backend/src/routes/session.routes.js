import express from "express";
import {
    fetchSessions,
    fetchSessionEvents,
} from "../controllers/event.controller.js";

const router = express.Router();

router.get("/", fetchSessions);

router.get("/:sessionId/events", fetchSessionEvents);

export default router;