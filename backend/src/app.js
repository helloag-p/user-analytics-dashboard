import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import healthRoutes from "./routes/health.routes.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import eventRoutes from "./routes/event.routes.js";
import sessionRoutes from "./routes/session.routes.js";
import heatmapRoutes from "./routes/heatmap.routes.js";
const app = express();

app.use(helmet());

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/health", healthRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/heatmap", heatmapRoutes);
app.use("/api/events", eventRoutes);

app.use(notFound);

app.use(errorHandler);

export default app;