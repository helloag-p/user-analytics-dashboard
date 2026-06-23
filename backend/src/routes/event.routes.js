import express from "express";

import {

    trackEvent,

    fetchSessions,

    fetchSessionEvents,

    fetchHeatmap

} from "../controllers/event.controller.js";

const router = express.Router();

router.post("/", trackEvent);

// router.get("/sessions", fetchSessions);

// router.get("/sessions/:sessionId", fetchSessionEvents);

// router.get("/heatmap", fetchHeatmap);

export default router;