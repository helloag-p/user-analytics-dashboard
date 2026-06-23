import express from "express";
import { fetchHeatmap } from "../controllers/event.controller.js";

const router = express.Router();

router.get("/", fetchHeatmap);

export default router;